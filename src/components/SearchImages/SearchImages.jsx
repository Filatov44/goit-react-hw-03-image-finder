import React, { Component } from 'react';
import { searchPosts } from 'service/api-imageSearch';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

import { StyledBaseContainer } from './SearchImages.styled';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { StyledModalImg } from 'components/Modal/Modal.styled';
import ButtonLoadMore from 'components/Button/Button';
export default class SearchImages extends Component {
  state = {
    pictures: [],
    query: '',
    page: 1,
    loading: false,
    error: null,
    modalOpen: false,
    largeImageURL: '',
    alt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.fetchPosts(query, page);
    }
  }

  async fetchPosts() {
    const { query, page } = this.state;
    this.setState({
      loading: true,
    });
    try {
      const data = await searchPosts(query, page);
      // console.log(data);

      this.setState(({ pictures }) => {
        return {
          pictures: [...pictures, ...data.data.hits],
        };
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  onSearch = data => {
    this.setState({ pictures: [], page: 1 });
    this.setState({
      query: data,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      largeImageURL: '',
      alt: '',
    });
  };

  openModal = modalContent => {
    // console.log(modalContent);
    const { largeImageURL, tags } = modalContent;
    this.setState({
      modalOpen: true,
      largeImageURL: largeImageURL,
      alt: tags,
    });
  };

  loadMore = () => {
    this.setState(({page}) => ({
      page: page + 1,
    }));
  };

  render() {
    const { pictures, loading, error, modalOpen, largeImageURL, alt } =
      this.state;
    const { onSearch, closeModal, openModal, loadMore } = this;
    const isPosts = Boolean(pictures.length);
    return (
      <StyledBaseContainer>
        {modalOpen && (
          <Modal onClose={closeModal}>
            <StyledModalImg src={largeImageURL} alt={alt} />
          </Modal>
        )}
        <Searchbar onSubmit={onSearch}></Searchbar>
        {error && <p>An error has occurred. Try later</p>}
        {isPosts && <ImageGallery pictures={pictures} onClick={openModal} />}
        {loading && <Loader />}
        {isPosts && <ButtonLoadMore onClick={loadMore} />}
      </StyledBaseContainer>
    );
  }
}
