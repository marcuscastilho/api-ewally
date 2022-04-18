import { createUserControler } from "../useCases/CreateUser";
import { UserSchema } from "../schemas/user";
import { UserCreated } from "../responses/success/UserCreated";

const userRoutes = [
  {
    method: "post",
    route: "/usuarios",
    action: "handle",
    controller: createUserControler,
    reponse_message: UserCreated,
    schema: UserSchema,
    data_to_validate: 'body'
  },
];

export { userRoutes };
