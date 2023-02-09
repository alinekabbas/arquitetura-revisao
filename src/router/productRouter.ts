import express from 'express'
import { ProductBusinnes } from '../business/ProductBusiness'
import { ProductController } from '../controller/ProductController'
import { ProductDatabase } from '../database/ProductDatabase'

export const productRouter = express.Router()

const productController = new ProductController(
    new ProductBusinnes(
        new ProductDatabase()
    )
)

productRouter.get("/", productController.getProducts)