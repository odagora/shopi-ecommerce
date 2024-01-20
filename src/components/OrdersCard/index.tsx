import { Product } from "@/models/Product";

export interface OrderProps {
  id: number;
  date: Date;
  products: Product[];
  totalProducts: number;
  totalPrice: number;
}

export const OrdersCard = (props: OrderProps) => {
  const { date, totalProducts, totalPrice } = props;

  return (
    <article className="flex justify-between items-center mb-3">
      <p>
        <span>{String(date)}</span>
        <span>{totalProducts}</span>
        <span>${totalPrice}</span>
      </p>
    </article>
  );
};
