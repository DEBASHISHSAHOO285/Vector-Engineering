const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const bcrypt = require("bcrypt");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("DB Error:", err));

/* ================= MULTER ================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

/* ================= PRODUCT ================= */

const productSchema = new mongoose.Schema({
  name: String,
  image: String, // ✅ single image
  description: String,
  category: String,
});

const Product = mongoose.model("Product", productSchema);

// ADD PRODUCT
app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category } = req.body;

    const newProduct = new Product({
      name,
      description,
      category,
      image: req.file?.filename,
    });

    await newProduct.save();

    res.json({ message: "Product Added ✅" });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// GET PRODUCTS
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// DELETE
app.delete("/api/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});

// UPDATE
app.put("/api/products/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category } = req.body;

    let updateData = { name, description, category };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    await Product.findByIdAndUpdate(req.params.id, updateData);

    res.json({ message: "Updated ✅" });
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
});

/* ================= USER ================= */

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
  role: { type: String, default: "user" },
});

const User = mongoose.model("User", userSchema);

// REGISTER
app.post("/api/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.json({ message: "Email already exists ❌" });

  const hash = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hash,
    mobile,
  });

  await user.save();

  res.json({ message: "Registered ✅" });
});

// LOGIN ✅ (IMPORTANT FIX)
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.json({ message: "User not found ❌" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.json({ message: "Wrong password ❌" });

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({
      message: "Login success ✅",
      token,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ message: "Login error ❌" });
  }
});

/* ================= ACCOUNT ================= */

app.get("/api/me", async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const actualToken = token.split(" ")[1];

    const decoded = jwt.verify(actualToken, "secretkey");

    const user = await User.findById(decoded.id);

    res.json({
      name: user.name,
      email: user.email,
    });

  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }
});

/* ================= ADMIN ================= */

app.get("/make-admin", async (req, res) => {
  await User.findOneAndUpdate(
    { email: "debashishsahoo361@gmail.com" },
    { role: "admin" }
  );

  res.send("Admin created ✅");
});

/* ================= TEST ================= */

/* app.get("/", (req, res) => {
  res.send("Server running 🚀");
}); */

// Email API

const nodemailer = require("nodemailer");

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "debashishsahoo361@gmail.com",      // 👉 tera email
        pass: "flfv zuot wbfe donx",        // 👉 app password
      },
    });

    await transporter.sendMail({
      from: "debashishsahoo361@gmail.com", // 🔥 always tera email
      to: "debashishsahoo361@gmail.com",   // 🔥 tera inbox
      replyTo: email,              // 🔥 USER EMAIL (IMPORTANT)
      subject: `New Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.json({ message: "Email sent successfully ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Email failed ❌" });
  }
});
const path = require("path");

// serve frontend
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// START
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});


