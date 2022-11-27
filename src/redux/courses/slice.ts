import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICourses, ICoursesState } from "./types";
import { ICoursesForm } from "./types";
import { fetchCourses } from "./asyncActions";

const initialState: ICoursesState = {
  courses: {
    total: 1,
    data: [],
  },
  form: {
    name: "",
    price: 0,
    duration: 0,
  },
  page: 1,
  isLoading: false,
  error: "",
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setPageCourses(state, action: PayloadAction<number>) {
      console.log(action.payload);
      state.page = action.payload;
    },
    setFormCourses(state, action: PayloadAction<ICoursesForm>) {
      state.form = action.payload;
    },
    setResetFormCourses(state) {
      state.form = {
        name: "",
        price: 0,
        duration: 0,
      };
    },
  },
  extraReducers: {
    [fetchCourses.fulfilled.type]: (state, action: PayloadAction<ICourses>) => {
      state.courses = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchCourses.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCourses.rejected.type]: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setResetFormCourses, setFormCourses, setPageCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
