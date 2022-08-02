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

const ModalToAddItemElement = styled.div``;
