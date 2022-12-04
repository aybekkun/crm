import { IPagination } from "../types";

export interface IGroups extends IPagination {
  data: IGroupData[];
}
export interface IGroupsState {
  group: IOneGroupData;
  groups: IGroups;
  form: IGroupsForm;
  currentMonth: number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  page: number;
  isLoading: boolean;
  error: string;
}
export interface IGroupData {
  id: number | undefined;
  name: string;
  course_id: number;
  course_name: string;
  lesson: string;
  teacher_id: number;
  teacher_name: string;
}

export interface IStudentsGroup {
  id: number;
  name: string;
  phone: string;
  lessons: ILessonsGroup[];
}

export interface ILessonsGroup {
  id: number;
  day: string;
  day_name: string;
  check: number;
}

export interface IJournalsGroup {
  student_id: number;
  lesson_id: number;
  attendance: boolean;
}

export interface IOneGroupData {
  group_id: number;
  group_name: string;
  duration: number;
  course_id: number;
  course_name: string;
  price: number;
  room_name: string;
  teacher_id: number;
  teacher_name: string;
  start_lesson: string;
  end_lesson: string;
  start_time: string;
  end_time: string;
  months: number[];
  students: IStudentsGroup[];
}

export interface IGroupsForm {
  id?: number;
  name: string;
  course_id: number;
  teacher_id: number;
}
