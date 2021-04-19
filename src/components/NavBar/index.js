import React from 'react';
import { useDispatch } from 'react-redux';
import { swapCardsAC } from '../../store/cards/actions';

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <div>
      <button type='button' onClick={() => dispatch(swapCardsAC())}>
        swap
      </button>
    </div>
  );
}
