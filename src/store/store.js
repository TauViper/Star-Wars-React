import { createStore, applyMiddleware } from 'redux';
import { CombineReducer } from 'store/reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(
  CombineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
