import express from 'express'
import PlatesControllers from '../controllers/plates.js'


const plateRouter = express.Router()
const platesControllers = new PlatesControllers()

plateRouter.get('/', async (req, res) => {
  const { success, statusCode, body } = await platesControllers.getPlates()
  res.status(statusCode).send({ success, statusCode, body })})






  plateRouter.post('/',async(req,res)=>{
    const {success, statusCode,body} = await platesControllers.addPlate(req.body)
    
    res.status(statusCode).send({success,statusCode,body})
    
  })







plateRouter.delete('/:id',async (req,res) => {
  const {success,statusCode,body}= await platesControllers.deletePlate(req.params.id)
  res.status(statusCode).send({success,statusCode,body})})








plateRouter.put('/:id',async (req,res) => {
  const  {success,statusCode,body} = await platesControllers.updatePlate(req.params.id,req.body)
  res.status(statusCode).send({success,statusCode,body})
  
})

plateRouter.get('/availables', async (req, res) => {
  const { success, statusCode, body } = await platesControllers.getAvailablePlate()
  res.status(statusCode).send({ success, statusCode, body })})

  export default plateRouter