/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Form, Formik, Field } from "formik";
import {
  LinksWrapper,
  FormFieldStyled,
  FormStyled,
  FieldWrapper,
} from "../styles";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logoImg from "./../../assets/images/e-tinda-logo.png";
import { userLogged } from "./userSlice";

export const LoginForm = ({
  initialValues = {
    email: "",
    password: "",
    dni: "",
  },
  typeForm = "new",
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  function FormField({ type, form, name, field, ...props }) {
    return (
      <FormFieldStyled>
        <input type={type} name={name} {...field} {...props} />
      </FormFieldStyled>
    );
  }
  return (
    <Formik
      initialValues={initialValues}
      // validate={{}}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        dispatch(userLogged({ values }));
        setSubmitting(false);
        history.replace("/");
      }}
    >
      {({ isSubmitting }) => (
        <FormStyled>
          <div className="imgForm">
            <img src={logoImg} alt="e-tinda" />
          </div>
          <Form>
            <FieldWrapper>
              <label>DNI / C.E:</label>
              <Field
                component={FormField}
                type="tlf"
                name="dni"
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
              <label>Contraseña:</label>
              <Field
                component={FormField}
                placeholder="********"
                type="password"
                name="password"
              />
            </FieldWrapper>
            <FieldWrapper>
              <button type="submit">Iniciar Sesión</button>
            </FieldWrapper>
            <LinksWrapper>
              <Link to="/signup">Registrarme</Link>
              <Link to="/forget_password">He olvidado mi contraseña</Link>
              <Link to="/">Inicio</Link>
            </LinksWrapper>
          </Form>
        </FormStyled>
      )}
    </Formik>
  );
};
