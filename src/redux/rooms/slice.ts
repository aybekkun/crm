import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRooms } from './asyncActions';
import { IRoomsData, IRoomsState } from './types';

const initialState: IRoomsState = {
  rooms: null,
  isLoading: false,
  error: '',
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRooms.fulfilled.type]: (state, action: PayloadAction<IRoomsData>) => {
      state.rooms = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchRooms.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRooms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default roomsSlice.reducer;
