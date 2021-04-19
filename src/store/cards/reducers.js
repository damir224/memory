import actionTypes from '../actionTypes';
import initialState from '../../helpers/initialState';
import shuffleFunc from '../../helpers/shuffleFunc';
import { flipAssistOne, flipAssistAll } from '../../helpers/flipAssist';

const cardsReducers = (state = { cards: [] }, action) => {
  switch (action.type) {
    case actionTypes.FLIP_ONE_CARD:
      return {
        ...state,
        cards: flipAssistOne(state.cards, action.payload)
      };
    case actionTypes.FLIP_ALL_CARD:
      return {
        ...state,
        cards: flipAssistAll(state.cards)
      };
    case actionTypes.SWAP_CARDS:
      return {
        ...state,
        cards: shuffleFunc(initialState.cards),
      };
    default:
      return state;
  }
};

export default cardsReducers;
