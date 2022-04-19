import { Request } from "express";
import { BankSlip } from "../../models/BankSlip";
import { VerifyBankSlipUseCase } from "./VerifyBankSlipUseCase";

class VerifyBankSlipController {
  constructor(private verifyBankSlipUseCase: VerifyBankSlipUseCase) {}

  async handle(request: Request): Promise<BankSlip> {
    const { bank_slip_code } = request.params;

    const bank_slip = await this.verifyBankSlipUseCase.execute(bank_slip_code);

    return bank_slip;
  }
}

export { VerifyBankSlipController };
