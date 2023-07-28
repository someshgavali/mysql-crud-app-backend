import express from "express";
import cors from "cors";
import { router as userRouter } from "./Routes/routes.js";
import connection from "./Connection/Connection.js";
const app = express();

const PORT = 8000;

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected successfully...");
});

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
