import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Serve your static HTML and JS files
app.use(express.static("public"));

// Route for specific keys you want to expose
app.get("/api/ably-key", (req, res) => {
  res.json({ key: process.env.ABLY_API_KEY });
});

app.get("/api/torbox-key", (req, res) => {
  res.json({ key: process.env.TORBOX_API_KEY });
});

// (Notice we do NOT expose OpenAI here — keep it secret on the server)
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
