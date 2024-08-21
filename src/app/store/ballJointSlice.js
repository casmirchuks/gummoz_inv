// store/partSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parts: [],       // Array of all available parts
  filteredParts: [], // Array of parts matching the search input
  selectedPart: null, 

};

export const partSlice = createSlice({
  name: 'ballJoint', 
  initialState,
  reducers: { 
    // Set the part data
    setPart: (state, action) => {
      state.parts = action.payload
    }, 
    filterParts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredParts = state.parts.filter(part =>
        part.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }, 
    selectPart: (state, action) => {
      state.selectedPart = action.payload;
    },
  },
});

export const { setPart, filterParts, selectPart  } = partSlice.actions;

export default partSlice.reducer;
