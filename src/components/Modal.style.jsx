import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(37, 115, 134, 0.4);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  width: 1040px;
  display: flex;
  flex-wrap: wrap;

  background-color: #fff;

  padding: 20px;

  border-radius: 10px;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 10px;
  margin-left: 980px;
`;

export const CloseButton = styled.span`
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
