import { Layout } from "@/components/Layout";
import { OrdersCard } from "@/components/OrdersCard";
import { useAppContext } from "@/hooks/useAppContext";
import { Link } from "react-router-dom";

function MyOrders() {
  const { orders } = useAppContext();

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <p>My Orders</p>
      </div>
      {orders.map((order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard {...order} />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
