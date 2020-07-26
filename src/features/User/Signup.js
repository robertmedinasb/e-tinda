/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { UserForm } from "./UserForm";
import { FormWrapper, TitlePage, MessagePage } from "../styles";
import posterLogin from "./../../assets/images/posterLogin.png";

export const Signup = () => {
  return (
    <React.Fragment>
      <FormWrapper>
        <div>
          <TitlePage>¡Bienvenido a E-Tinda!</TitlePage>
          <MessagePage>
            ¡Hola!, estamos contentos de que decidas unirte a esta comunidad de
            comercio latinoamericano
            <br /> Llena el siguiente formulario para continuar:{" "}
            <span aria-label="🎉" role="img">
              🎉
            </span>
            :
          </MessagePage>
          <img
            css={css`
              box-shadow: 10px 10px 18px -2px rgba(0, 0, 0, 0.75);
            `}
            src={posterLogin}
            alt="poster"
          />
        </div>
        <UserForm />
      </FormWrapper>
    </React.Fragment>
  );
};
