class BankSlip {
  public barCode: string;
  public amount?: string;
  public expirationDate?: string;

  constructor(props: BankSlip) {
    Object.assign(this, props);
  }
}

export { BankSlip }
