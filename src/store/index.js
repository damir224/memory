import { createStore } from 'redux';

import cardsReducers from './cards/reducers';

export default createStore(cardsReducers);
