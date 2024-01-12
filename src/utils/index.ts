import { Product } from "@/models/Product";

export function totalPrice(products: Product[]) {
  return products.reduce((total, product) => total + product.price, 0);
}
