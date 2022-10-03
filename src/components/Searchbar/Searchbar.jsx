import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import {
  StyledHeader,
  StyledForm,
  StyledSearchBtn,
  StyledSearchInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a valid request');
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(query);
    this.reset();
  };

  reset() {
    this.setState({ query: '' });
  }

  searchId = nanoid();

  render() {
    const { query } = this.state;
    const { handleSubmit, searchId, handleChange } = this;
    return (
      <StyledHeader>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSearchBtn onClick={handleSubmit} type="submit">
            <BsSearch size={20} />
          </StyledSearchBtn>
          <StyledSearchInput
            onChange={handleChange}
            id={searchId}
            value={query}
            name="query"
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
          ></StyledSearchInput>
        </StyledForm>
      </StyledHeader>
    );
  }
}
