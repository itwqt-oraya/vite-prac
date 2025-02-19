import React from "react";
import { Outlet } from "react-router";
import UserNav from "./UserNav";

export default function index() {
  return (
    <div>
      <UserNav />
      <Outlet />
    </div>
  );
}
