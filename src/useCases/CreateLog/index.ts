import { DatabaseLogsRepository } from "../../respositories/implementations/database/DatabaseLogsRepository";
import { CreateLogController } from "./CreateLogController";
import { CreateLogUseCase } from "./CreateLogUseCase";

const databaseLogsRepository = new DatabaseLogsRepository();
const createLogUseCase = new CreateLogUseCase(databaseLogsRepository);
const createLogControler = new CreateLogController(createLogUseCase);

export {  createLogControler };
