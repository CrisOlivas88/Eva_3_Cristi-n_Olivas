import Joi from "joi";
import { CreateUsuarioDTO, UpdateUsuarioDTO } from "../dto/UsuarioDTO";

export const createUsuarioSchema: Joi.ObjectSchema<CreateUsuarioDTO> = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

export const updateUsuarioSchema: Joi.ObjectSchema<UpdateUsuarioDTO> = Joi.object().keys({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string()
})
