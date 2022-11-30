import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILessonsData, ILessonsState } from './types';
import { fetchLessons } from './asyncActions';



const initialState: ILessonsState = {
  lessons: null,
  isLoading: false,
  error: '',
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLessons.fulfilled.type]: (state, action: PayloadAction<ILessonsData[]>) => {
      state.lessons = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchLessons.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLessons.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default lessonsSlice.reducer;
