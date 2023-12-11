import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export class ImageGallery extends Component {

  state = {
    imageInSearch: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageInfo !== this.props.imageInfo) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.imageInfo}&page=1&key=32855889-b519aab1920f45c88bc238e1c&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(imageInSearch => this.setState({ imageInSearch: imageInSearch.hits }))
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

    render() {
      
        

        return (
          
            
        
        <ul className={css.ImageGallery}>
            
                
            { this.state.imageInSearch && this.state.imageInSearch.map(({ id, webformatURL }) => (<ImageGalleryItem id={id} smallImage={webformatURL} />))}

            {this.state.loading && <InfinitySpin width="200" color="#4fa94d" />}
            {!this.props.imageInfo && <div>Введите в поиск слово</div>}
            { this.state.error && <div>Все сломалось</div> }
         
          
      </ul>
    );
  }
}

