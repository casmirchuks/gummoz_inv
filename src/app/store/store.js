// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import ballJointReducer from './ballJointSlice';
import inventoryReducder from './inventorySlice';

export const store = configureStore({
  reducer: {
    ballJoint: ballJointReducer,
    inventory: inventoryReducder,
  },
});
