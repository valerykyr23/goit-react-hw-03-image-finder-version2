import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export class ImageGallery extends Component {

  state = {
    imageInSearch: null,
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
          .then(imageInSearch => this.setState({ imageInSearch }))
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

    render() {
      
        

        return (
          
            
        
        <ul className={css.ImageGallery}>
            
                <ImageGalleryItem />

            {this.state.error && <div>Все сломалось</div>}
         {this.state.loading && <InfinitySpin width="200" color="#4fa94d" />}
        {this.state.imageInSearch && <div>{this.state.imageInSearch.total}</div>}
      {!this.props.imageInfo && <div>Введите в поиск слово</div>}
                
        
      </ul>
    );
  }
}

