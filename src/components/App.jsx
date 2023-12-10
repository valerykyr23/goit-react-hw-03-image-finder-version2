import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { InfinitySpin } from 'react-loader-spinner';




export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar />
      <ImageGallery />
      {/* <Modal /> */}
      <Button/>
      <InfinitySpin 
        
  width='200'
  color="#1057E6"
/>

    </div>
  );
};
