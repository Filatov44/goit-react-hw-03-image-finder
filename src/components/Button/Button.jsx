import React from 'react'
import { StyledBtnLoadMore } from './Button.styled';

export default function ButtonLoadMore({ onClick} ) {
  return (
    <StyledBtnLoadMore type="button" onClick={onClick}>
      Load more
    </StyledBtnLoadMore>
  );
}
