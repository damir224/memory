import React from 'react';
import './CardList.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import { flipOneCardAC, flipAllCardAC } from '../../store/cards/actions';

export default function CardList() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardsReducers);
  const [cardListArr, setCardListArr] = React.useState([]);
  const [cardsReversedArr, setCardsReversedArr] = React.useState([]);
  const timer = React.useRef(null);
  React.useEffect(() => {
    setCardListArr(cards);
  }, [cards]);
  const reverseHandler = (e) => {
    if(cardsReversedArr[0]?.id !== e.id){
      setCardsReversedArr((prev) => [...prev, e]);
    }
  };
  React.useEffect(() => {
    if (cardsReversedArr.length === 2) {
      dispatch(flipOneCardAC(cardsReversedArr[1].id));
        setTimeout(()=> {
          dispatch(flipAllCardAC());
          setCardsReversedArr([]);
        }, 1000)
        return clearTimeout(timer.current);
    }
    if (cardsReversedArr.length === 1) {
        dispatch(flipOneCardAC(cardsReversedArr[0].id));
        timer.current = setTimeout(() => {
          dispatch(flipAllCardAC());
          setCardsReversedArr([]);
        }, 5000)
    }
  }, [dispatch, cardsReversedArr]);
  return (
    <div>
      {cardListArr.length !== 0 && (
        <p align='center' style={{ marginTop: '1em' }}>
          Card List
        </p>
      )}
      {cardListArr.length ? (
        <div className='card-group'>
          {cardListArr.map((e) => (
            <Card
              key={e.id}
              card={e}
              reverseHandler={() => reverseHandler(e)}
            />
          ))}
        </div>
      ) : (
        <p>Sorry! You need to be logged in to access this page.</p>
      )}
    </div>
  );
}
