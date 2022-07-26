import React from "react";
import styled from "styled-components";

interface Props {
  isVisible: boolean;
  toggleIsEditing: any;
  remove: any;
}

export const ItemOptionView = ({ isVisible, toggleIsEditing, remove }: Props) =>
  isVisible ? (
    <ItemOptionViewElement>
      <ul>
        <li onClick={() => toggleIsEditing()}>Edit</li>
        <li onClick={() => remove()}>Delete</li>
      </ul>
    </ItemOptionViewElement>
  ) : (
    <div />
  );

const ItemOptionViewElement = styled.div``;
