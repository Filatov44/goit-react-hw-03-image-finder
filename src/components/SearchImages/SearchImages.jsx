import React, { Component } from 'react';
import { searchPosts } from 'service/api-imageSearch';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

import { StyledBaseContainer } from './SearchImages.styled';
import { Loader } from 'components/Loader/Loader';

export default class SearchImages extends Component {
  state = {
    pictures: [],
    query: '',
    page: 1,
    loading: false,
    error: null,
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
    })
    try {
      const data = await searchPosts(query, page);
      console.log(data);
        
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
    this.setState({ pictures: [], page: 1});
    this.setState({
      query: data,
    });
  };

  render() {
    const { pictures, loading, error } = this.state;
    const { onSearch } = this;
    return (
      <StyledBaseContainer>
        <Searchbar onSubmit={onSearch}></Searchbar>
        {loading && <Loader />}
        {error && <p>An error has occurred. Try later</p>}
        <ImageGallery pictures={pictures} />
      </StyledBaseContainer>
    );
  }
}
