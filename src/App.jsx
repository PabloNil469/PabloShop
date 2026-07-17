import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

export default function App() {
  const path = window.location.pathname;

  if (path === "/product") return <Product />;
  if (path === "/checkout") return <Checkout />;

  return <Home />;
}
