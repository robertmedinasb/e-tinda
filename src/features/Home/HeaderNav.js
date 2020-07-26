/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Header } from "../styles";
import LetterLogo from "./../../assets/images/e-tinda-letters.png";
import { Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <Header>
      <div className="imgWrapper">
        <Link to="/">
          <img src={LetterLogo} alt="e-tinda" />
        </Link>
      </div>
    </Header>
  );
};
