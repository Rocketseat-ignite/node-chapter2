import express from 'express'
import { CategoriesRoutes } from './routes/categories.routes'

const app = express()

app.use(express.json())

app.use('/categories', CategoriesRoutes)

app.listen(3000, () => console.log('Server running on: http://localhost:3000'))