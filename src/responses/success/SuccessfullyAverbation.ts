class SuccessfullyAverbation extends Error {
  public readonly statusCode: number;
  public readonly name: string ;
  public readonly message: string;
  public readonly solution: string ;

  constructor(id) {
    super("SuccessfullyAverbation");
    this.name = "SuccessfullyAverbation";
    this.message = "Averbação registrada com sucesso";
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

export{ SuccessfullyAverbation };
