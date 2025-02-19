import React from "react";
import authObserver from "../utils/session/auth-observer";

export default function AuthProvider() {
  authObserver();
  return <div>AuthProvider</div>;
}
