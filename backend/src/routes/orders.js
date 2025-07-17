import express from 'express'

import OrdersControllers from '../controllers/orders.js'


const orderRouter = express.Router()
const ordersControllers = new OrdersControllers()

orderRouter.get('/', async (req, res) => {
  const { success, statusCode, body } = await ordersControllers.getOrders()
  res.status(statusCode).send({ success, statusCode, body })})

orderRouter.get('/:id', async (req, res) => {
  const { success, statusCode, body } = await ordersControllers.getOrdersByUserId(req.params.id)
  res.status(statusCode).send({ success, statusCode, body })})






  orderRouter.post('/',async(req,res)=>{
    const {success, statusCode,body} = await ordersControllers.addOrders(req.body)
    
    res.status(statusCode).send({success,statusCode,body})
    
  })







orderRouter.delete('/:id',async (req,res) => {
  const {success,statusCode,body}= await ordersControllers.deleteOrder(req.params.id)
  res.status(statusCode).send({success,statusCode,body})})








orderRouter.put('/:id',async (req,res) => {
  const  {success,statusCode,body} = await ordersControllers.updateOrder(req.params.id,req.body)
  res.status(statusCode).send({success,statusCode,body})
  
})



  export default orderRouter