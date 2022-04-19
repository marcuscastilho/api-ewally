import { BankSlip } from "../models/BankSlip";

export interface IBankSlipRepository {
  save(bankSlip: BankSlip): Promise<void>;
}
