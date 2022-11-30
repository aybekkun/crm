import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authHost } from '../../axios';
import { ILeadData } from './../lead/types';
import { LessonsParamsProps } from './types';


export const fetchLessons = createAsyncThunk(
  'lessons/fetchLessons',
  async (lessonsParams: LessonsParamsProps, thunkAPI) => {
    try {
      const { data } = await $authHost.get<ILeadData>(`lessons`, {
        params: lessonsParams,
        cancelToken: lessonsParams.cancelToken,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить ожидающих');
    }
  }
);

interface IUpdateParams {
  id: number;
  day: string;
}

export const updateLesson = createAsyncThunk(
  'lessons/updateLesson',
  async (updateParams: IUpdateParams, thunkAPI) => {
    try {
      const { data } = await $authHost.get(`lessons/${updateParams.id}`, {
        params: updateParams.day,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить ожидающих');
    }
  }
);
