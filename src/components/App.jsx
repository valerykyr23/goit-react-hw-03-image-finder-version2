import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

export class App extends Component {
  state = {
    queryName: '',
  };

  // componentDidMount() {

  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=32855889-b519aab1920f45c88bc238e1c&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(response => response.json())
  //     .then(console.log)
  // };

  handleSearchFormSubmit = searchName => {
    this.setState({ queryName: searchName });
  };

  render() {
    injectStyle();
    return (
      <div
        style={{
          fontSize: 40,
          color: '#010101',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSearch={this.handleSearchFormSubmit} />
        <ToastContainer autoClose={1000} />
        <ImageGallery imageInfo={this.state.queryName} />
        {/* <Modal /> */}
        <Button />
      </div>
    );
  }
}
