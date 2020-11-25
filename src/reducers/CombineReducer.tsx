import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CountReducer from './CountReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
  count: CountReducer,
  product: ProductReducer,
  auth: AuthReducer,
});