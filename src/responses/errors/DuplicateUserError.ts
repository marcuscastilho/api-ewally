class DuplicateUserError extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly message: string;
  public readonly solution: string;

  constructor() {
    super("DuplicateUserError");
    this.name = "DuplicateUserError";
    this.message = "Usuário já cadastrado anterirormente";
    this.solution = "Verifique o usuário enviado";
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

export { DuplicateUserError };
