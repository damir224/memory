import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { swapCardsAC } from '../../store/cards/actions';
import Timer from './Timer';
export default function NavBar() {
  const dispatch = useDispatch();
  // const [isStart, toggleStart] = React.useState(false);
  // const cardArr = useSelector(({ cardsReducers }) => cardsReducers.cards);

  const swapHandler = () => {
    // toggleStart(true);
    return dispatch(swapCardsAC());
  };

  // React.useEffect(() => {
  //   if (cardArr.filter((e) => e.complete).length === 4) {
  //     // dispatch(flipOneCardAC(cardsReversedArr[1].id));
  //     // toggleStart(false);
  //   }
  // }, [cardArr]);
  return (
    <div>
      <button type='button' onClick={() => swapHandler()}>
        Start
      </button>
      <Timer />
    </div>
  );
}
