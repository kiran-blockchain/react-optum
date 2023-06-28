import { Product } from "../entities/product";

export interface IProduct{
    addProduct(p:Product):any;
    getProducts():Array<Product>;

}