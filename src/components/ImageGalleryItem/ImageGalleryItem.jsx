import css from './ImageGalleryItem.module.css';
// import React, { Component } from 'react';
// import { InfinitySpin } from 'react-loader-spinner';

export const ImageGalleryItem = ({id, smallImage}) => {

    return (
         <li key={id} className={css.ImageGalleryItem}>
              <img className={css.ImageGalleryItemImage}
                   src={smallImage} width="300" alt='response img' />

      </li>
    );
  
}







// export class ImageGalleryItem extends Component {


//   state = {
//     imageInSearch: null,
//     loading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.imageInfo !== this.props.imageInfo) {
//       this.setState({ loading: true });
//       setTimeout(() => {
//         fetch(
//           `https://pixabay.com/api/?q=${this.props.imageInfo}&page=1&key=32855889-b519aab1920f45c88bc238e1c&image_type=photo&orientation=horizontal&per_page=12`
//         )
//              .then(response => response.json())
//           .then(imageInSearch => this.setState({ imageInSearch }))
//           .catch(error => this.setState({ error }))
//           .finally(() => this.setState({ loading: false }));
//       }, 2000);
//     }
//   }

//   render() {
//     return (
//       <li className={css.ImageGalleryItem}>
//         <img className={css.ImageGalleryItemImage} src='' width = "300" alt="" />

//         {this.state.error && <div>Все сломалось</div>}
//         {this.state.loading && <InfinitySpin width="200" color="#4fa94d" />}
//         {this.state.imageInSearch && <div>{this.state.imageInSearch.total}</div>}
//         {!this.props.imageInfo && <div>Введите в поиск слово</div>}
//       </li>
//     );
//   }
// }
