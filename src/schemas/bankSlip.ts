import Joi from 'joi'

const BankSlipSchema = Joi.object({
  id: Joi.string().length(44).pattern(/^[0-9]+$/).required(),
})

export { BankSlipSchema }