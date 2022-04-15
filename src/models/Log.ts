import { v4 as uuid } from "uuid";

class Log {
  public readonly protocol: string;
  public url: string;
  public method: string;
  public params?: Object;
  public headers?: Object;
  public query?: Object;
  public body?: Object;

  constructor(props: Omit<Log, "protocol">) {
    Object.assign(this, props);
    this.protocol = uuid();
  }
}

export { Log };
