class BodyContentError extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly tag: string;
  public readonly message: string;
  public readonly solution: string;

  constructor({ tag, message, solution }) {
    super("BodyContentError");
    this.name = "BodyContentError";
    this.tag = tag;
    this.message = message;
    this.solution = solution;
    this.statusCode = 400;
  }

  toRespond(protocol: string) {
    return {
      protocol: protocol,
      name: this.name,
      tag: this.tag,
      message: this.message,
      solution: this.solution,
    };
  }
}

export { BodyContentError };
