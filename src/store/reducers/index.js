// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import interactReducer from '../slices/interactSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  interact: interactReducer,
  // Add other reducers here
});

export default rootReducer;
