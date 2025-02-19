import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { Outlet, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import UserNav from "./UserNav";

export default function index() {
  const nav = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("from observer");
      } else {
        console.error("no sign in");
      }
    });
  }, []);

  return (
    <div>
      <UserNav />
      <Outlet />
    </div>
  );
}
