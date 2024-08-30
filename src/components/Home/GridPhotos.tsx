import '../../assets/styles/components/home/GridPhotos.scss';
import useHomeGridPhotos from '../../hooks/useGetHomeGridPhotos';

// Define the structure of the data
interface Photo {
  imageUrls: string[];
}

const GridPhotos = () => {
  const { homeGridPhotos, loading } = useHomeGridPhotos() as { homeGridPhotos: Photo[]; loading: boolean };

  if (loading) return <div>Loading...</div>
  
  return (
    <div>
      <div className='home-grid-texts'>
        <p>Share your setup with</p>
        <h3>#FurniroFurniture</h3>
      </div>
      <div id="parent">
        {homeGridPhotos.map((photo, index) => (
          <div
            key={index}
            className={`div${index + 1}`}
            style={{ width: '100%', height: '100%'}}
          >
            <img src={photo?.imageUrls[0]} alt="home images" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPhotos;
