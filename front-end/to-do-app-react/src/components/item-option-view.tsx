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

const ItemOptionViewElement = styled.div`
  position: absolute;
  top: 0;
  right: 11%;
  z-index: 1;
  background: #00a699;
  color: white;
  padding: 10px;
  font-size: 15px;
  border-radius: 10%;
  width: 70px;
  height: 50px;

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;

    li {
      margin: 3px auto;
      // border-bottom: 1px solid white;
      width: 100%;

      :hover {
        cursor: pointer;
        opacity: 80%;
      }
    }
  }
`;
