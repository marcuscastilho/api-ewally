import { BankSlip } from "../../../models/BankSlip";
import { IBankSlipRepository } from "../../IBankSlipRepository";

class DatabaseBankSlipRepository implements IBankSlipRepository {
  private bankSlips: BankSlip[] = [];

  async save(data: BankSlip): Promise<void> {
    this.bankSlips.push(data);

    console.log(this.bankSlips)
  }
}

export { DatabaseBankSlipRepository };
