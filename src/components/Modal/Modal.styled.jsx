import styled from 'styled-components';
export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
`;

export const StyledModalBtnClose = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 30px;
  color: black;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 50px;
  padding: 0;
  margin: 0;

  &:hover {
    scale: 1.1;
    color: red;
  }
`;

export const StyledModalImgWr = styled.div`
  width: 75wh;
  height: 75vh;
  /* max-height: calc(100vh - 100px); */
`;
export const StyledModalImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;