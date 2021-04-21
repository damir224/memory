import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountAC } from '../../store/cards/actions';

const initialState = { m: '00', s: '00' };

export default function Timer() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.game);
  const cardArr = useSelector((state) => state.cards);
  const [timer, setTimer] = React.useState(initialState);
  const [counter, setCounter] = React.useState(1);
  const refInterval = React.useRef();
  React.useEffect(() => {
    if (cardArr.filter((e) => e.complete).length === 4) {
      dispatch(setCountAC(counter));
    }
  }, [cardArr]);
  React.useEffect(() => {
    if (status) {
      refInterval.current = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const computedSecond = String(secondCounter).length === 1
          ? `0${secondCounter}`
          : secondCounter;
        const computedMinute = String(minuteCounter).length === 1
          ? `0${minuteCounter}`
          : minuteCounter;
        setTimer(() => ({ m: computedMinute, s: computedSecond }));
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    if (!status) {
      setCounter(0);
    }
    return () => clearInterval(refInterval.current);
  }, [status, counter]);

  return (
    <>
      <div className='flex column'>
        <h3>Timer:</h3>
        <div className='flex'>
          <span>{timer?.m}</span>
          &nbsp;:&nbsp;
          <span>{timer?.s}</span>
        </div>
      </div>
    </>
  );
}
