// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import ballJointReducer from './ballJointSlice';

export const store = configureStore({
  reducer: {
    ballJoint: ballJointReducer,
  },
});
