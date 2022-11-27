import { CancelToken } from "axios";
import { IPagination } from "../types";

export interface ICourseData {
  id: number;
  name: string;
  price: number;
  duration: number;
}

export interface ICourses extends IPagination {
  data: ICourseData[];
}

export interface ICoursesForm {
  id?: number;
  name: string;
  price: number;
  duration: number;
}

export interface ICourseProps {
  id?: number;
  name: string;
  price: number;
  duration: number;
}

export interface courseParamsProps {
  page?: number;
  limit?: number;
  cancelToken?: CancelToken;
}
export interface ICoursesState {
  courses: ICourses;
  form: ICoursesForm;
  page: number;
  isLoading: boolean;
  error: string;
}