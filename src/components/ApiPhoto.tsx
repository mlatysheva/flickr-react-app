import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiCardContext } from './ApiCardContext';
import './modal.css';
import { ThemeContext } from './Theme';

export default function ApiPhoto() {
  const theme = useContext(ThemeContext);
  const context = useContext(ApiCardContext);
  const navigate = useNavigate();

  let formattedDate;
  let formattedTags;

  if (context.card && context.card.dateupload) {
    formattedDate = new Intl.DateTimeFormat('en-UK', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(parseInt(context.card.dateupload!) * 1000);
    formattedTags = context.card.tags?.split(' ').join(', ');

    return (
      <div className="main">
        <section className="modal-main">
          <div className="title-container">
            <h1 className="modal-title">{context.card.title}</h1>
          </div>
          <div className="main-container">
            <a href={context.card.original_url || ''} target="_blank" rel="noreferrer">
              <img src={context.card.large_url} alt="photo"></img>
            </a>
            <div className="details-container">
              <p className="modal-details-field">
                <span className="explanation">Uploaded on:&nbsp;</span>
                {formattedDate}
              </p>
              <p className="modal-details-field">
                <span className="explanation">Owner:&nbsp;</span>
                {context.card.ownername}
              </p>
              <p className="modal-details-field">
                <span className="explanation">Tags:&nbsp;</span>
                {formattedTags}
              </p>
              <p className="modal-details-field">
                <span className="explanation">Views:&nbsp;</span>
                {context.card.views}
              </p>
              <button
                style={{ background: theme.state.background, color: theme.state.foreground }}
                className="back-button"
                type="button"
                onClick={() => {
                  navigate('/api');
                }}
              >
                Back
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return null;
}

export { ApiPhoto };
