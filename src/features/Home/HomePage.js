/** @jsx jsx */
import React, { useContext } from "react";
import { jsx } from "@emotion/core";
import { ProductsList } from "./../Products/ProductsList";
import { AppContext } from "./../../App";
export const HomePage = () => {
  const { setShowMenu } = useContext(AppContext);
  return (
    <main css={{ minHeight: "60vh" }} onClick={() => setShowMenu(false)}>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductsList />
      </div>
    </main>
  );
};
