class UnauthorizedIssuerError extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly message: string;
  public readonly solution: string ;

  constructor() {
    super("UnauthorizedIssuerError");
    this.name = "UnauthorizedIssuerError";
    this.message = "Emitente não autorizado";
    this.solution = "Vincule o emitente ao seu acesso";
    this.statusCode = 403;
  }

  toRespond(protocol: string) {
    return {
      protocol: protocol,
      name: this.name,
      message: this.message,
      solution: this.solution,
    };
  }

}

export { UnauthorizedIssuerError };
