import { Request } from "express";
import { Log } from "../models/Log";

export interface IRequest extends Request {
  log: Log;
}