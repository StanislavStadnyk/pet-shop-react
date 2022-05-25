import React, { createContext, FC, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// components
import Layout from "./components/layout/layout";

// routers
import MainRouter from "./router/router";

// reducers
import shopReducer, { initialStateProducts } from "./reducers/products";

// styles
import "./styles/main.scss";

// context
export const ShopContext = createContext<any>(initialStateProducts as any);

const App: FC = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(shopReducer, initialStateProducts);

  return (
    <Router>
      <ShopContext.Provider value={{ state, dispatch }}>
        <Layout>
          <MainRouter />
        </Layout>
      </ShopContext.Provider>
    </Router>
  );
};

export default App;
