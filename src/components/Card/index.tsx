import { Product } from "@/models/Product";

export const Card = (props: Product) => {
  return (
    <article className="bg-white w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <figcaption className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {props.category.name}
        </figcaption>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={props.category.image}
          alt={props.title}
          referrerPolicy="no-referrer"
        />
        <button className="absolute top-0 right-0 bg-white/60 rounded-full w-6 h-6 m-2 p-1 text-xs">
          +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{props.title}</span>
        <span className="text-lg font-medium">{props.price}</span>
      </p>
    </article>
  );
};
