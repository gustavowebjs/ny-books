import { Home } from "../pages/Home";
import { BestBooks } from "../pages/BestBooks";
import { About } from "../pages/About";

type Route = {
  path: string;
  component: () => React.ReactNode;
};

export const routes: Route[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/best-books",
    component: BestBooks,
  },
  {
    path: "/about",
    component: About,
  },
];
