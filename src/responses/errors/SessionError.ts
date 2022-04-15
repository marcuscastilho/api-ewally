class SessionError extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly message: string;
  public readonly solution: string ;

  constructor() {
    super("SessionError");
    this.name = "SessionError";
    this.message = "Acesso Negado";
    this.solution = "Token inválido";
    this.statusCode = 401;
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

export { SessionError };
