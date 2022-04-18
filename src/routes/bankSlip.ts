import { UserCreated } from '../responses/success/UserCreated';
import { BankSlipSchema } from '../schemas/bankSlip'


const bankSlipRoutes = [
  {
    method: "get",
    route: "/boleto/:id",
    action: "handle",
    controller: "",
    reponse_message: UserCreated,
    schema: BankSlipSchema,
    data_to_validate: 'params'
  },
];

export { bankSlipRoutes };
