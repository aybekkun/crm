import { IPagination } from "../types";
export interface IWaitState {
    waits: IWait;
    form: IWaitForm;
    idWait: number | undefined;
    page: number;
    isLoading: boolean;
    commentModal: boolean;
    error: string;
  }
export interface IWait extends IPagination {
  data: IWaitData[];
}

export interface IWaitData {
  key: number;
  id?: number;
  name: string;
  surname: string;
  phone: string;
  gender: string;
  time: string;
  course: string;
  lead: string;
  time_id: number;
  course_id: number;
  lead_id: number;
  group_ids?: number[];
  from?: string;
}

export interface IWaitForm {
  id?: number;
  name: string;
  phone: string;
  course_id: number;
  gender: string;
  time_id: number;
  lead_id: number;
}
