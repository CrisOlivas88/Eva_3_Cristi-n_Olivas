import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { UsuarioDTO } from "../models/dto/UsuarioDTO"
import { createUsuarioSchema, updateUsuarioSchema } from "../models/validators/UsuarioSchemas"

const prisma = new PrismaClient()

export default class UsuarioController{
  public readonly getAll = async (_req : Request, res: Response) => {
    const usuario : UsuarioDTO[] = await prisma.usuario.findMany()
    res.json(usuario)
  }

  public readonly getById = async (req : Request, res: Response) => {
    const { id } = req.params
    const usuario = await prisma.usuario.findFirst({ where:{ id:parseInt(id) }});
    res.json(usuario)
  }

  public readonly create = async (req : Request, res: Response) => {
    let usuario = req.body as UsuarioDTO

    try{
      
      await createUsuarioSchema.validateAsync(usuario);
      const productCreated = await prisma.usuario.create({ data: {
        firstname: usuario.firstname,
        lastname: usuario.lastname,
        email : usuario.email,
        password : usuario.password,
      }});
      console.log(productCreated);
      usuario=productCreated;
    } catch (error){
      res.status(400).json({message: error.message})
      return
    }
    
    res.json({ 
      ...usuario
    })
  }

  public readonly update = async (req : Request, res: Response) => {
    const { id } = req.params
     let usuario = req.body as UsuarioDTO

    try{
      await updateUsuarioSchema.validateAsync(usuario)
      const updatedUser = await prisma.usuario.update({ where: {
        id: usuario.id,
      }, data : {
        firstname: usuario.firstname,
        lastname: usuario.lastname,
        email : usuario.email,
        password : usuario.password
      }});
      usuario=updatedUser;    
      console.log(updatedUser);

    } catch (error){
      res.status(400).json({message: error.message})
      return
    }
    
    console.log('Hola vengo a editar', id, usuario)
    res.sendStatus(204)
  }

  public readonly delete = async (req : Request, res: Response) => {
    const { id }  = req.params;
    const deletedUser = await prisma.usuario.delete({
      where: {
        id: parseInt(id)
      },
    });
    console.log(deletedUser);
    console.log('Con esto eliminas', id)
    res.sendStatus(204)
  }

}
