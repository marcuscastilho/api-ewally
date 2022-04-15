import { Log } from "../../../models/Log";
import { ILogsRepository } from "../../ILogsRepository";

class DatabaseLogsRepository implements ILogsRepository {
  private logs: Log[] = [];

  async create(log: Log): Promise<void> {
    this.logs.push(log);
    console.log(this.logs)
  }
}

export { DatabaseLogsRepository };
