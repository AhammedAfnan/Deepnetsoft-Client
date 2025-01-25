'use client'

import {createContext, useContext, useState} from "react"

const CategoryContext = createContext({
    categories: [],
    setCategories() {}
})

export function useCategories() {
    return useContext(CategoryContext)
}

export default function CategoriesProvider({children, initialCategories}: React.PropsWithChildren<{
    initialCategories: ICategory[]
}>) {
    const [categories, setCategories] = useState(initialCategories)

    return <CategoryContext value={{categories, setCategories}}>{children}</CategoryContext>
}

export type ICategory = {
    _id: string
    name: string
    description: string
}