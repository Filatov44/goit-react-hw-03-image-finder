import styled from 'styled-components';
export const StyledModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
`;

export const StyledModal = styled.div`
    max-width: 90%;
    border-radius: 15px;
    position: relative;

 `;

export const StyledModalBtnClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 50px;
  padding: 0;
  margin: 0;
`;

export const StyledModalImgWr = styled.div`
    
`;
export const StyledModalImg = styled.img`
    
`;