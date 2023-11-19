import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { useState, useEffect } from "react";
import { apiBaseUrl } from "@/services/api";
import { Product } from "@/models/Product";

function Home() {
  const url = `${apiBaseUrl}/products`;
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    async function run() {
      try {
        const response = await fetch(url);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("An error ocurred while retrieving data: ", error);
      }
    }

    run();
  }, []);

  return (
    <Layout>
      <p>Home</p>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
