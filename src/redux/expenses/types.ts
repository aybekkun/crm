import { CancelToken } from "axios";
import { IPagination } from "../types";

export interface IExpenses extends IPagination {
  data: IExpenseData[];
  total_sum: number;
}

export interface IExpenseData {
  id?: string | undefined;
  name: string | null;
  title: string;
  type: string;
  to_id: number;
  sum: number;
  date: Date | null;
  user_id: string | undefined;
}

export interface IExpensesForm {
  id?: number;
  name: string;
  title: string;
  sum: number;
  date: Date | null;
  user_id: number;
}
export interface IExpensesState {
  expenses: IExpenses;
  form: IExpensesForm;
  page: number;
  isLoading: boolean;
  error: string;
}
export interface FetchExpensesProps {
    page?: number;
    limit?: number;
    start_date?: string;
    end_date?: string;
    cancelToken?: CancelToken;
  }