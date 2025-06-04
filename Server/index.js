const express = require("express");
const app = express();
// const SSLCommerzPayment = require('sslcommerz-lts')
const sslcz = require("sslcommerz");

const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "bookinventory",
};

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; //true for live, false for sandbox

// Initialize MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Endpoint to fetch all books or books by category
app.get("/all-books", async (req, res) => {
  const category = req.query?.category;
  let query = "SELECT * FROM books";
  let params = [];

  if (category) {
    query += " WHERE category = ?";
    params.push(category);
  }

  try {
    const [rows] = await pool.query(query, params);
    res.send(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Endpoint to fetch all categories
app.get("/categories", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT DISTINCT category FROM books");
    const categories = rows.map((row) => row.category);
    res.send(categories);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// User registration
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user already exists
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      return res.status(400).send({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ]);

    res.send({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// User login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user in the database
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const user = rows[0];

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    res.send({ message: "Login successful" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Insert a book into the database
app.post("/upload-book", async (req, res) => {
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO books (bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL) VALUES (?, ?, ?, ?, ?, ?)",
      [bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL]
    );
    res.send({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// // Update a book
// app.patch("/book/:id", async (req, res) => {
//   const id = req.params.id;
//   const updateBookData = req.body;
//   const fields = Object.keys(updateBookData)
//     .map((field) => ${field} = ?)
//     .join(", ");
//   const values = Object.values(updateBookData);

//   try {
//     const [result] = await pool.query(
//       UPDATE books SET ${fields} WHERE id = ?,
//       [...values, id]
//     );
//     res.send(result);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// Update a book
app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const updateBookData = req.body;

  // Generate the field assignments for the SQL query (e.g. 'field1 = ?, field2 = ?')
  const fields = Object.keys(updateBookData)
    .map((field) => `${field} = ?`) // Correct template literal
    .join(", ");

  const values = Object.values(updateBookData); // Values from the request body

  try {
    // The SQL query
    const [result] = await pool.query(
      `UPDATE books SET ${fields} WHERE id = ?`, // Wrap query with backticks for template literal
      [...values, id] // Add the book ID to the query values
    );

    // Send the result back as a response
    res.send(result);
  } catch (err) {
    // Send error response if something goes wrong
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

// Get browsing history for a user
app.get("/browsing-history", async (req, res) => {
  const userId = req.query.userId;
  try {
    const [rows] = await pool.query(
      "SELECT b.id, b.bookTitle FROM BrowsingHistory bh JOIN books b ON bh.book_id = b.id WHERE bh.user_id = ? ORDER BY bh.browsed_at DESC",
      [userId]
    );
    res.send(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get recommendations for a user
app.get("/api/recommendations", async (req, res) => {
  const userId = req.query.userId;
  try {
    // Fetch data from different tables based on user activity
    const [wishlistBooks] = await pool.query(
      "SELECT b.* FROM Wishlist w JOIN books b ON w.book_id = b.id WHERE w.user_id = ?",
      [userId]
    );

    const [cartBooks] = await pool.query(
      "SELECT b.* FROM CartItems c JOIN books b ON c.book_id = b.id WHERE c.user_id = ?",
      [userId]
    );

    const [browsingHistoryBooks] = await pool.query(
      "SELECT b.* FROM BrowsingHistory bh JOIN books b ON bh.book_id = b.id WHERE bh.user_id = ?",
      [userId]
    );

    // Combine all recommendations
    const combinedRecommendations = [
      ...wishlistBooks,
      ...cartBooks,
      ...browsingHistoryBooks,
    ];

    // Remove duplicates
    const uniqueRecommendations = Array.from(
      new Set(combinedRecommendations.map((book) => book.id))
    ).map((id) => combinedRecommendations.find((book) => book.id === id));

    res.send(uniqueRecommendations);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get wishlist for a user
app.get("/wishlist", async (req, res) => {
  const userId = req.query.userId;
  try {
    const [rows] = await pool.query(
      "SELECT b.id, b.bookTitle FROM Wishlist w JOIN books b ON w.book_id = b.id WHERE w.user_id = ? ORDER BY w.added_at DESC",
      [userId]
    );
    res.send(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add to cart
app.post("/cartItems", async (req, res) => {
  const { user_id, book_id } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO CartItems (user_id, book_id) VALUES (?, ?)",
      [user_id, book_id]
    );
    res.status(201).send({ message: "Item added to cart successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
//  const tran_id = new ObjectId(),tostring();

// app.post("/checkout",async(req,res)=>{

//   const product = await productCollection.findone({
//     _id: new ObjectId(req.body.productId),
//   });
//   const checkout =req.body;
//   console.log(product);
//   //console.log(req.body);

const { ObjectId } = require("mongodb"); // Make sure to import ObjectId

app.post("/checkout", async (req, res) => {
  // Generate the transaction ID and convert to string
  const tran_id = new ObjectId().toString(); // Correct way to generate ObjectId and convert to string

  const product = await productCollection.findOne({
    _id: new ObjectId(req.body.productId), // Ensure correct usage of ObjectId for query
  });

  const checkout = req.body;

  console.log(product); // Log product details to verify the data fetched
  // console.log(req.body); // You can also log the request body to debug if needed

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // You can perform further operations here, such as storing the checkout details in a database, etc.
  res.status(200).json({
    message: "Checkout successful",
    tran_id: tran_id, // Send the transaction ID in the response
    product: product, // Include product details in the response
  });
});
const product = {
  price: 100, // Example price value, replace it with the actual product price
};

const order = {
  currency: "BDT",
  name: "John Doe",
  address: "Dhaka, Bangladesh",
};

const tran_id = "12345"; // Example transaction ID
const data = {
  total_amount: product?.price,
  currency: order.currency,
  tran_id: tran_id, // use unique tran_id for each API call
  success_url: `${API_BASE_URL}/payment/success/${tran_id}`,
  fail_url: `${API_BASE_URL}/fail`,
  cancel_url: `${API_BASE_URL}/cancel`,
  ipn_url: `${API_BASE_URL}/ipn`,
  shipping_method: "Courier",
  product_name: "Computer.",
  product_category: "Electronic",
  product_profile: "general",
  cus_name: order.name,
  cus_email: "customer@example.com",
  cus_add1: order.address,
  cus_add2: "Dhaka",
  cus_city: "Dhaka",
  cus_state: "Dhaka",
  cus_postcode: "1000",
  cus_country: "Bangladesh",
  cus_phone: "01711111111",
  cus_fax: "01711111111",
  ship_name: "Customer Name",
  ship_add1: "Dhaka",
  ship_add2: "Dhaka",
  ship_city: "Dhaka",
  ship_state: "Dhaka",
  ship_postcode: "1000",
  ship_country: "Bangladesh",
};

console.log(data);

// sslcz.createTransaction(data)
//     .then(apiResponse => {
//         let GatewayPageURL = apiResponse.GatewayPageURL;
//         res.send({ url: GatewayPageURL });

//         const finalOrder = {
//             product,
//             paidStatus: false,
//             tranjectionId: tran_id,
//         };

//         orderCollection.insertOne(finalOrder)
//             .then(() => {
//                 console.log('Redirecting to: ', GatewayPageURL);
//             });
//     })
//     .catch(err => {
//         console.error('Error creating transaction: ', err);
//     });

// app.post("/payment/success/:tranId",async(req,res)=>{
//       console.log(req.params.tranId);
//       const result = await  OderCollection.updateOne({tranjectionId:req.params.tranId},{
//         $set: {
//           paidStatus:true,
//         },
//       });
//        console.log(result);
//       if (result.modifiedCount>0){
//         res.redirect('http://localhost:5173/payment/success/${req.params.tranId}'
//         );
//       }
// });
//    app.post("/payment/fail/:tranId",async(req,res)=>{
//       const result = OrderCollection.deleteOne({transactionId:req.params.tranId});
//       if(result.deleteCount){
//          res.redirect('http://localhost:5173/payment/fail/${req.params.tranId}')
//       }
//    })
// });

// POST request for successful payment
app.post("/payment/success/:tranId", async (req, res) => {
  console.log(req.params.tranId);

  // Update the order to set paidStatus to true
  const result = await OrderCollection.updateOne(
    { transactionId: req.params.tranId },
    {
      $set: {
        paidStatus: true,
      },
    }
  );

  console.log(result);

  if (result.modifiedCount > 0) {
    res.redirect(`${API_BASE_URL}/payment/success/${req.params.tranId}`);
  }
});

// POST request for failed payment
app.post("/payment/fail/:tranId", async (req, res) => {
  const result = await OrderCollection.deleteOne({
    transactionId: req.params.tranId,
  });

  if (result.deletedCount > 0) {
    res.redirect(`${API_BASE_URL}/payment/fail/${req.params.tranId}`);
  }
});

app.post("/checkout", async (req, res) => {
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  const data = req.body; // Assuming 'data' is the payment data from the request

  try {
    // Initialize the payment and wait for the response
    const apiResponse = await sslcz.init(data);

    // Redirect the user to the payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    // Prepare the final order data
    const finalOrder = {
      product: req.body.product, // Ensure you're passing the correct product data
      paidStatus: false, // Payment status
      transactionId: new ObjectId().toString(), // Transaction ID as ObjectId (if needed)
    };

    // MySQL query to insert the final order into the database
    const query = `
      INSERT INTO orders (product, paidStatus, transactionId)
      VALUES (?, ?, ?)
    `;
    const values = [
      finalOrder.product,
      finalOrder.paidStatus,
      finalOrder.transactionId,
    ];

    // Execute the query using the MySQL connection pool
    pool.execute(query, values, (err, results) => {
      if (err) {
        console.error("Error inserting order:", err);
        return res.status(500).send({ message: "Error processing the order" });
      }

      console.log("Order inserted successfully with ID:", results.insertId);
      console.log("Redirecting to: ", GatewayPageURL);
    });
  } catch (error) {
    // Handle any errors in the payment process or database operation
    console.error("Error in payment initialization or order insertion:", error);
    res
      .status(500)
      .send({ message: "An error occurred while processing the payment" });
  }
});

// POST request for successful payment
app.post("/payment/success/:tranId", async (req, res) => {
  console.log(req.params.tranId);

  // Update the order to set paidStatus to true
  const result = await OrderCollection.updateOne(
    { transactionId: req.params.tranId },
    {
      $set: {
        paidStatus: true,
      },
    }
  );

  console.log(result);

  if (result.modifiedCount > 0) {
    res.redirect(`${API_BASE_URL}/payment/success/${req.params.tranId}`);
  }
});

// POST request for failed payment
app.post("/payment/fail/:tranId", async (req, res) => {
  const result = await OrderCollection.deleteOne({
    transactionId: req.params.tranId,
  });

  if (result.deletedCount > 0) {
    res.redirect(`${API_BASE_URL}/payment/fail/${req.params.tranId}`);
  }
});

app.post("/checkout", async (req, res) => {
  const {
    name,
    email,
    phone,
    shippingAddress,
    paymentMethod,
    totalPayment,
    bookIds,
  } = req.body;

  try {
    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      const [user] = await connection.query(
        "SELECT id FROM users WHERE email = ?",
        [email]
      );
      if (user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      const userId = user[0].id;

      await connection.query(
        "INSERT INTO orders (user_id, total_payment, payment_method) VALUES (?, ?, ?)",
        [userId, totalPayment, paymentMethod]
      );
      const [orderResult] = await connection.query(
        "SELECT LAST_INSERT_ID() AS orderId"
      );
      const orderId = orderResult[0].orderId;

      const bookIdArray = bookIds.split(",").map((id) => parseInt(id));
      for (const bookId of bookIdArray) {
        const [book] = await connection.query(
          "SELECT price FROM books WHERE id = ?",
          [bookId]
        );
        if (book.length > 0) {
          await connection.query(
            "INSERT INTO order_details (order_id, book_id, quantity, price) VALUES (?, ?, ?, ?)",
            [orderId, bookId, 1, book[0].price]
          );
        }
      }

      await connection.commit();
      res.status(200).json({ message: "Checkout successful" });
    } catch (err) {
      await connection.rollback();
      console.error("Error during checkout:", err);
      res.status(500).json({ message: "Checkout failed. Please try again." });
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error("Database connection error:", err);
    res
      .status(500)
      .json({ message: "Database connection failed. Please try again." });
  }
});

// Add to wishlist
app.post("/wishlist", async (req, res) => {
  const { user_id, book_id } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO Wishlist (user_id, book_id) VALUES (?, ?)",
      [user_id, book_id]
    );
    res.status(201).send({ message: "Item added to wishlist successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// app.get('/tasks/:userId', (req, res) => {
//   const userId = req.params.userId;
//   const sql = SELECT * FROM tasks WHERE user_id = ?;
//   db.query(sql, [userId], (err, results) => {
//       if (err) throw err;
//       res.json(results);
//   });
// });

app.get("/tasks/:userId", (req, res) => {
  const userId = req.params.userId;

  // Add quotes around the SQL query string
  const sql = "SELECT * FROM tasks WHERE user_id = ?";

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error(err); // Log the error for debugging purposes
      return res
        .status(500)
        .json({ message: "An error occurred while fetching tasks" });
    }
    res.json(results); // Send the results back as JSON
  });
});

async function run() {
  try {
    // Check if connection to the MySQL server is successful
    const connection = await pool.getConnection();
    console.log("Successfully connected to MySQL!");
    connection.release();

    // app.listen(port, () => {
    //   console.log(Server running on port ${port});
    // });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`); // Use backticks for template literals
    });
  } catch (err) {
    console.error("Unable to connect to MySQL:", err.message);
  }
}

run();
