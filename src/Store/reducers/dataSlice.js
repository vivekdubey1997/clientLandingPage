// src/store/reducers/dataSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Create an async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data; // This will be the payload
});

// Create a slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true; // Set loading state
        state.error = null; // Reset any previous error
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false
        state.items = action.payload; // Store the fetched data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false; // Set loading to false
        state.error = action.error.message; // Store the error message
      });
  },
});

// Export the async thunk and the reducer
export { fetchData };
export default dataSlice.reducer;
