import dotenv from "dotenv";
import express, { Request, Response, NextFunction} from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import "./database";
import { router } from "./routes";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }
  
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});


app.listen(process.env.PORT || 3333, () => console.log("Running... 🏃🏻"));