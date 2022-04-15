class RecordNotFoundError extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly message: string;
  public readonly solution: string ;

  constructor() {
    super("RecordNotFoundError");
    this.name = "RecordNotFoundError";
    this.message = "Registro não encontrado";
    this.solution = "Verifique o parâmetro enviado";
    this.statusCode = 400;
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

export { RecordNotFoundError };
