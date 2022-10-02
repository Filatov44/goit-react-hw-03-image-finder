import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalBtnClose,
  StyledModalImgWr,
} from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.closeModal);
    }

    closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { closeModal } = this;
    const { children } = this.props;
    // console.log(children);
    return createPortal(
      <StyledModalOverlay onClick={closeModal}>
        <StyledModal>
          <StyledModalBtnClose >
            <AiOutlineCloseCircle onClick={closeModal} />
          </StyledModalBtnClose>
          <StyledModalImgWr>{children}</StyledModalImgWr>
        </StyledModal>
      </StyledModalOverlay>,
      modalRoot
    );
  }
}
