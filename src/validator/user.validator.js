import Joi from "joi"

const userValidator =
    Joi.object({
        name: Joi.string().regex(/^[a-zA-Z$]{1,20}$/).required(),
        surname: Joi.string().regex(/^[a-zA-Z$]{1,20}$/).required(),
        age:Joi.number().min(1).max(120).required()
    })

export {userValidator}