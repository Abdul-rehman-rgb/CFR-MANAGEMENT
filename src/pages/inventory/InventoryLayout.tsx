// src/pages/inventory/InventoryLayout.jsx
import React from "react";
import InventoryNav from "../../layout/InventoryNav";
import { Outlet } from "react-router";
import Inventory from "./Inventory";
import DoublePieChart from "../../components/charts/pie/PieChart";

const InventoryLayout = () => {
  return (
    <div className="space-y-6">
      <Inventory />
      <InventoryNav />
      <Outlet />
    </div>
  );
};

export default InventoryLayout;
