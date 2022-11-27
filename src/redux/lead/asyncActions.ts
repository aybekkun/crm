import { createAsyncThunk } from '@reduxjs/toolkit';
import { CancelToken } from 'axios';
import { $authHost } from '../../axios';
import { ILead, ILeadData, LeadParamsProps } from './types';


export const fetchLead = createAsyncThunk(
  'lead/fetchLead',
  async (leadParams: LeadParamsProps, thunkAPI) => {
    try {
      const { data } = await $authHost.get<ILeadData>(`leads`, {
        params: leadParams,
        cancelToken: leadParams.cancelToken,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить ожидающих');
    }
  }
);

export const createLead = createAsyncThunk('lead/createLead', async (name: string, thunkAPI) => {
  try {
    const { data } = await $authHost.post<ILead>(`leads`, { name });
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить ожидающих');
  }
});

export const updateLead = createAsyncThunk('lead/updateLead', async (id: number, thunkAPI) => {
  try {
    const { data } = await $authHost.put<ILead>(`leads/${id}`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить ожидающих');
  }
});

export const deleteLead = createAsyncThunk('lead/deleteLead', async (id: number, thunkAPI) => {
  try {
    const { data } = await $authHost.delete<ILead>(`leads/${id}`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить ожидающих');
  }
});
