import actionTypes from '../actionTypes';

export const flipOneCardAC = (id) => ({
  type: actionTypes.FLIP_ONE_CARD,
  payload: id,
});
export const flipTwoCardAC = (id) => ({
  type: actionTypes.FLIP_TWO_CARD,
  payload: id,
});
export const flipThreeCardAC = (id) => ({
  type: actionTypes.FLIP_THREE_CARD,
  payload: id,
});
export const flipAllCardAC = () => ({
  type: actionTypes.FLIP_ALL_CARD,
});
export const swapCardsAC = () => ({
  type: actionTypes.SWAP_CARDS,
});
export const checkCardsAC = (prev, next) => ({
  type: actionTypes.CHECK_CARDS,
  payload: { prev, next },
});
