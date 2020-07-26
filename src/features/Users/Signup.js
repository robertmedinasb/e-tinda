/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { UserForm } from "./UserForm";
import styled from "@emotion/styled";
import { TitlePage, MessagePage } from "../styles";

export const Signup = () => {
  return (
    <React.Fragment>
      <TitlePage>¡Bienvenido a E-Tinda!</TitlePage>
      <MessagePage>
        Hola, estamos contentos de que decidas unirte a esta comunidad de
        comercio latinoamericano
        <br /> Llena el siguiente formulario para continuar<span>🎉</span>:
      </MessagePage>
      <UserForm />
    </React.Fragment>
  );
};
