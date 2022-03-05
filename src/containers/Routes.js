import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "./Customer";
import Customers from "./Customers";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Customers />} />
            <Route path="/customers/:customerId" element={<Customer />} />
        </Routes>
    );
};

export default AppRoutes;
