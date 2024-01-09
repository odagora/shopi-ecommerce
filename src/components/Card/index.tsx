import { MouseEvent } from "react";
import { Product } from "@/models/Product";
import { useAppContext } from "@/hooks/useAppContext";
import { PlusIcon } from "@heroicons/react/20/solid";

export const Card = (product: Product) => {
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
  } = useAppContext();

  function handleClick(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    event.stopPropagation();
    setCount(count + 1);
    addProductToCart(product);
  }

  function showProduct(ProductDetail: Product) {
    openProductDetail();
    setProductToShow(ProductDetail);
  }

  function addProductToCart(productData: Product) {
    setCartProducts([...cartProducts, productData]);
  }

  return (
    <article
      className="bg-white w-56 h-60 rounded-lg"
      onClick={() => showProduct(product)}
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
        <button
          className="absolute top-0 right-0 bg-white/60 rounded-full w-6 h-6 m-2 p-1 text-xs"
          onClick={(event) => handleClick(event)}
        >
          <PlusIcon />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>
    </article>
  );
};
