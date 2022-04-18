import "dotenv/config";
import http from "http";
import { appRoutes } from "./routes";

const server = http.createServer(appRoutes);

server.listen({ port: process.env.PORT, hostname: process.env.HOST });

server.on("listening", function () {
  console.log(`API ONLINE AT - http://${process.env.HOST}:${process.env.PORT}`);
});
