import React from 'react';
import { StyledLogo, StyledLogoImgSection } from './RegistrationForm.style';

const RegistrationForm = () => {
  return (
    <main>
      <StyledLogoImgSection>
        <StyledLogo>
          <div>
            <img
              src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
              alt=''
            />
          </div>
        </StyledLogo>
        <div>
          <img
            src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
            alt=''
          />
        </div>
      </StyledLogoImgSection>
    </main>
  );
};

export default RegistrationForm;
