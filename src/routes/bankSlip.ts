import { VerifiedBankSlip } from '../responses/success/VerifiedBankSlip';
import { BankSlipSchema } from '../schemas/bankSlip'
import { verifyBankSlipController } from '../useCases/VerifyBankSlip'


const bankSlipRoutes = [
  {
    method: "get",
    route: "/boleto/:barCode",
    action: "handle",
    controller: verifyBankSlipController,
    reponse_message: VerifiedBankSlip,
    schema: BankSlipSchema,
    data_to_validate: 'params'
  },
];

export { bankSlipRoutes };
