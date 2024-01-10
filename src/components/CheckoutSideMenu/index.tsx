import { useAppContext } from "@/hooks/useAppContext";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { OrderCard } from "@/components/OrderCard";

export const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useAppContext();

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] top-[5rem] overflow-y-scroll`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className="px-6">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            imageUrl={product.images[0]}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};
