import actionTypes from '../actionTypes';
import initialState from '../../helpers/initialState';
import shuffleFunc from '../../helpers/shuffleFunc';
import { flipAssistOne, flipAssistTwo, flipAssistThree, flipAssistAll } from '../../helpers/flipAssist';
import checkAssist from '../../helpers/checkAssist';

const cardsReducers = (state = { cards: [] }, action) => {
  switch (action.type) {
    case actionTypes.CHECK_CARDS:
      const check = checkAssist(state.cards, action.payload);
      return {
        ...state,
        cards: check,
      };
    case actionTypes.FLIP_ONE_CARD:
      const newDeck1 = flipAssistOne(state.cards, action.payload);
      return {
        ...state,
        cards: newDeck1
        // cards: [
        //   ...state.cards.map(
        //     (e) => (
        //       e.id === action.payload
        //         ? { ...e, cardFace: !e.cardFace }
        //         : e),
        //   ),
        // ],
      };
    case actionTypes.FLIP_TWO_CARD:
      const newDeck2 = flipAssistTwo(state.cards, action.payload);
      return {
        ...state,
        cards: newDeck2
      };
    case actionTypes.FLIP_THREE_CARD:
      const newDeck3 = flipAssistThree(state.cards, action.payload);
      return {
        ...state,
        cards: newDeck3
      };
    case actionTypes.FLIP_ALL_CARD:
      const newDeck = flipAssistAll(state.cards);
      return {
        ...state,
        cards: newDeck
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
