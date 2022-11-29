import { CancelToken } from "axios";
import { ICourseData } from "../courses/types";
import { IExpenseData } from "../expenses/types";
import { IPagination } from "../types";

export interface ITeachersState {
  teacher: ITeacherOneData | null;
  teachers: ITeachers;
  form: ITeachersForm;
  page: number;
  isLoading: boolean;
  error: string;
}

export interface oneTeacherParamsProps {
  id: string | undefined;
  cancelToken: CancelToken;
}

export interface ITeachers extends IPagination {
  data: ITeacherData[];
}

export interface ITeacherData {
  id: number;
  name: string;
  surname: string;
  phone: string;
  birthday: string;
  address: string;
  courses: ICourseData[];
  percent?: number;
}

export interface ITeachersForm {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  birthday?: string | "";
  address?: string;
  password?: string;
  course_ids?: number[];
  percent?: number;
}

export interface ITeacherOneData extends ITeacherData {
  groups: ITeacherGroups[];
  salaries: IExpenseData[];
}

export interface ITeacherGroups {
  id: string;
  name: string;
}
