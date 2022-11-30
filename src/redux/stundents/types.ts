import { IGroupData } from '../groups/types';
import { IPagination } from '../types';
import { IPaymentData } from '../payments/types';
import { Dayjs } from 'dayjs';
import { CancelToken } from 'axios';

export interface IStudents extends IPagination {
  data: IStudentData[];
}

export interface IStudentsState {
    student: IStudentData | null;
    students: IStudents;
    form: IStudentsForm;
    page: number;
    modal: boolean;
    returnModal: boolean;
    addToGroupModal: boolean;
    isLoading: boolean;
    error: string;
  }

export interface IStudentData {
  id: number;
  name: string;
  surname: string;
  phone: string;
  birthday: string;
  address: string;
  password: string;
  status: boolean;
  groups: IGroupData[];
  payments?: IPaymentData[];
  start_date?: string | Dayjs;
  debt: string;
}

export interface IStudentsForm {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  birthday?: string | Dayjs;
  address?: string;
  password?: string;
  group_ids?: number[];
}

export interface SearchStudentProps {
    page?: number | null;
    limit?: number | null;
    name?: string | null;
    phone?: string | null;
    status_id?: string | null;
    time_id?: string | null;
    lead_id?: string | null;
    course_id?: string | null;
    cancelToken?: CancelToken;
  }