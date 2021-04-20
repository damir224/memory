import actionTypes from '../actionTypes';
import initialState from '../../helpers/initialState';
import shuffleFunc from '../../helpers/shuffleFunc';
import { flipAssistOne, flipAssistAll } from '../../helpers/flipAssist';

const cardsReducers = (
  state = {
    cards: [],
    game: { id: 0, count: 0, status: false },
    dashboard: [],
  },
  action,
) => {
  switch (action.type) {
    case actionTypes.FLIP_ONE_CARD:
      return {
        ...state,
        cards: flipAssistOne(state.cards, action.payload),
      };
    case actionTypes.FLIP_ALL_CARD:
      return {
        ...state,
        cards: flipAssistAll(state.cards),
      };
    case actionTypes.SWAP_CARDS:
      return {
        ...state,
        cards: shuffleFunc(initialState.cards),
        game: { id: state.game.id + 1, count: 0, status: true },
      };
    case actionTypes.SET_COUNT:
      if (action.payload !== 0) {
        return {
          ...state,
          game: { ...state.game, count: action.payload, status: false },
          dashboard: [
            ...state.dashboard,
            { ...state.game, count: action.payload, status: false },
          ],
        };
      }
      return { ...state };
    default:
      return state;
  }
};

export default cardsReducers;
