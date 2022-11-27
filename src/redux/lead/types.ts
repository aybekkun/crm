import { CancelToken } from "axios";
import { IPagination } from "../types";

export interface ILead {
  id: number;
  name: string;
}

export interface ILeadData extends IPagination {
  data: ILead[];
}

export interface ILeadState {
  lead: ILeadData | null;
  isLoading: boolean;
  error: string;
}

export interface LeadParamsProps {
  page?: number;
  limit?: number;
  cancelToken?: CancelToken;
}