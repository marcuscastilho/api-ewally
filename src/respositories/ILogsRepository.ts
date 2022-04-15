import { Log } from "../models/Log";

export interface ILogsRepository {
  create(log: Log): Promise<void>;
}
