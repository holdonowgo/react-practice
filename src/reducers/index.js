import { combineReducers } from 'redux';
import counterReducer from './counter';

const rootReducer = combineReducers({
  // import reducers and put them here
  counterReducer
})

export default rootReducer;
