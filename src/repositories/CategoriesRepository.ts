import { Category } from './../models/Category';

interface ICreateCategoryDTO {
    name: string,
    description: string
}

export class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category()

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)
    }

    list(): Category[] {
        return this.categories
    }

    findByName(name: string): boolean {
        const category = this.categories.some((category) => category.name === name)

        return category
    }

}