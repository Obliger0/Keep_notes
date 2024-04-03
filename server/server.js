import express from "express";
import dbConnection from "./db/conn.js";
import dotenv from 'dotenv';
const app = express();
const PORT = process.env.PORT || 8008;

dotenv.config();
app.use(express.json());

dbConnection(process.env.MONGO_URI);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is running successfully!',
    status: true,
    data: [],
  });
});
// app.use("/",routers)
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});