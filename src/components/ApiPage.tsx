import { Title } from './Home';
import { ApiSearch } from './ApiSearch';
import { PhotoList } from './ApiPhotoList';
import { ApiDashboard } from './ApiDashboard';

export function ApiPage() {
  return (
    <div className="main">
      <Title title="Find photos on Flickr" />
      <ApiSearch placeholder="Enter photo tags" />
      <ApiDashboard />
      <PhotoList />
    </div>
  );
}
