import React from "react";
import styled from "styled-components";

// Create a styled component
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

// Use the styled component in your React component
function MyComponent() {
  return (
    <div>
      <h1>Welcome to MyComponent</h1>
      <StyledButton>Click Me</StyledButton>
    </div>
  );
}

export default MyComponent;
// import React from 'react';
// import styled, { css } from 'styled-components';

// const StyledButton = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   ${(props) =>
//     props.disabled &&
//     css`
//       opacity: 0.5;
//       cursor: not-allowed;
//     `}
// `;

// function MyComponent() {
//   const isButtonDisabled = true;

//   return (
//     <div>
//       <h1>Welcome to MyComponent</h1>
//       <StyledButton disabled={isButtonDisabled}>Click Me</StyledButton>
//     </div>
//   );
// }

// export default MyComponent;
