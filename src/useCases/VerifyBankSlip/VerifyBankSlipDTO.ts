export interface IVerifyBankSlipRequestDTO {
  barCode: string;
  amount?: number;
  expirationDate?: Date;
}
