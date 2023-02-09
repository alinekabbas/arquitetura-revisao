import express from 'express'
import cors from'cors'
import { productRouter } from './router/productRouter'
import { brandRouter } from './router/brandRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () =>{
    console.log("Servidor rodando na porta 3003")
})

app.use("/products", productRouter)
app.use("/brand", brandRouter)