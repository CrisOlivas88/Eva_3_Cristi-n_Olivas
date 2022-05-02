import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { CreateUsuarioDTO, UpdateUsuarioDTO, UsuarioDTO } from "../models/dto/UsuarioDTO"
import { createUsuarioSchema, updateUsuarioSchema } from "../models/validators/UsuarioSchemas"

const prisma = new PrismaClient()

export default class UsuarioController{
  public readonly getAll = async (_req : Request, res: Response) => {
    const Usuario : UsuarioDTO[] = await prisma.usuario.findMany()
    res.json(Usuario)
  }

  public readonly getById = async (req : Request, res: Response) => {
    const { id } = req.params
    const Usuario: UsuarioDTO = {
      id : parseInt(id),
      firstName: 'Juan',
      lastName: 'Aguirre',
      email: 'juanitodelflow@gmail.com',
      password: '123456',
    }

    res.json(Usuario)
  }

  public readonly create = async (req : Request, res: Response) => {
    const Usuario = req.body as UpdateUsuarioDTO

    try{
       await createUsuarioSchema.validateAsync(Usuario)
    } catch (error){
      res.status(400).json({message: error.message})
      return
    }
    res.json({ 
      id:1,
      ...Usuario
    })
  }

  public readonly update = async (req : Request, res: Response) => {
    const { id } = req.params
    const Usuario = req.body as CreateUsuarioDTO

    try{
      await updateUsuarioSchema.validateAsync(Usuario)
    } catch (error){
      res.status(400).json({message: error.message})
      return
    }

    console.log('Hola vengo a editar', id, Usuario)
    res.sendStatus(204)
  }

  public readonly delete = async (req : Request, res: Response) => {
    const { id } = req.params

    console.log('Con esto eliminas', id)
    res.sendStatus(204)
  }

}
