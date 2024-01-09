import { useAppContext } from "@/hooks/useAppContext";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useAppContext();
  const { images, title, price, description } = productToShow;

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={closeProductDetail}
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={images?.[0] ?? ""}
          alt={title}
          referrerPolicy="no-referrer"
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${price}</span>
        <span className="font-medium text-md mb-2">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  );
};
