import { Layout } from "@/components/Layout";
import { OrderCard } from "@/components/OrderCard";
import { useAppContext } from "@/hooks/useAppContext";

function MyOrder() {
  const { orders } = useAppContext();

  const lastOrder = orders.slice(-1)[0];

  return (
    <Layout>
      <p>My order</p>
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
