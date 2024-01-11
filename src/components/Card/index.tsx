import { MouseEvent } from "react";
import { Product } from "@/models/Product";
import { useAppContext } from "@/hooks/useAppContext";
import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";

export const Card = (product: Product) => {
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useAppContext();

  function addProductsToCart(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    productData: Product
  ) {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  }

  function showProduct(
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    ProductDetail: Product
  ) {
    const target = event.target as HTMLElement;
    const nodeNames = ["BUTTON", "svg", "path"];

    if (!nodeNames.includes(target.nodeName)) {
      openProductDetail();
      closeCheckoutSideMenu();
      setProductToShow(ProductDetail);
    }
  }

  function renderIcon(id: number) {
    const isProductInCart = cartProducts.some((product) => product.id === id);
    let icon, handleClick, bgColor, textColor;

    if (isProductInCart) {
      icon = <CheckIcon />;
      bgColor = "bg-black";
      textColor = "text-white";
      handleClick = () => {};
    } else {
      icon = <PlusIcon />;
      bgColor = "bg-white/60";
      textColor = "text-black";
      handleClick = (
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      ) => addProductsToCart(event, product);
    }

    return (
      <button
        className={`absolute top-0 right-0 rounded-full w-6 h-6 m-2 p-1 text-xs ${bgColor} ${textColor}`}
        onClick={handleClick}
      >
        {icon}
      </button>
    );
  }

  return (
    <article
      className="bg-white w-56 h-60 rounded-lg"
      onClick={(event) => showProduct(event, product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <figcaption className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {product.category.name}
        </figcaption>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.category.image}
          alt={product.title}
          referrerPolicy="no-referrer"
        />
        {renderIcon(product.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>
    </article>
  );
};
