import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILeadData } from './types';
import { fetchLead } from './asyncActions';
import { ILeadState } from './types';

const initialState: ILeadState = {
  lead: null,
  isLoading: false,
  error: '',
};

export const leadSlice = createSlice({
  name: 'lead',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLead.fulfilled.type]: (state, action: PayloadAction<ILeadData>) => {
      state.lead = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchLead.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLead.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default leadSlice.reducer;
