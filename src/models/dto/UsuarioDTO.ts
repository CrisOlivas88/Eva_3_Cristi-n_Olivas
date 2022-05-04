export interface BaseUsuarioDTO{
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
}

export interface UsuarioDTO extends BaseUsuarioDTO {}

export interface CreateUsuarioDTO extends BaseUsuarioDTO{}

export interface UpdateUsuarioDTO extends Partial<BaseUsuarioDTO>{}
