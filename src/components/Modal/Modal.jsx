import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalBtnClose,
  StyledModalImgWr,
} from './Modal.styled';

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  render() {
      const { children, onClose } = this.props;
      console.log( children );
    return createPortal(
      <StyledModalOverlay>
        <StyledModal>
          <StyledModalBtnClose onClick={onClose}>
            <AiOutlineCloseCircle />
          </StyledModalBtnClose>
          <StyledModalImgWr>{children}</StyledModalImgWr>
        </StyledModal>
      </StyledModalOverlay>,
      modalRoot
    );
  }
}
