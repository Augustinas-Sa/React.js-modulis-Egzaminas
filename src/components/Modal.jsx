import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Overlay,
  ModalWrapper,
  StyledModal,
  CloseButtonWrapper,
  CloseButton,
} from './Modal.style';

const Modal = ({ children, onClose }) => {
  //Hooks
  // - side effects
  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  // custom functions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'ModalWrapper') onClose();
    return;
  };

  return ReactDOM.createPortal(
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOverlay(e)} data-id='ModalWrapper'>
        <StyledModal>
          <CloseButtonWrapper>
            <CloseButton onClick={onClose}>✖</CloseButton>
          </CloseButtonWrapper>
          <div>{children}</div>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
