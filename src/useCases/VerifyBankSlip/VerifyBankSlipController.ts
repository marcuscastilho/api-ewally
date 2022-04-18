import { Request } from "express";
import { BankSlip } from "../../models/BankSlip";
import { VerifyBankSlipUseCase } from "./VerifyBankSlipUseCase";

class VerifyBankSlipController {
  constructor(private verifyBankSlipUseCase: VerifyBankSlipUseCase) {}

  async handle(request: Request): Promise<BankSlip> {
    const { barCode } = request.params;

    const bankSlip = await this.verifyBankSlipUseCase.execute({ barCode });

    return bankSlip
  }
}

export { VerifyBankSlipController };
