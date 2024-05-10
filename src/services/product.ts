import { productsType } from "@/types/productsType";
import { products } from '@/data/products';
import { resolve } from "path";


export const getAllProducts = async (): Promise<productsType[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products);
            //reject("Error getting all products    
        }, 2000)
    });
};