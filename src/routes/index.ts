import { app } from "../app";
import { bankSlipRoutes } from "./bankSlip";
import { IRequest } from "../types/IRequest";
import { ResponseController } from "../responses/ResponseController";
import { registerLog } from "../middlewares/registerLog";
import { validationSchema } from "../middlewares/validationSchema";

const routes = [...bankSlipRoutes];

for (const route of routes) {
  app[route.method](
    `${route.route}`,
    registerLog,
    (request: IRequest, response, next) =>
      validationSchema(
        request,
        response,
        next,
        route.schema,
        request[route.data_to_validate]
      ),
    async (request: IRequest, response) => {
      try {
        const response_controller = await route.controller[route.action](
          request,
          response
        );

        const success_response = new route.reponse_message(response_controller);

        const handleSuccess = new ResponseController(
          response,
          request,
          success_response
        );
        await handleSuccess.toRespond();
      } catch (err) {
        const handleError = new ResponseController(response, request, err);
        await handleError.toRespond();
      }
    }
  );
}

export { app as appRoutes };
