import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from '../services/CreateCategoryService';

export const CategoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

CategoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({ name, description })

    return res.status(201).send()
})

CategoriesRoutes.get('/', (req, res) => {
    const categories = categoriesRepository.list()

    return res.status(200).json({
        error: false,
        data: categories
    })
})