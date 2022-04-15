class InternalServerError extends Error {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly message: string;
  public readonly solution: string;
  public readonly phone: string ;

  constructor() {
    super("InternalServerError");
    this.name = "InternalServerError";
    this.message = "Erro Interno";
    this.solution = "Contatar equipe de suporte smartload";
    this.phone = "(11) 2222-1289";
    this.statusCode = 500;
  }

  toRespond(protocol?: string) {
    return {
      protocol: protocol,
      name: this.name,
      message: this.message,
      solution: this.solution,
      phone: this.phone,
    };
  }
}

export { InternalServerError };
