// server.js
import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import connectDB from "./db/db.js";
import transport from "./routes/transport.route.js";
import contact from "./routes/contanct.route.js";

dotenv.config();

const app = express();


// CORS Configuration
app.use(cors({
  origin: "https://tabassam.vercel.app", // Update if your frontend URL is different
  methods: ["POST"],
  credentials: true,
}));

// Middleware
app.use(express.json());


app.use("/api/transport",transport)
app.use("/api/contact",contact)
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
connectDB();