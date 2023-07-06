import React from "react";
import styled from "styled-components";


// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  color: white;
  border: none;
  background: #F4B266;
  border-radius: 12px;
  cursor: pointer;
  margin: 1 rem;
  &:focus {
    outline: none;
  }

  &:hover,
  &active {
    background: #9B7E46;
  }
`;

export default Button;
