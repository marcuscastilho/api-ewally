import "dotenv/config";
import { app } from "./app";
import http from "http";

const server = http.createServer(app);

server.listen({ port: process.env.PORT, hostname: process.env.HOST });

server.on("listening", function () {
  console.log(`API ONLINE AT - http://${process.env.HOST}:${process.env.PORT}`);
});
