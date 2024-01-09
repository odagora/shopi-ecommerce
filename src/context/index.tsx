import { Product } from "@/models/Product";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type EmptyObj = Record<PropertyKey, never>;

export interface AppContextProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productToShow: Product | EmptyObj;
  setProductToShow: Dispatch<SetStateAction<Product | EmptyObj>>;
  cartProducts: Product[] | [];
  setCartProducts: Dispatch<SetStateAction<Product[] | []>>;
  isCheckoutSideMenuOpen: boolean;
  openCheckoutSideMenu: () => void;
  closeCheckoutSideMenu: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: PropsWithChildren) {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState<number>(0);
  // Shopping Cart - Add to cart
  const [cartProducts, setCartProducts] = useState<Product[] | []>([]);
  // Shopping Cart - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] =
    useState<boolean>(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] =
    useState<boolean>(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState<Product | EmptyObj>({});

  const contextData: AppContextProps = {
    count,
    setCount,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    productToShow,
    setProductToShow,
    cartProducts,
    setCartProducts,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
