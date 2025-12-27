import React, { createContext, ReactNode } from "react";
import axios from "axios";

/* -----------------------------
   Product Type
----------------------------- */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

/* -----------------------------
   Context Type
----------------------------- */
interface ApiContextType {
  getProducts: (page?: number) => Promise<Product[]>;
}

/* -----------------------------
   Create Context
----------------------------- */
export const ApiContext = createContext<ApiContextType | null>(null);

/* -----------------------------
   Provider Props
----------------------------- */
interface ApiProviderProps {
  children: ReactNode;
}

/* -----------------------------
   Provider
----------------------------- */
export const ApiProvider = ({ children }: ApiProviderProps) => {
  const getProducts = async (page: number = 1): Promise<Product[]> => {
    const res = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    return res.data;
  };

  return (
    <ApiContext.Provider value={{ getProducts }}>
      {children}
    </ApiContext.Provider>
  );
};
