import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';


export class Searchbar extends Component {
  state = {
    queryName: '',
  };

  handleNameChange = event => {
    this.setState({ queryName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.queryName.trim() === '') {
      toast.dark("Type in search!");
  return
}
    this.props.onSearch(this.state.queryName)
    this.setState({ queryName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
            <IoSearchSharp style={{ height: '30px', width: '30px' }} />
          </button>

          <input
            className={css.SearchFormInput}
            onChange={this.handleNameChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
