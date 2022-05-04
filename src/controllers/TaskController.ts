import { PrismaClient } from '../../node_modules/.prisma/client'
import { Request, Response } from "express"

import { TaskDTO } from "../models/dto/TaskDTO"
import { createTaskSchema, updateTaskSchema } from "../models/validators/TaskSchemas"

const prisma = new PrismaClient()

export default class TaskController{
  public readonly getAll = async (_req : Request, res: Response) => {
    const Task : TaskDTO[] = await prisma.task.findMany()
    res.json(Task)
  }

  public readonly getById = async (req : Request, res: Response) => {
    const { id } = req.params
    const Task = await prisma.task.findFirst({ where:{ id:parseInt(id) }});
    res.json(Task)
  }

  public readonly create = async (req : Request, res: Response) => {
    let Task = req.body as TaskDTO

    try{
      
      await createTaskSchema.validateAsync(Task);
      const productCreated = await prisma.task.create({ data: {
        title: Task.title,
        content: Task.content,
        done : true,
        userId : Task.userId,
      }});
      console.log(productCreated);
      Task=productCreated;
    } catch (error){
      res.status(400).json({message: error.message})
      return
    }
    
    res.json({ 
      ...Task
    })
  }

  public readonly update = async (req : Request, res: Response) => {
    const { id } = req.params
     let Task = req.body as TaskDTO

    try{
      await updateTaskSchema.validateAsync(Task)
      const updatedUser = await prisma.task.update({ where: {
        id: Task.id,
      }, data : {
        title: Task.title,
        content: Task.content,
        done : true,
        userId : Task.userId,
      }});
      Task=updatedUser;    
      console.log(updatedUser);

    } catch (error){
      res.status(400).json({message: error.message})
      return
    }
    
    console.log('Hola vengo a editar', id, Task)
    res.sendStatus(204)
  }

  public readonly delete = async (req : Request, res: Response) => {
    const { id }  = req.params;
    const deletedUser = await prisma.task.delete({
      where: {
        id: parseInt(id)
      },
    });
    console.log(deletedUser);
    console.log('Con esto eliminas', id)
    res.sendStatus(204)
  }

}
