/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Header } from "../styles";
import LetterLogo from "./../../assets/images/e-tinda-letters.png";

export const HeaderNav = () => {
  return (
    <Header>
      <div className="imgWrapper">
        <img src={LetterLogo} alt="e-tinda" />
      </div>
    </Header>
  );
};
