/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { Header } from "../styles";
import LetterLogo from "./../../assets/images/e-tinda-letters.png";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useContext } from "react";
import { AppContext } from "../../App";
import { AiOutlineUser } from "react-icons/ai";
import logoImg from "./../../assets/images/e-tinda-letters.png";
import { useSelector, useDispatch } from "react-redux";
import { userLoggedOut } from "../User/userSlice";

export const HeaderNav = () => {
  const { MAIN_COLOR, showMenu, setShowMenu } = useContext(AppContext);
  const user_logged = useSelector((state) => state.current_user.empty);
  function Menu() {
    const LinksNavWrapper = styled.div`
      display: flex;
      flex-direction: column;
      border: 2px solid #ffffff;
      padding: 10px;
      padding-top: 12px;
      border-radius: 20px;
      position: fixed;
      background: ${MAIN_COLOR};
      border: 2px solid #ffffff;
      z-index: 5;
      top: 75px;
      right: 70px;
      & a,
      & button {
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        padding: 4px;
        border: none;
        border-bottom: 1px solid #ffffff;
        &:last-of-type {
          margin-bottom: 20px;
        }
      }
      & button {
        background: none;
      }
      @media (max-width: 768px) {
        right: 35px;
      }
      & span {
        width: 100%;
        max-width: 120px;
        margin: 10px auto 0 auto;
        text-align: center;
        font-size: 12px;
        color: #ffffff;
        & img {
          width: 80%;
        }
      }
    `;

    const dispatch = useDispatch();
    function logOut() {
      setShowMenu(false);
      dispatch(userLoggedOut(!user_logged));
    }
    return (
      <React.Fragment>
        <AiOutlineUser
          size={50}
          color={MAIN_COLOR}
          onClick={() => setShowMenu(!showMenu)}
          css={css`
            position: fixed;
            top: 52px;
            right: 40px;
            background: #ffffff;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            border: 2px solid #000000;
            z-index: 6;
            cursor: pointer;
            transition: all 0.5s;
            &:hover {
              transform: scale(1.05);
            }
            @media (max-width: 768px) {
              right: 10px;
            }
          `}
        />
        {showMenu && (
          <LinksNavWrapper>
            <React.Fragment>
              {user_logged ? (
                <React.Fragment>
                  <Link onClick={() => setShowMenu(false)} to="/signup">
                    Registro
                  </Link>
                  <Link onClick={() => setShowMenu(false)} to="/login">
                    Iniciar Sesión
                  </Link>
                  <Link onClick={() => setShowMenu(false)} to="/">
                    Inicio
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <button onClick={logOut}>Cerrar Sesión</button>
                </React.Fragment>
              )}
              <span>
                <img src={logoImg} alt="E-Tinda" />
              </span>
              <span role="img" aria-label="heart">
                Hecho con amor ❤️
              </span>
            </React.Fragment>
          </LinksNavWrapper>
        )}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header>
        <div className="imgWrapper">
          <Link to="/">
            <img src={LetterLogo} alt="e-tinda" />
          </Link>
        </div>
      </Header>
      <Menu />
    </React.Fragment>
  );
};
