import { CancelToken } from "axios";
import { IPagination } from "../types";


export interface ITime {
  id: number;
  name: string;
}

export interface ITimeData extends IPagination {
  data: ITime[];
}

export interface ITimeState {
  time: ITimeData | null;
  isLoading: boolean;
  error: string;
}

export interface TimeParamsProps {
  page?: number;
  limit?: number;
  cancelToken?: CancelToken;
}

