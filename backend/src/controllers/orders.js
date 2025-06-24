
import OrdersDataAcess from '../dataAccess/orders.js'
import { ok, serverError } from '../helpers/httpResponse.js'

export default class OrdersControllers {


  constructor() {
    this.dataAccess = new OrdersDataAcess()
  }

  

  async getOrders() {
    try {
      const Orders = await this.dataAccess.getOrders()
      return ok(Orders)
    } catch (error) {
      console.error('Erro em getUsers:', error)
      return serverError(error)
    }
  }

 async getOrdersByUserId(userId) {
    try {
      const Orders = await this.dataAccess.getOrdersByUserId(userId)
      return ok(Orders)
    } catch (error) {
      console.error('Erro em getUsers:', error)
      return serverError(error)
    }
  }



  async addOrders(orderData){
    try {
      const result = await this.dataAccess.addOrders(orderData)
      return ok(result)

    } catch (error) {
      return serverError(error)

      
    }
  }


  async deleteOrder(orderId){
    try {
      const result= await this.dataAccess.deleteOrder(orderId)
      return ok(result)
      
    } catch (error) {
      return serverError(error)
      
    }
  }




  async updateOrder (orderId,orderData){
    try {
      const result = await this.dataAccess.updateOrder(orderId,orderData)
      return ok(result)
      
    } catch (error) {
      return serverError(error)
      
    }
  }

}
