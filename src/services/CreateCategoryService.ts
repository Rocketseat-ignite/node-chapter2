import { response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface iRequest {
    name: string
    description: string
}

export class CreateCategoryService {
    constructor(private CategoriesRepository: CategoriesRepository) {

    }

    execute({ name, description }: iRequest): void {

        const categoryAlreadyExists = this.CategoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Categoria já existe");
        }

        this.CategoriesRepository.create({ name, description })
    }
}