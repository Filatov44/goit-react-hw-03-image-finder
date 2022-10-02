import React from 'react';
import { StyledImg, StyledItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ id, largeImageURL, tags, webformatURL }) {
  return (
    <StyledItem>
      <StyledImg
        id={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
      />
    </StyledItem>
  );
}
