import Joi from 'joi'

const BankSlipSchema = Joi.object({
  bank_slip_code: Joi.string().min(47).max(48).pattern(/^[0-9]+$/).required(),
})

export { BankSlipSchema }