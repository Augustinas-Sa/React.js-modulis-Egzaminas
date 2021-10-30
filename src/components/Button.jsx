import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ text, icon, primary, secondary }) => {
  return (
    <StyledButton primary={primary} secondary={secondary}>
      {icon}
      {text}
    </StyledButton>
  );
};

export default Button;
