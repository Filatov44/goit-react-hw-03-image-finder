import styled from 'styled-components';

export const StyledHeader = styled.header`
   display: flex;
   align-items: center;
   justify-content: center;
   padding-top: 20px;
   padding-bottom: 20px;
   background-color: rgba(0, 0, 255, 0.7);
`;
export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
`;
export const StyledSearchBtn = styled.button`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border: none;
  padding: 6px;
  width: 40px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in-out;
  
  :focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
export const StyledSearchInput = styled.input`
  padding: 10px;
  max-width: 400px;
  margin: auto;
  box-sizing: border-box;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  outline: none;
  transition: box-shadow 0.4s ease-in-out;

  :focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;