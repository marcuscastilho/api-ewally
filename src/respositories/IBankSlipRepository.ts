import { BankSlip } from "../models/BankSlip";

export interface IBankSlipRepository {
  save(barCode: BankSlip): Promise<void>;
}
