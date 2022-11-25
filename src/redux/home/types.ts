import { CancelToken } from "axios";

export interface IMainState {
  data: IMainData;
  isLoading: boolean;
  error: string;
}
export interface MainParamsProps {
  cancelToken?: CancelToken;
}

export interface ILeadStatistics {
  lead: string;
  count: number;
}

export interface IMainData {
  waits: number;
  students: number;
  teachers: number;
  courses: number;
  groups: number;
  lead: ILeadStatistics[];
}
