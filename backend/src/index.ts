import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import { Database } from "./db/index";
import Routes from "./routes";

export class Server {
  constructor(app: Application) {
    this.config(app);
    this.syncDatabase();
    new Routes(app);
  }

  private config(app: Application): void {
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }

  private syncDatabase(): void {
    const db = new Database();
    db.sequelize?.sync();
  }
}

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = 4000;

app
  .listen(PORT, "212.233.99.182", function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });