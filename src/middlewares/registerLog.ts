import { createLogControler } from "../useCases/CreateLog";

const registerLog = async (request, response, next) => {
  try {
    await createLogControler.handle(request);

    next();
  } catch (err) {
    return err;
  }
};

export { registerLog };
