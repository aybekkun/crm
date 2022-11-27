import { CancelToken } from "axios";
import { IPagination } from "../types";

export interface IRooms {
  id: number;
  name: string;
}

export interface IRoomsData extends IPagination {
  data: IRooms[];
}

export interface IRoomsState {
  rooms: IRoomsData | null;
  isLoading: boolean;
  error: string;
}

export interface roomsParamsProps {
  page?: number;
  limit?: number;
  cancelToken?: CancelToken;
}
