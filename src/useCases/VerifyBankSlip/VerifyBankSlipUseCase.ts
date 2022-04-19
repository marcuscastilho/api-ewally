import { BankSlip } from "../../models/BankSlip";
import { IBankSlipRepository } from "../../respositories/IBankSlipRepository";
import { verifyBankSlipCodeTitle } from "../../utils/verifyBankSlipCodeTitle";

class VerifyBankSlipUseCase {
  constructor(private bankSlipRepository: IBankSlipRepository) {}

  async execute(bank_slip_code: string) {
    const bank_slip_params = await verifyBankSlipCodeTitle(bank_slip_code);

    const bank_slip = new BankSlip(bank_slip_params);
    await this.bankSlipRepository.save(bank_slip);

    return bank_slip;
  }
}

export { VerifyBankSlipUseCase };
