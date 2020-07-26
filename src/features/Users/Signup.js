/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { UserForm } from "./UserForm";
import styled from "@emotion/styled";
import { FormWrapper, TitlePage, MessagePage } from "../styles";
import posterLogin from "./../../assets/images/posterLogin.png";
import logoImg from "./../../assets/images/e-tinda-logo.png";

export const Signup = () => {
  return (
    <React.Fragment>
      <FormWrapper>
        <div>
          <TitlePage>¡Bienvenido a E-Tinda!</TitlePage>
          <MessagePage>
            Hola, estamos contentos de que decidas unirte a esta comunidad de
            comercio latinoamericano
            <br /> Llena el siguiente formulario para continuar: <span>🎉</span>
            :
          </MessagePage>
          <img src={posterLogin} alt="poster" />
        </div>
        <UserForm />
      </FormWrapper>
    </React.Fragment>
  );
};
