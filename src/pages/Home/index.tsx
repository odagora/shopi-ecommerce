import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { ProductDetail } from "@/components/ProductDetail";
import { useAppContext } from "@/hooks/useAppContext";

function Home() {
  const { searchProductByTitle, filteredProducts } = useAppContext();

  function renderView() {
    if (filteredProducts && filteredProducts?.length > 0) {
      return filteredProducts?.map((product) => (
        <Card key={product.id} {...product} />
      ));
    } else {
      return <div>We didn't find any coincidences</div>;
    }
  }

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
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
