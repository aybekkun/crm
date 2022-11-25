import { createAsyncThunk } from '@reduxjs/toolkit';

import { $authHost } from '../../axios';
import { IMainData, MainParamsProps } from './types';


export const fetchMain = createAsyncThunk(
  'main/fetchMain',
  async (mainParams: MainParamsProps, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IMainData>(`home`, { 
        params: mainParams,
        cancelToken: mainParams.cancelToken,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить ожидающих');
    }
  }
);
