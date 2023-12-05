// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index.js'; // Assuming your reducers are in a 'reducers' folder

const store = configureStore({
  reducer: rootReducer,
  // Other middleware or enhancers can be added here
});

export default store;
