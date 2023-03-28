import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";

export const routesConfig = [
  {
    path: "madrymoda/",
    element: Home,
  },
  {
    path: "madrymoda/sobre",
    element: About,
  },
  {
    path: "madrymoda/catalogo",
    element: Catalog,
  },
  {
    path: "madrymoda/contato",
    element: Contact,
  },
  {
    path: "*",
    element: NotFound,
  },
];
