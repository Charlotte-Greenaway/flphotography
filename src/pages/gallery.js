import Gallery from 'react-photo-gallery';

const GalleryPage = () => {
    const photos = [
        {
          src: 'https://via.placeholder.com/300/33FF57/000000',
          width: 1,
          height: 1
        },
        {
          src: 'https://via.placeholder.com/300/33FF57/000000',
          width: 1,
          height: 1
        }
      ];
      
      
    return(
        <>
        <Gallery photos={photos} />;
        </>
    )
}

export default GalleryPage;