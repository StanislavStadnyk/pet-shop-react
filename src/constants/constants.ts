import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressCard,
  faAnchor,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT: "/product",
  TEST: "/test1",
  TEST2: "/test2",
};

export const NAVIGATION_LINKS = [
  {
    icon: faAddressBook,
    text: "LInk1",
    path: ROUTES.HOME,
  },
  {
    icon: faAddressCard,
    text: "products",
    path: ROUTES.PRODUCTS,
  },
  {
    icon: faAnchor,
    text: "LInk3",
    path: ROUTES.TEST,
  },
  {
    icon: faAngleDoubleRight,
    text: "LInk3 ",
    path: ROUTES.TEST2,
  },
];
