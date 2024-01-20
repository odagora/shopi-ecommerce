import { Product } from "@/models/Product";

export function totalPrice(products: Product[]) {
  return products.reduce((total, product) => total + product.price, 0);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-CO").format(date);
}
