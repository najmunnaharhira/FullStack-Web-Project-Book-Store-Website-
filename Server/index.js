const express = require("express");
const app = express();
const SSLCommerzPayment = require("sslcommerz-lts");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt"); // Corrected require
const { v4: uuidv4 } = require("uuid");
const port = process.env.PORT || 5000;

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Configuration ---
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "bookinventory",
};

// SSLCommerz Store Information from .env
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; // false for sandbox, true for live

// Initialize MySQL connection pool
const pool = mysql.createPool(dbConfig);

// --- API Endpoints ---

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ( ... other existing endpoints like /all-books, /categories, /register, /login, /upload-book, etc. are assumed to be correct and are omitted for brevity ... )

// Update a book
app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const updateBookData = req.body;

  const fields = Object.keys(updateBookData)
    .map((field) => `${field} = ?`)
    .join(", ");
  const values = Object.values(updateBookData);

  if (fields.length === 0) {
    return res.status(400).send({ message: "No fields to update." });
  }

  try {
    const [result] = await pool.query(
      `UPDATE books SET ${fields} WHERE id = ?`,
      [...values, id]
    );
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a book
app.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query("DELETE FROM books WHERE id = ?", [id]);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get a single book data
app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query("SELECT * FROM books WHERE id = ?", [id]);
    if (rows.length === 0) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.send(rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// --- Checkout and Payment Logic ---

app.post("/checkout", async (req, res) => {
  const { userId, cart, customerInfo } = req.body;
  const tran_id = uuidv4();

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const total_amount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Prepare data for SSLCommerz, using environment variables for URLs
  const data = {
    total_amount: total_amount,
    currency: "BDT",
    tran_id: tran_id,
    // UPDATED: Using process.env.API_BASE_URL for server-to-server communication
    success_url: `${process.env.API_BASE_URL}/payment/success/${tran_id}`,
    fail_url: `${process.env.API_BASE_URL}/payment/fail/${tran_id}`,
    cancel_url: `${process.env.API_BASE_URL}/payment/cancel/${tran_id}`,
    ipn_url: `${process.env.API_BASE_URL}/payment/ipn`, // IPN is a single endpoint for all transactions
    shipping_method: "Courier",
    product_name: "Book(s) from Book Inventory",
    product_category: "Books",
    product_profile: "general",
    cus_name: customerInfo.name,
    cus_email: customerInfo.email,
    cus_add1: customerInfo.address,
    cus_city: customerInfo.city,
    cus_postcode: customerInfo.postcode,
    cus_country: "Bangladesh",
    cus_phone: customerInfo.phone,
    ship_name: customerInfo.name,
    ship_add1: customerInfo.address,
    ship_city: customerInfo.city,
    ship_postcode: customerInfo.postcode,
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

  try {
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
      const [orderResult] = await connection.query(
        "INSERT INTO orders (user_id, transaction_id, total_amount, paid_status) VALUES (?, ?, ?, ?)",
        [userId, tran_id, total_amount, false]
      );
      const orderId = orderResult.insertId;

      for (const item of cart) {
        await connection.query(
          "INSERT INTO order_details (order_id, book_id, quantity, price) VALUES (?, ?, ?, ?)",
          [orderId, item.bookId, item.quantity, item.price]
        );
      }

      const apiResponse = await sslcz.init(data);
      await connection.commit();

      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.send({ url: GatewayPageURL });
    } catch (dbError) {
      await connection.rollback();
      console.error("Database error during checkout:", dbError);
      res.status(500).send({ message: "Database operation failed." });
    } finally {
      connection.release();
    }
  } catch (paymentError) {
    console.error("SSLCommerz initialization failed:", paymentError);
    res.status(500).send({ message: "Payment gateway failed to initialize." });
  }
});

// Payment Success Callback
app.post("/payment/success/:tranId", async (req, res) => {
  const tranId = req.params.tranId;
  try {
    const [result] = await pool.query(
      "UPDATE orders SET paid_status = ? WHERE transaction_id = ?",
      [true, tranId]
    );

    if (result.affectedRows > 0) {
      // UPDATED: Redirect user to the FRONTEND success page
      res.redirect(`${process.env.FRONTEND_URL}/payment/success/${tranId}`);
    } else {
      res.status(404).send("Order not found or already updated.");
    }
  } catch (err) {
    console.error("Error updating payment status:", err);
    res.status(500).send(err.message);
  }
});

// Payment Fail Callback
app.post("/payment/fail/:tranId", async (req, res) => {
  const tranId = req.params.tranId;
  try {
    const [result] = await pool.query(
      "DELETE FROM orders WHERE transaction_id = ?",
      [tranId]
    );

    if (result.affectedRows > 0) {
      // UPDATED: Redirect user to the FRONTEND failure page
      res.redirect(`${process.env.FRONTEND_URL}/payment/fail/${tranId}`);
    } else {
      res.status(404).send("Order not found.");
    }
  } catch (err) {
    console.error("Error handling failed payment:", err);
    res.status(500).send(err.message);
  }
});

// Payment Cancel Callback
app.post("/payment/cancel/:tranId", async (req, res) => {
  const tranId = req.params.tranId;
  try {
    await pool.query(
      "DELETE FROM orders WHERE transaction_id = ? AND paid_status = false",
      [tranId]
    );
    // UPDATED: Redirect user to the FRONTEND cancellation page
    res.redirect(`${process.env.FRONTEND_URL}/payment/cancel`);
  } catch (err) {
    console.error("Error handling cancelled payment:", err);
    res.status(500).send(err.message);
  }
});

// Example of a fixed simple endpoint
app.get("/tasks/:userId", async (req, res) => {
  const userId = req.params.userId;
  const sql = "SELECT * FROM tasks WHERE user_id = ?";

  try {
    const [results] = await pool.query(sql, [userId]);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching tasks" });
  }
});

// --- Server Initialization ---
async function run() {
  try {
    const connection = await pool.getConnection();
    console.log("Successfully connected to MySQL!");
    connection.release();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Unable to connect to MySQL:", err.message);
  }
}

run();
