import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  value: string;
  handleChange: any;
  handleSubmit: any;
  toggleIsVisible: any;
}

export const ModalContentToAddItem = ({
  label,
  value,
  handleChange,
  handleSubmit,
  toggleIsVisible,
}: Props) => {
  return (
    <ModalToAddItemElement>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          toggleIsVisible();
        }}
      >
        <label>{label}</label>
        <input
          type={"text"}
          value={value}
          onChange={(e) => handleChange(e)}
          required
        />
        <input type="submit" value="Confirm" />
      </form>
    </ModalToAddItemElement>
  );
};

const ModalToAddItemElement = styled.div`
  width: 80%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 13px;
      margin-right: auto;
      margin-bottom: 5px;
      color: #767676;
    }

    input {
      border-radius: 5px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      font-size: 16px;
      outline: none;
      padding: 2px 8px;
    }

    input[type="submit"] {
      width: 80px;
      height: 30px;
      margin: 10px auto;
      font-weight: semi-bold;
      color: #ffffffd6;
      background: #00a699;

      :hover {
        cursor: pointer;
        background: #00a699f2;
      }
    }
  }
`;
