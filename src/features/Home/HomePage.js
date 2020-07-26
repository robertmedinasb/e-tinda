/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./../../App";

export const HomePage = () => {
  const { MAIN_COLOR } = useContext(AppContext);
  return (
    <React.Fragment>
      <h1 css={{ color: MAIN_COLOR }}>Welcome</h1>
      <Link to="/signup">Signup</Link>
    </React.Fragment>
  );
};
