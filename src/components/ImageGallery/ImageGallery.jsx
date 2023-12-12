import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
// import { InfinitySpin } from 'react-loader-spinner';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    imageInSearch: null,
    error: null,
    status: 'idle'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageInfo !== this.props.imageInfo) {
      this.setState({ status: 'pending'});
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.imageInfo}&page=1&key=32855889-b519aab1920f45c88bc238e1c&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }

            return Promise.reject(
              new Error(
                `Все сломалось, нет картинок по запросу {this.props.imageInfo}`
              )
            );
          })

          .then(imageInSearch =>
            this.setState({ imageInSearch: imageInSearch.hits, status: 'resolved' })
          )
          .catch(error => this.setState({ error, status: 'rejected' }))
          
      }, 2000);
    }
  }

  render() {

    const { error, imageInSearch, status} = this.state;
    

    if (status === 'idle') {
      return <div>Введите в поиск слово</div>
    };

    if (status === 'pending') {
      return <Loader />
    };

    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }

    if (status === 'resolved') {
      return   <ul className={css.ImageGallery}>
        
         { imageInSearch.map(({ id, webformatURL }) => (<ImageGalleryItem id={id} smallImage={webformatURL} />)
            
          )}
        
      </ul>
    }

    
  }
}
