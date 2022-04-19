import Joi from 'joi'

const BankSlipSchema = Joi.object({
  bank_slip_code: Joi.string().length(47).pattern(/^[0-9]+$/).required(),
})

export { BankSlipSchema }