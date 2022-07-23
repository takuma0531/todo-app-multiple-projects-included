import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  value: string;
  handleChange: any;
  handleSubmit: any;
}

export const ModalToAddItem = ({
  label,
  value,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <ModalToAddItemElement>
      <form onSubmit={() => handleSubmit()}>
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
