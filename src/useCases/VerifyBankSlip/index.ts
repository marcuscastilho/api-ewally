import { DatabaseBankSlipRepository } from "../../respositories/implementations/database/DatabaseBankSlipRepository";
import { VerifyBankSlipController } from "./VerifyBankSlipController";
import { VerifyBankSlipUseCase } from "./VerifyBankSlipUseCase";

const databaseBankSlipRepository = new DatabaseBankSlipRepository();
const verifyBankSlipUseCase = new VerifyBankSlipUseCase(databaseBankSlipRepository);
const verifyBankSlipController = new VerifyBankSlipController(verifyBankSlipUseCase);

export { verifyBankSlipController };
