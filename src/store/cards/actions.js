import actionTypes from '../actionTypes';

export const flipOneCardAC = (id) => ({
  type: actionTypes.FLIP_ONE_CARD,
  payload: id,
});
export const flipAllCardAC = () => ({
  type: actionTypes.FLIP_ALL_CARD,
});
export const swapCardsAC = () => ({
  type: actionTypes.SWAP_CARDS,
});
export const setCountAC = (count) => ({
  type: actionTypes.SET_COUNT,
  payload: count,
});
