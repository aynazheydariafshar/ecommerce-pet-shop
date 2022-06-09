import Category from "pages/Category";
import Finalize from "pages/Finalize ";
import Home from "pages/Home";
import Inventory from "pages/Inventory";
import Login from "pages/Login";
import ManagementProductes from "pages/ManagementProductes";
import NotFound from "pages/NotFound";
import Orders from "pages/Orders";
import Product from "pages/Product";
import Successful from "pages/Successful";
import Unsuccessful from "pages/Unsuccessful";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CartProducts from "pages/CartProducts";
import BankFake from "pages/BankFake";

const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/category/:idcategory" element={<Category />} />
      <Route path="/cart" element={<CartProducts />} />
      <Route path="/finalize" element={<Finalize />} />
      <Route path="/bank-fake" element={<BankFake />} />
      <Route path="/successful" element={<Successful />} />
      <Route path="/unsuccessful" element={<Unsuccessful />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/management-productes" element={<ManagementProductes />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutePages;
