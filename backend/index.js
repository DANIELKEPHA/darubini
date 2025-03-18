import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import routes from "./routes/index.js"; // Ensure this file exists!

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ Mount API routes properly
app.use("/api-v1", routes);

// 404 Handler (Keep this at the bottom)
app.use("*", (req, res) => {
  res.status(404).json({
    status: "404 Not Found",
    message: "Page not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
