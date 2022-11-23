export interface ILoginState {
  user: ILogin | null;
  token: string | null | undefined;
  isUserLogin: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ILogin {
  id: string;
  name: string;
  surname: string;
  phone: string;
  birthday: string;
  address: string;
  password: string;
  role: string;
  token: string;
  groups?: IGroups[];
}

export interface IGroups {
  id: number;
  name: string;
}

export interface ILoginProps {
  phone: string;
  password: string;
}
