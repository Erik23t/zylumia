import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  category: string;
  popular: boolean;
}

interface ProductContextType {
  products: Product[];
  categories: string[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  removeProduct: (id: string) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Máscara Nutritiva com Colágeno Ativo',
      description: 'Máscara nutritiva que renova a pele com colágeno ativo',
      price: '£ 21,95',
      originalPrice: '£ 32,95',
      discount: 'ECONOMIZE 33%',
      image: '/src/assets/product-new.jpg',
      category: 'Skincare',
      popular: true
    }
  ]);

  const [categories, setCategories] = useState<string[]>([
    'Home',
    'Shop All',
    'Kits & Sets',
    'Skincare',
    'Glow Journal',
    'About Nifora',
    'FAQ',
    'Contact Us'
  ]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const removeProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories(prev => [...prev, category]);
    }
  };

  const removeCategory = (category: string) => {
    setCategories(prev => prev.filter(cat => cat !== category));
  };

  return (
    <ProductContext.Provider value={{
      products,
      categories,
      addProduct,
      removeProduct,
      updateProduct,
      addCategory,
      removeCategory
    }}>
      {children}
    </ProductContext.Provider>
  );
};