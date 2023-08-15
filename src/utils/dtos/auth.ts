import Joi from 'joi'

export const userSignupDto = Joi.object({
    firstName: Joi.string().max(50).required(),
    lastName: Joi.string().max(50).required(),
    email: Joi.string().max(50).required(),
    password: Joi.string().min(8).required(),
    Gender: Joi.string().valid('Male', 'Female', 'other'),
    //countryCode: Joi.string().valid('PK').required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{7,15}$/).required(),
});