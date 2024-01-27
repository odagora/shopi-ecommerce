import { AppContextProps } from "@/context";
import { useAppContext } from "@/hooks/useAppContext";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  const activeStyle = "underline underline-offset-4";
  const { setSearchByCategory } = useAppContext();

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={() => setSearchByCategory(to.substring(1))}
    >
      {children}
    </NavLink>
  );
};

export const Navbar = () => {
  const { count } = useAppContext() as AppContextProps;

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem to="/">Shopi</NavItem>
        </li>
        <li>
          <NavItem to="/all">All</NavItem>
        </li>
        <li>
          <NavItem to="/clothes">Clothes</NavItem>
        </li>
        <li>
          <NavItem to="/electronics">Electronics</NavItem>
        </li>
        <li>
          <NavItem to="/furniture">Furniture</NavItem>
        </li>
        <li>
          <NavItem to="/toys">Toys</NavItem>
        </li>
        <li>
          <NavItem to="/others">Others</NavItem>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">daniel@example.com</li>
        <li>
          <NavItem to="/my-orders">My Orders</NavItem>
        </li>
        <li>
          <NavItem to="/my-account">My Account</NavItem>
        </li>
        <li>
          <NavItem to="/sign-in">Sign In</NavItem>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-5 w-5" />
          <div>{count}</div>
        </li>
      </ul>
    </nav>
  );
};
