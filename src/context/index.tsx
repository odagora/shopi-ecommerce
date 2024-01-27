import { OrderProps } from "@/components/OrdersCard";
import { Product } from "@/models/Product";
import { apiBaseUrl } from "@/services/api";
import {
  ChangeEvent,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
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
  orders: Array<OrderProps> | [];
  setOrders: Dispatch<SetStateAction<Array<OrderProps>>>;
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
  searchByTitle: string;
  searchProductByTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredProducts: Product[] | null;
  searchByCategory: string;
  setSearchByCategory: Dispatch<SetStateAction<string>>;
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
  // Shopping Cart - New order
  const [orders, setOrders] = useState<Array<OrderProps> | []>([]);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] =
    useState<boolean>(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState<Product | EmptyObj>({});

  // Get all products from API
  const [products, setProducts] = useState<Product[] | null>([]);

  // Get products by Title
  const [searchByTitle, setSearchByTitle] = useState<string>("");
  const searchProductByTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchByTitle(event.target.value);

  // Get products by Category
  const [searchByCategory, setSearchByCategory] = useState<string>("");

  // Items filtered by Category
  const [itemsByCategory, setItemsByCategory] = useState<Product[] | null>([]);

  // Filter products
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    []
  );

  // Filter products by title
  function filterProductsByTitle(products: Product[], input: string) {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
  }

  // Filter products by category
  function filterProductsByCategory(products: Product[], category: string) {
    return products?.filter(
      (product) =>
        product.category.name.toLowerCase() === category.toLowerCase()
    );
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${apiBaseUrl}/products`;

      try {
        const response = await fetch(url);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("An error ocurred while retrieving data: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchByCategory !== "all") {
      if (searchByCategory.length > 0 && products) {
        setItemsByCategory(
          filterProductsByCategory(products, searchByCategory)
        );
      }
    } else {
      setItemsByCategory(products);
    }
  }, [searchByCategory]);

  useEffect(() => {
    if (searchByTitle && itemsByCategory) {
      setFilteredProducts(
        filterProductsByTitle(itemsByCategory, searchByTitle)
      );
    } else {
      setFilteredProducts(itemsByCategory);
    }
  }, [searchByTitle, itemsByCategory]);

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
    orders,
    setOrders,
    products,
    setProducts,
    searchByTitle,
    searchProductByTitle,
    filteredProducts,
    searchByCategory,
    setSearchByCategory,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
