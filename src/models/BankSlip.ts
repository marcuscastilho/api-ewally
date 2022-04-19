class BankSlip {
  public barCode: string;
  public amount?: number;
  public expirationDate?: string;

  constructor(props: BankSlip) {
    Object.assign(this, props);
  }
}

export { BankSlip }
