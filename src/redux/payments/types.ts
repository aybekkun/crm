import { CancelToken } from 'axios';
import { Dayjs } from 'dayjs';
import { IPagination } from '../types';

export interface IPayments extends IPagination {
  data: IPaymentData[];
  total_sum: number;
}
export interface IPaymentsState {
    payments: IPayments;
    page: number;
    form: IPaymentsForm;
    isLoading: boolean;
    error: string;
  }
export interface IPaymentData {
  id?: number;
  student_name?: string;
  student_id: number;
  group_name?: string;
  group_id: number;
  sum: number;
  date: string | Dayjs;
  type: string;
  comment: string;
}

export interface IPaymentsForm {
  id?: number;
  student_name?: string;
  student_id: number;
  group_name?: string;
  group_id: number;
  sum: number;
  date: string | Dayjs;
  type: string;
  comment: string;
}
export interface FetchPaymentsProps {
    page?: number;
    limit?: number;
    start_date?: string;
    end_date?: string;
    cancelToken?: CancelToken;
  }
  