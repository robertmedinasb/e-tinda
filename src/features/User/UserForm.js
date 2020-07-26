/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Form, Formik, Field } from "formik";
import { useContext } from "react";
import { AppContext } from "./../../App";
import {
  LinksWrapper,
  FormFieldStyled,
  FormStyled,
  FieldWrapper,
} from "./../styles";
import { Link } from "react-router-dom";

export const UserForm = ({
  initialValues = {
    names: "",
    last_names: "",
    email: "",
    phone: "",
    birth_date: "",
    district: "",
    password: "",
    password_confirmation: "",
    dni: "",
  },
  typeForm = "new",
}) => {
  function FormField({ type, form, name, field, ...props }) {
    return (
      <FormFieldStyled>
        <input type={type} name={name} {...field} {...props} />
      </FormFieldStyled>
    );
  }
  const { Districts } = useContext(AppContext);
  return (
    <Formik
      initialValues={initialValues}
      // validate={{}}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormStyled>
          <Form>
            <FieldWrapper>
              <label>Nombres:</label>
              <Field
                component={FormField}
                type="text"
                name="names"
                placeholder="Pedro Antonio"
              />
            </FieldWrapper>
            <FieldWrapper>
              <label>Apellidos:</label>
              <Field
                component={FormField}
                type="text"
                name="last_names"
                placeholder="Pérez Quispe"
              />
            </FieldWrapper>
            <FieldWrapper>
              <label>DNI / C.E:</label>
              <Field
                component={FormField}
                type="dni"
                name="tlf"
                placeholder="12345678"
              />
            </FieldWrapper>
            <FieldWrapper>
              <label>Correo Electrónico:</label>
              <Field
                component={FormField}
                type="email"
                name="email"
                placeholder="pedroperez@mail.com"
              />
            </FieldWrapper>
            <FieldWrapper>
              <label>Celular:</label>
              <Field
                component={FormField}
                type="tlf"
                name="phone"
                placeholder="912345678"
              />
            </FieldWrapper>
            <FieldWrapper>
              <label>Fecha de Nacimiento:</label>
              <Field component={FormField} type="date" name="birth_date" />
            </FieldWrapper>
            <FieldWrapper>
              <label>Distrito:</label>
              <Field as="select" name="district">
                <option key="select" value="select">
                  Seleccionar
                </option>
                {Districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </Field>
            </FieldWrapper>
            <FieldWrapper>
              <label>Contraseña:</label>
              <Field
                component={FormField}
                placeholder="***********"
                type="password"
                name="password"
              />
            </FieldWrapper>
            <FieldWrapper>
              <label>Confirmar contraseña:</label>
              <Field
                placeholder="***********"
                component={FormField}
                type="password"
                name="password_confirmation"
              />
            </FieldWrapper>
            <FieldWrapper>
              <button type="submit">Registrarme</button>
            </FieldWrapper>
            <LinksWrapper>
              <Link to="/login">Iniciar Sesión</Link>
              <Link to="/">Inicio</Link>
            </LinksWrapper>
          </Form>
        </FormStyled>
      )}
    </Formik>
  );
};
