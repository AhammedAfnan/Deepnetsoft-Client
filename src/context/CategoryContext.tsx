'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the CategoryContext type
type CategoryContextType = {
  categories: ICategory[];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
};

// Create context with proper type annotations
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Hook to use the CategoryContext
export function useCategories() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
}

// CategoriesProvider component
export default function CategoriesProvider({
  children,
  initialCategories,
}: {
  children: ReactNode;
  initialCategories: ICategory[];
}) {
  const [categories, setCategories] = useState<ICategory[]>(initialCategories);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

// Define the ICategory type
export type ICategory = {
  _id: string;
  name: string;
  description: string;
};
