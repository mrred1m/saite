import "reflect-metadata";
import express, { Application } from "express";
import { Server } from './src/index';

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