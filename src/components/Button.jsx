import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ action, text, icon, primary, secondary }) => {
  return (
    <StyledButton onClick={action} primary={primary} secondary={secondary}>
      {icon}
      {text}
    </StyledButton>
  );
};

export default Button;
