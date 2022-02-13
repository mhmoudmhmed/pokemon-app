import React from "react";
import Nav from "./nav";

const Page = ({ pokemans, children }) => {
  return (
    <>
      <Nav pokemans={pokemans} />
      <div>{children}</div>
      <Nav pokemans={pokemans} />
    </>
  );
};

export default Page;
