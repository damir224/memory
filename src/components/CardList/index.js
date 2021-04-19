import React from 'react';
import './CardList.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import { flipOneCardAC, flipTwoCardAC, flipThreeCardAC, flipAllCardAC, checkCardsAC } from '../../store/cards/actions';

export default function CardList() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardsReducers);
  const [cardListArr, setCardListArr] = React.useState([]);
  const [cardsReversedArr, setCardsReversedArr] = React.useState([]);
  const timer = React.useRef(null);
  console.log('cardsReversedArr',cardsReversedArr);
  React.useEffect(() => {
    setCardListArr(cards);
  }, [cards]);
  const reverseHandler = (e) => {
    if(cardsReversedArr[0]?.id !== e.id){
      setCardsReversedArr((prev) => [...prev, e]);
    }

    // dispatch(flipCardAC(e.id));
  };
  React.useEffect(() => {
    // if (cardsReversedArr.length > 2) {
    //   dispatch(flipThreeCardAC(cardsReversedArr[0].id));
    //     setCardsReversedArr([]);
    // }
    if (cardsReversedArr.length === 2) {
      dispatch(flipOneCardAC(cardsReversedArr[1].id));
      console.log(1);
        setTimeout(()=> {
          console.log(1000);
          dispatch(flipAllCardAC());
          setCardsReversedArr([]);
        }, 1000)
        return clearTimeout(timer.current);
    }
    if (cardsReversedArr.length === 1) {
        dispatch(flipOneCardAC(cardsReversedArr[0].id));
      console.log(1);
        timer.current = setTimeout(() => {
          console.log(5000);
          dispatch(flipAllCardAC());
          setCardsReversedArr([]);
        }, 5000)
    }
    // if (cardsReversedArr.length === 2) {
    //   setTimeout(()=> {
    //     console.log(1000);
    //     dispatch(checkCardsAC(...cardsReversedArr));
    //     setCardsReversedArr([]);
    //   }, 1000)
    //   return clearTimeout(timer.current);
    // }
    // if (cardsReversedArr.length === 1) {
    //   timer.current = setTimeout(() => {
    //     console.log(5000);
    //     dispatch(flipCardAC(cardsReversedArr[0].id));
    //     setCardsReversedArr([]);
    //   }, 5000)
    // }
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
              reverse={cardsReversedArr !== 2 ? true : false }
            />
          ))}
        </div>
      ) : (
        <p>Sorry! You need to be logged in to access this page.</p>
      )}
    </div>
  );
}
