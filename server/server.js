import express from "express";
import dbConnection from "./db/conn.js";

const app = express();
const PORT = process.env.PORT || 8008;

app.use(express.json());

const mongoUri = "";
dbConnection(mongoUri);

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