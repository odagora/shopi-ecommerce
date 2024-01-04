import { useAppContext } from "@/hooks/useAppContext";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail } = useAppContext();

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
    </aside>
  );
};
