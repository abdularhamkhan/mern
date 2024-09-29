import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js'

const app = express()

app.use(express.json()); //allows us to accept json data in req.body

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running at localhost:" + PORT)
})