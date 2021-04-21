import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { swapCardsAC } from '../../store/cards/actions';
import Timer from './Timer';

export default function NavBar() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.game);
  const swapHandler = () => dispatch(swapCardsAC());
  return (
    <div>
      {status ? (
        <Timer />
      ) : (
        <button type='button' onClick={() => swapHandler()}>
          Start
        </button>
      )}
    </div>
  );
}
