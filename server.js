import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";

// App config

const app = express();
const port = process.env.PORT || 4000;

//middleware

app.use(express.json());
app.use(cors());

//API endpoint

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, (req, res) => console.log("Server running on port " + port));
