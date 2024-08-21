import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carNames: [],   // Array of all available car names
};

export const inventorySlice = createSlice({
  name: 'inventory', 
  initialState,
  reducers: { 
    // Set the car name data
    setCarNames: (state, action) => {
      state.carNames = action.payload
    }, 
  },
});

export const { setCarNames } = inventorySlice.actions;

export default inventorySlice.reducer;
