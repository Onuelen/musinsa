import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

const PrivateRoutes = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
