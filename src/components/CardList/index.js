import React from 'react';
import './CardList.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import { flipOneCardAC, flipAllCardAC } from '../../store/cards/actions';
import Dashboard from '../Dashboard';

export default function CardList() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state);
  const { id, status } = useSelector((state) => state.game);
  const dashboardArr = useSelector((state) => state.dashboard);
  const [cardListArr, setCardListArr] = React.useState([]);
  const [cardsReversedArr, setCardsReversedArr] = React.useState([]);
  const timer = React.useRef(null);
  React.useEffect(() => {
    setCardListArr(cards);
  }, [cards]);
  const reverseHandler = (e) => {
    if (cardsReversedArr[0]?.id !== e.id) {
      setCardsReversedArr((prev) => [...prev, e]);
    }
  };
  React.useEffect(() => {
    if (cardsReversedArr.length === 2) {
      dispatch(flipOneCardAC(cardsReversedArr[1].id));
      setTimeout(() => {
        dispatch(flipAllCardAC());
        setCardsReversedArr([]);
      }, 1000);
      return clearTimeout(timer.current);
    }
    if (cardsReversedArr.length === 1) {
      dispatch(flipOneCardAC(cardsReversedArr[0].id));
      timer.current = setTimeout(() => {
        dispatch(flipAllCardAC());
        setCardsReversedArr([]);
      }, 5000);
    }
  }, [dispatch, cardsReversedArr]);
  return (
    <div>
      {status ? (
        <div className='card-group'>
          {cardListArr.map((e) => (
            <Card
              key={e.id}
              card={e}
              reverseHandler={() => reverseHandler(e)}
            />
          ))}
        </div>
      ) : id !== 0 ? (
        <Dashboard games={dashboardArr} />
      ) : (
        <p>Please, press "Start" button above!</p>
      )}
    </div>
  );
}
