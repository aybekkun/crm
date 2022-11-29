import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteTeacher, fetchOneTeacher, fetchTeachers } from "./asyncActions";
import { ITeacherOneData, ITeachers, ITeachersForm, ITeachersState } from "./types";

const initialState: ITeachersState = {
  teacher: null,
  teachers: {
    total: 0,
    data: [],
  },
  form: {
    name: "",
    surname: "",
    phone: "",
    birthday: "",
    address: "",
    password: "",
    course_ids: [],
    percent: 0,
  },
  page: 1,
  isLoading: false,
  error: "",
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setPageTeachers(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    // setFormTeachers(state, action: PayloadAction<ITeachersForm>) {
    //   state.form = action.payload;
    // },
    // setResetFormTeachers(state) {
    //   state.form = {
    //     name: "",
    //     surname: "",
    //     phone: "",
    //     birthday: "",
    //     address: "",
    //     password: "",
    //     course_ids: [],
    //     percent: 0,
    //   };
    // },
  },
  extraReducers: {
    [fetchTeachers.fulfilled.type]: (state, action: PayloadAction<ITeachers>) => {
      state.teachers = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchTeachers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTeachers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteTeacher.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchOneTeacher.fulfilled.type]: (state, action: PayloadAction<ITeacherOneData>) => {
      state.teacher = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchOneTeacher.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneTeacher.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const {setPageTeachers/* , setFormTeachers,setResetFormTeachers */} = teachersSlice.actions;

export default teachersSlice.reducer;
