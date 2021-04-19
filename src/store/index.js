// import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import saga from 'redux-saga';
// import { all } from 'redux-saga/effects';

import cardsReducers from './cards/reducers';
// import { getCardsWatcher } from './cards/saga/watchers';

// const sagaMiddleware = saga();

const reducers = combineReducers({
  cardsReducers,
});

// const composeEnhancer = process.env.NODE_ENV === 'production';
// ? applyMiddleware(sagaMiddleware)
// : composeWithDevTools(applyMiddleware(sagaMiddleware));

// export default createStore(reducers, composeEnhancer);
export default createStore(reducers);

// sagaMiddleware.run(function* () {
//   yield all([getCardsWatcher()]);
// });
