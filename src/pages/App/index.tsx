import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import MyAccount from "@/pages/MyAccount";
import MyOrder from "@/pages/MyOrder";
import MyOrders from "@/pages/MyOrders";
import NotFound from "@/pages/NotFound";
import SignIn from "@/pages/SignIn";
import "./App.css";
import { Navbar } from "@/components/Navbar";

const AppRouter = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
