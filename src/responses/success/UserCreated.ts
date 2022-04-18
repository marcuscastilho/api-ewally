class UserCreated extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly message: string;
  public readonly solution: string ;

  constructor(message?: string) {
    super("UserCreated");
    this.name = "UserCreated";
    this.message = "Usuário criado com sucesso";
    this.statusCode = 201;
  }

  toRespond(protocol: string) {
    return {
      protocol: protocol,
      name: this.name,
      message: this.message,
    };
  }
}

export{ UserCreated };
