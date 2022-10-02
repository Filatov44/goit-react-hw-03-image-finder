import React from 'react'
import { StyledGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ pictures }) {
    
    
  return (
      <StyledGalleryList>
      {pictures.map(({ id, largeImageURL, tags, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            tags={tags}
            webformatURL={webformatURL}
          />
        );
      })}
    </StyledGalleryList>
  );
}
