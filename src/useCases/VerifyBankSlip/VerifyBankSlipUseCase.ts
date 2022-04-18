import { BankSlip } from "../../models/BankSlip";
import { IBankSlipRepository } from "../../respositories/IBankSlipRepository";
import { IVerifyBankSlipRequestDTO } from "./VerifyBankSlipDTO";

class VerifyBankSlipUseCase {
  constructor(private bankSlipRepository: IBankSlipRepository) {}

  async execute(data: IVerifyBankSlipRequestDTO) {
    const bankSlip = new BankSlip(data);

    await this.bankSlipRepository.save(bankSlip);

    return bankSlip
  }
}

export { VerifyBankSlipUseCase };
