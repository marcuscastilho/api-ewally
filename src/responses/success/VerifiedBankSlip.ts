import { BankSlip } from '../../models/BankSlip'

class VerifiedBankSlip extends Error {
  public readonly statusCode: number;
  public readonly barCode: string ;
  public readonly amount?: number;
  public readonly expirationDate?: string ;

  

  constructor(props?: BankSlip) {
    super("VerifiedBankSlip");
    this.barCode = props.barCode;
    this.amount = props.amount;
    this.expirationDate = props.expirationDate;
    this.statusCode = 200;
  }

  toRespond(protocol: string) {
    return {
      protocol: protocol,
      barCode: this.barCode,
      amount: this.amount,
      expirationDate: this.expirationDate,
    };
  }
}

export{ VerifiedBankSlip };
