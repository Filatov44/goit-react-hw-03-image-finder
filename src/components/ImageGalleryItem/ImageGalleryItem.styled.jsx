import styled from 'styled-components';

export const StyledImg = styled.img`
  /* display: block; */
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const StyledItem = styled.li`
    margin-bottom: 10px;
    width: 300px;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;

    :hover {
            transform: scale(1.03);
        }

    /* :last-child {
        margin-bottom: 0;
    } */

    @media screen and (min-width: 768px) {
        width: calc( (100% - 10px * 4) / 2);
        margin: 10px;
    }

    @media screen and (min-width: 1200px) {
        width: calc( (100% - 10px * 8) / 4);
    }

`;
