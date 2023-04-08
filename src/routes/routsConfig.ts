import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";

export const routesConfig = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/sobre",
    element: About,
  },
  {
    path: "/catalogo",
    element: Catalog,
  },
  {
    path: "/contato",
    element: Contact,
  },
  {
    path: "*",
    element: NotFound,
  },
];
