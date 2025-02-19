import React from "react";

// HOC Example
const withSomething = (Component: any) => {
  return <Component />;
};

const SomeComponent = () => <button className="fw-bold">Home!</button>;
export default function index() {
  return withSomething(SomeComponent);
}
