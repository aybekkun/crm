import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authHost } from '../../axios';
import { courseParamsProps, ICourseProps, ICourses } from './types';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (courseParams: courseParamsProps | null, thunkAPI) => {
    try {
      const currentPage = courseParams ? `page=${courseParams.page }`:"";
      const { data } = await $authHost.get<ICourses>(`courses?limit=10&${currentPage}`, {
        cancelToken: courseParams?.cancelToken,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as Error);
    }
  }
);

export const createCourse = createAsyncThunk(
  'course/createCourse',
  async ({ name, price, duration }: ICourseProps, thunkAPI) => {
    try {
      const response = await $authHost.post(`courses`, {
        name,
        price,
        duration,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось создать курсов');
    }
  }
);

export const updateCourse = createAsyncThunk(
  'course/updateCourse',
  async ({ id, name, price, duration }: ICourseProps, thunkAPI) => {
    try {
      const response = await $authHost.put(`courses/${id}`, {
        name,
        price,
        duration,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось создать курсов');
    }
  }
);

export const deleteCourse = createAsyncThunk(
  'course/deleteCourse',
  async (id: number, thunkAPI) => {
    try {
      const response = await $authHost.delete(`courses/${id}`);
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось создать курсов');
    }
  }
);
