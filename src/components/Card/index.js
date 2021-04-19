import React from 'react';
import './Card.css';
import react from './react.png';

const Card = React.memo(
  ({ card, reverseHandler }) => {
    return (
      <>
        {card.complete
          ? <div
            className='card__body flip'
          >
            <div className='card__face--front'>
              <b>{card.logo}</b>
            </div>
          </div>
          : <div
            onClick={() => reverseHandler()}
            className={`card__body ${card.cardFace ? 'flip' : ''}`}
          >
            {card.cardFace ? (
              <div className='card__face--front'>
                <b>{card.logo}</b>
              </div>
            ) : (
              <img src={react} alt='img' style={{ height: '100%' }} />
            )}
          </div>}
      </>
    );
  },
  (prevProps, nextProps) => prevProps.card.cardFace === nextProps.card.cardFace,
);
export default Card;
