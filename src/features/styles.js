/** @jsx jsx */
import styled from "@emotion/styled";

const MAIN_COLOR = "rgb(230, 145, 56)";

export const FormFieldStyled = styled.div`
  & input {
    width: 100%;
    height: 35px;
    padding: 8px;
    margin-bottom: 5px;
    border-radius: 10px;
    border: 1px solid rgb(141, 138, 138);
    outline: none;
    background: transparent;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 82px;
  background: ${MAIN_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  & .imgWrapper {
    position: absolute;
    top: 1px;
    width: 100%;
    max-width: 280px;
    & img {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    position: fixed;
    & .imgWrapper {
      position: fixed;
      left: 10%;
      top: 1px;
      width: 100%;
      max-width: 280px;
      & img {
        width: 100%;
      }
    }
  }
`;
export const FormStyled = styled.main`
  margin: 0 auto;
  width: 90%;
  max-width: 380px;
  padding: 20px 30px;
  border: 2px solid ${MAIN_COLOR};
  border-radius: 15px;
  box-shadow: 10px 10px 18px -2px rgba(0, 0, 0, 0.75);
  & .imgForm {
    max-width: 200px;
    margin: 0 auto;
    & img {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px auto;
  & label {
    margin-bottom: 2px;
  }
  & select {
    height: 35px;
    padding: 8px;
    margin-bottom: 5px;
    border-radius: 10px;
    border: 1px solid rgb(141, 138, 138);
    outline: none;
    background: transparent;
  }
  & button {
    height: 40px;
    margin-top: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    background: ${MAIN_COLOR};
    font-weight: 600;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(243, 119, 46);
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background: #ffffff;
      color: ${MAIN_COLOR};
    }
  }
`;
export const TitlePage = styled.h1`
  position: sticky;
  margin: 20px auto;
  text-align: center;
`;

export const MessagePage = styled.p`
  text-align: center;
  margin: 20px auto;
  margin-top: 0;
  width: 90%;
  max-width: 400px;
  font-size: 18px;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 1150px;
  margin: 0 auto;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    & img {
      border-radius: 10px;
      box-shadow: ;
      width: 90%;
      max-width: 450px;
      
    }
  }
  @media (max-width: 900px) {
    width: 95%;
    flex-wrap: wrap;
    & > div {
      width: 100%;
    }
    & > div > img {
      display: none;
    }
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & a {
    color: rgb(40, 146, 207);
    text-decoration: none;
  }
`;
