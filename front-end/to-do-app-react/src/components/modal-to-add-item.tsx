import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  value: string;
  handleChange: any;
  handleSubmit: any;
  isVisible: boolean;
}

export const ModalToAddItem = ({
  label,
  value,
  handleChange,
  handleSubmit,
  isVisible,
}: Props) => {
  return isVisible ? (
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
  ) : (
    <div></div>
  );
};

const ModalToAddItemElement = styled.div``;
