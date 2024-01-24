import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { ProductDetail } from "@/components/ProductDetail";
import { useAppContext } from "@/hooks/useAppContext";

function Home() {
  const { products, searchByTitle, searchProductByTitle } = useAppContext();

  console.log(searchByTitle);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-96 mb-6">
        <h1>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search for a product"
        className="rounded-lg border border-black w-60 p-2 mb-4 text-center focus:outline-none"
        onChange={searchProductByTitle}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
