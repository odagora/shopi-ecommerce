import { useAppContext } from "@/hooks/useAppContext";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { OrderCard } from "@/components/OrderCard";
import { totalPrice } from "@/utils";
import { Link } from "react-router-dom";
import { OrderProps } from "@/components/OrdersCard";

export const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    count,
    setCount,
    orders,
    setOrders,
  } = useAppContext();

  function deleteProductFromCart(id: number) {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(updatedCartProducts);
    setCount(count - 1);
  }

  function handleCheckout() {
    const orderToAdd: OrderProps = {
      id: orders.length + 1,
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrders([...orders, orderToAdd]);
    setCartProducts([]);
    setCount(0);
    closeCheckoutSideMenu();
  }

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
      <div className="px-6 flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            imageUrl={product.category.image}
            title={product.title}
            price={product.price}
            handleClick={() => deleteProductFromCart(product.id)}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-medium text-2xl">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="my-orders/last">
          <button
            className={`py-3 text-white w-full rounded-lg mb-6 ${
              !cartProducts.length
                ? "bg-black/40 cursor-not-allowed"
                : "bg-black"
            }`}
            onClick={() => handleCheckout()}
            disabled={!cartProducts.length}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
