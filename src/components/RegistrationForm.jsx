import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';
import Modal from './Modal';
import {
  StyledLogo,
  StyledLogoImgSection,
  StyledTextDiv,
  StyledMain,
  StyledFormSection,
  StyledA,
  StyledTextButtonsDiv,
  StyledButtonDiv,
  StyledH3,
  StyledGoogleIcon,
  StyledFacebookIcon,
  StyledImgDiv,
  StyledImg,
} from './RegistrationForm.style';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const RegistrationForm = () => {
  // hooks
  // - state
  const [openFormModal, setOpenFormModal] = useState(false);

  // custom functions
  const openModal = () => setOpenFormModal(true);
  const closeModal = () => setOpenFormModal(false);

  return (
    <StyledMain>
      <StyledLogoImgSection>
        <StyledLogo>
          <div>
            <img
              src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
              alt=''
            />
          </div>
        </StyledLogo>
        <StyledImgDiv>
          <StyledImg
            src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
            alt=''
          />
        </StyledImgDiv>
        <StyledTextDiv>
          <p>Start for free & Get Attractive offers Today !</p>
        </StyledTextDiv>
      </StyledLogoImgSection>
      <StyledFormSection>
        <StyledTextButtonsDiv>
          <h2>Get Started</h2>
          <p>Already have an account?</p>
          <StyledA href='close'>Log in</StyledA>
          <StyledButtonDiv>
            <Button
              action={openModal}
              icon={
                <StyledGoogleIcon>
                  <FaGoogle />
                </StyledGoogleIcon>
              }
              text='sign up'
              primary
            />
            <Button
              action={openModal}
              icon={
                <StyledFacebookIcon>
                  <FaFacebook />
                </StyledFacebookIcon>
              }
              text='sign up'
              secondary
            />
          </StyledButtonDiv>
          <StyledH3>Or</StyledH3>
        </StyledTextButtonsDiv>
        <Form />
      </StyledFormSection>
      {openFormModal && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </StyledMain>
  );
};

export default RegistrationForm;
