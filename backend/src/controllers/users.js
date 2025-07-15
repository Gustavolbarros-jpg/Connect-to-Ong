import UsersDataAcess from '../dataAccess/users.js'
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
      return serverError(error)
      
    }
  }

}
