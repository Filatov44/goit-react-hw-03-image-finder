import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { nanoid } from 'nanoid';
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
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
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
            <BsSearch />
          </StyledSearchBtn>
          <StyledSearchInput
            onChange={handleChange}
            id={searchId}
            value={query}
            name="query"
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}
