import { Log } from "../../models/Log";
import { ILogsRepository } from "../../respositories/ILogsRepository";
import { ICreateLogRequestDTO } from "./CreateLogDTO";

class CreateLogUseCase {
  constructor(private logsRepository: ILogsRepository) {}

  async execute(data: ICreateLogRequestDTO) {
    const log = new Log(data);

    await this.logsRepository.create(log);

    return log
  }
}

export { CreateLogUseCase };
