import UsersDataAcess from '../dominio/users.js'
import { ok, serverError } from '../helpers/httpResponse.js'

export default class UserControllers {
  constructor() {
    this.dataAccess = new UsersDataAcess()
  }

  async getUsers() {
    try {
      const users = await this.dataAccess.getUsers()
      return ok(users)
    } catch (error) {
      console.error('Erro em getUsers:', error)
      return serverError(error)
    }
  }
  async deleteUsers(userId){
    try {
      const result= await this.dataAccess.deleteUsers(userId)
      return ok(result)
      
    } catch (error) {
      return serverError(error)
      
    }
  }
  async updateUsers (userId,userData){
    try {
      const result = await this.dataAccess.updateUsers(userId,userData)
      return ok(result)
      
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error)
      return serverError(error)
      
    }
  }
  
async getUserById(userId) {
    try {
      // se quiser verificar UUID aqui, poderia retornar badRequest antes de chamar dataAccess
      const user = await this.dataAccess.getUserById(userId)
      if (!user) return notFound('User not found')
      return ok(user)
    } catch (error) {
      console.error('Erro em getUserById:', error)
      // se for erro de id inválido (validação manual), devolve 400
      if (error && error.message === 'Invalid user id') {
        return badRequest('Invalid user id')
      }
      return serverError(error)
    }
  }

}
