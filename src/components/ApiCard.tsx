import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiCardContext } from './ApiCardContext';

export interface ApiCardProps {
  id: string;
  dateupload: string;
  title: string;
  thumbnail: string;
  large_url: string;
  original_url: string;
  ownername?: string;
  tags?: string;
  views?: string;
}

export function ApiCard(props: ApiCardProps) {
  const navigate = useNavigate();
  const context = useContext(ApiCardContext);

  return (
    <div className="card small-api-card">
      <div className="title-wrapper">
        <img className="photo-image" src={props.thumbnail} alt="photo" />
        <p className="title">
          {props.title
            .split(' ')
            .slice(0, 6)
            .join(' ')
            .replace(/[,.\-!]\s*$/, ' ')}
        </p>
      </div>
      <button
        className="api-card-link"
        onClick={() => {
          context.card = props;
          navigate('/api/photo');
        }}
      >
        More...
      </button>
    </div>
  );
}

export default ApiCard;
