import { Product } from "@/models/Product";
import { formatDate } from "@/utils";
import {
  ChevronRightIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/20/solid";

export interface OrderProps {
  date: Date;
  products: Product[];
  totalProducts: number;
  totalPrice: number;
}

export const OrdersCard = (props: OrderProps) => {
  const { date, totalProducts, totalPrice } = props;
  const productsSuffix = totalProducts === 1 ? "product" : "products";

  return (
    <article className="flex items-center p-5 border border-gray bg-gray-50 rounded-xl">
      <div className="flex w-full justify-around gap-5">
        <span className="flex items-center gap-2 text-xs">
          <ShoppingCartIcon className="h-5 w-5" />
          {`${totalProducts} ${productsSuffix}`}
        </span>
        <span className="flex items-center gap-2 text-xs">
          <CurrencyDollarIcon className="h-5 w-5" />${totalPrice}
        </span>
        <span className="flex items-center gap-2 text-xs">
          <CalendarDaysIcon className="h-5 w-5" />
          {formatDate(date)}
        </span>
        <ChevronRightIcon className="h-5 w-5" />
      </div>
    </article>
  );
};
