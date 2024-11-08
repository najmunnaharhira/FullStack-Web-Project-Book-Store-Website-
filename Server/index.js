const express = require("express");
const app = express();
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
  database: "BookInventory",
};

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
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).send({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);

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
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
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
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = req.body;
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

// Update a book
app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const updateBookData = req.body;
  const fields = Object.keys(updateBookData)
    .map((field) => `${field} = ?`)
    .join(", ");
  const values = Object.values(updateBookData);

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

// // Add to cart
// app.post("/cartItems", async (req, res) => {
//   const { user_id, book_id } = req.body;

//   try {
//     const [rows] = await pool.query(
//       "INSERT INTO CartItems (user_id, book_id) VALUES (?, ?)",
//       [user_id, book_id]
//     );
//     res.status(201).send({ message: "Item added to cart successfully" });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });
app.post("/CartItems", async (req, res) => {
  const { user_id, book_id } = req.body;

  if (!user_id || !book_id) {
    return res.status(400).send({ error: "user_id and book_id are required" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO CartItems (user_id, book_id) VALUES (?, ?)",
      [user_id, book_id]
    );
    res.status(201).send({ message: "Item added to cart successfully" });
  } catch (err) {
    console.error("Error adding item to cart:", err); // Log for debugging
    res.status(500).send({ error: "Database error: " + err.message });
  }
});


app.post('/checkout', async (req, res) => {
  const { name, email, phone, shippingAddress, paymentMethod, totalPayment, bookIds } = req.body;

  try {
    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      const [user] = await connection.query('SELECT id FROM users WHERE email = ?', [email]);
      if (user.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      const userId = user[0].id;

      await connection.query('INSERT INTO orders (user_id, total_payment, payment_method) VALUES (?, ?, ?)', [userId, totalPayment, paymentMethod]);
      const [orderResult] = await connection.query('SELECT LAST_INSERT_ID() AS orderId');
      const orderId = orderResult[0].orderId;

      const bookIdArray = bookIds.split(',').map(id => parseInt(id));
      for (const bookId of bookIdArray) {
        const [book] = await connection.query('SELECT price FROM books WHERE id = ?', [bookId]);
        if (book.length > 0) {
          await connection.query('INSERT INTO order_details (order_id, book_id, quantity, price) VALUES (?, ?, ?, ?)', [orderId, bookId, 1, book[0].price]);
        }
      }

      await connection.commit();
      res.status(200).json({ message: 'Checkout successful' });
    } catch (err) {
      await connection.rollback();
      console.error('Error during checkout:', err);
      res.status(500).json({ message: 'Checkout failed. Please try again.' });
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error('Database connection error:', err);
    res.status(500).json({ message: 'Database connection failed. Please try again.' });
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

app.get('/tasks/:userId', (req, res) => {
  const userId = req.params.userId;
  const sql = `SELECT * FROM tasks WHERE user_id = ?`;
  db.query(sql, [userId], (err, results) => {
      if (err) throw err;
      res.json(results);
  });
});

async function run() {
  try {
    // Check if connection to the MySQL server is successful
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
