export interface ResponseData {
  message: string;
}

export interface LoginRequestModel {
  email: string;
  password: string;
  id: number;
}

interface BaseAuthResponseModel {
  success: boolean;
  type: string;
  token: string;
}
export interface LoginResponseModel extends BaseAuthResponseModel {
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginErrorResponseModel {
  success: boolean;
  message: string;
}
