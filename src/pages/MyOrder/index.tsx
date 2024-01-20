import { Layout } from "@/components/Layout";
import { OrderCard } from "@/components/OrderCard";
import { useAppContext } from "@/hooks/useAppContext";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const { orders } = useAppContext();

  const lastOrder = orders.slice(-1)[0];

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 cursor-pointer" />
        </Link>
        <p>My Order</p>
      </div>
      <div className="flex flex-col w-80">
        {lastOrder.products.map((product) => (
          <OrderCard
            key={product.id}
            imageUrl={product.category.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
