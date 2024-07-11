import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import "../styles/layout/layout.scss";
import { AuthContext, AuthContextType } from "./contexts/AuthContext";

import 'primeflex/primeflex.scss';
import Crud from "./components/Crud";
import NewProduct from "./components/NewProduct";
import Layout from "./components/common/MainLayout";
import UserLayout from "./components/common/UserLayout";
import CheckoutForm from "./pages/CheckoutForm";
import { HomePage } from "./pages/HomePage";
import OrderSummary from "./pages/OrderSummary";
import ProductListPage from "./pages/ProductListPage";
import ProductOverview from "./pages/ProductOverview";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { ROUTER, USER_ROUTE } from "./routers/router";

export const App = () => {
  const { user } = useContext<AuthContextType>(AuthContext);

  return (
    <>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          {user?.role.includes("ADMIN") ? (
            <Route element={<Layout />}>
              <Route path={ROUTER.HOME} element={<>HOME</>} />
              <Route path={ROUTER.NEW_PRODUCT} element={<NewProduct />} />
              <Route path={ROUTER.PRODUCT_MANAGEMENT} element={<Crud />} />
              <Route path={ROUTER.ORDER_MANAGEMENT} element={<Crud />} />
              <Route
                path={ROUTER.ORDER_MANAGEMENT_DETAIL}
                element={<OrderSummary />}
              />
            </Route>
          ) : (
            <Route element={<UserLayout />}>
              <Route path={USER_ROUTE.PRODUCT} element={<ProductListPage />} />
              <Route path={USER_ROUTE.HOME} element={<HomePage />} />
              <Route
                path={USER_ROUTE.PRODUCT_DETAIL}
                element={<ProductOverview />}
              />
              <Route path={USER_ROUTE.MY_CART} element={<ShoppingCartPage />} />
              <Route path={USER_ROUTE.CHECKOUT} element={<CheckoutForm />} />
              <Route path={USER_ROUTE.MY_ORDER} element={<OrderSummary />} />
              <Route
                path={USER_ROUTE.ORDER_SUMMARY}
                element={<OrderSummary />}
              />
            </Route>
          )}
        </Routes>
      </QueryParamProvider>
    </>
  );
};
