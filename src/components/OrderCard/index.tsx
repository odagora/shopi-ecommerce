import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
  price: number;
  imageUrl: string;
  handleClick: () => void;
}

export const OrderCard = (props: Props) => {
  const { title, price, imageUrl, handleClick } = props;

  return (
    <article className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={handleClick} />
      </div>
    </article>
  );
};
