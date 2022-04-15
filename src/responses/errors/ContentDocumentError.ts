class ContentDocumentError extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly tag: string;
  public readonly message: string;
  public readonly solution: string;

  constructor({ tag, message, solution }) {
    super("ContentDocumentError");
    this.name = "ContentDocumentError";
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

export { ContentDocumentError };
