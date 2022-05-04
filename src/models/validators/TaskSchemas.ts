import Joi from "joi";
import {  TaskDTO } from "../dto/TaskDTO";

export const createTaskSchema: Joi.ObjectSchema<TaskDTO> = Joi.object().keys({
  
  title: Joi.string().required(),
        content: Joi.string().required(),
        done : Joi.string().required(),
        userId : Joi.string().required()

})

export const updateTaskSchema: Joi.ObjectSchema<TaskDTO> = Joi.object().keys({
  title: Joi.string().required(),
        content: Joi.string().required(),
        done : Joi.string().required(),
        userId : Joi.string().required()
})
