import { applyMiddleware } from 'redux';
// import { createStore } from 'redux';
import { CombineReducer } from 'store/reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { setLocalStorage } from 'utils/localStorage';
import { configureStore } from '@reduxjs/toolkit';

// export const store = createStore(
//   CombineReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
export const store = configureStore({
  reducer: CombineReducer,
  devTools: composeWithDevTools(applyMiddleware(thunk)),
});

/**
 * store.subscribe - слушатель стора функция которая следит за тем что поподает в стор
 *  setLocalStorage('store', store.getState().favoriteReducer) - назначаем локальный хранилище ('ключ- store', стор
 *  получает через функцию getState из редуктора)
 */
store.subscribe(() => {
  console.log(store.getState().favoriteReducer);
  setLocalStorage('store', store.getState().favoriteReducer);
});
