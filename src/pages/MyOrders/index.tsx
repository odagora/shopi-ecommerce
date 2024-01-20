import { Layout } from "@/components/Layout";
import { OrdersCard } from "@/components/OrdersCard";
import { useAppContext } from "@/hooks/useAppContext";
import { Link } from "react-router-dom";

function MyOrders() {
  const { orders } = useAppContext();

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-96 mb-6">
        <p>My Orders</p>
      </div>
      <div className="flex flex-col gap-3 w-96">
        {orders.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard {...order} />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
