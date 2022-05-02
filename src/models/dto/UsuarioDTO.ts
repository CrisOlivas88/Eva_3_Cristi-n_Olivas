export interface BaseUsuarioDTO{
  id?: number
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UsuarioDTO extends BaseUsuarioDTO {
  id: number
  userId: number | null
}

export interface CreateUsuarioDTO extends BaseUsuarioDTO{}

export interface UpdateUsuarioDTO extends Partial<BaseUsuarioDTO>{}
