/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { LoginForm } from "./LoginForm";
import { FormWrapper, TitlePage, MessagePage } from "../styles";
import posterLogin from "./../../assets/images/hand_and_phone.png";

export const Login = () => {
  return (
    <React.Fragment>
      <FormWrapper>
        <div>
          <TitlePage>¡Bienvenido de nuevo!</TitlePage>
          <MessagePage>
            ¡Hola!, te hemos extrañado. <br />
            Tenemos todo preparado para tu siguiente negocio o venta{" "}
            <span aria-label="sunglasses" role="img">
              😎
            </span>
            <br /> Inicia sesión para estar al día:
          </MessagePage>
          <img src={posterLogin} alt="poster" />
        </div>
        <LoginForm />
      </FormWrapper>
    </React.Fragment>
  );
};
