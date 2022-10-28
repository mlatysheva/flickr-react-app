import { useAppSelector } from '../hooks';
import ApiCard from './ApiCard';
import { Spinner } from './Spinner';

export interface ImagesApiProps {
  tag: string;
}
export interface IPhotoItem {
  dateupload: string;
  id: string;
  ownername?: string;
  secret?: string;
  server?: string;
  title: string;
  tags: string;
  views: string;
}

export const PhotoList: React.FC = () => {
  const photos = useAppSelector((state) => state.photos.photos);

  if (photos.length > 0 && localStorage.getItem('searchApiDashboard') !== '') {
    return (
      <div className="cards-wrapper">
        {photos.map((photo: IPhotoItem) => (
          <div key={photo.id}>
            <ApiCard
              key={Date.now()}
              id={photo.id}
              title={photo.title}
              thumbnail={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`}
              large_url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              original_url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
              dateupload={photo.dateupload}
              ownername={photo.ownername}
              tags={photo.tags}
              views={photo.views}
            />
          </div>
        ))}
      </div>
    );
  } else if (localStorage.getItem('searchApiDashboard') !== '') {
    return <Spinner />;
  } else return null;
};
