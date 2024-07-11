export type LoginRequest = {
  account: string;
  password: string;
};

export type UpdatedPasswordRequest = {
  email: string;
  currentPassword: string;
  newPassword: string;
  verifyNewPassword: string;
};

export type UpdateTwoFaRequest = {
  email: string;
};

export type UpdateTwoFaResponse = {
  qrCode: string;
};

export type OtpRequest = {
  email: string;
  otpNumber: string;
};

export type CreateAccountRequest = {
  email: string;
  fullName: string;
  phoneNumber: string;
};

export type UpdateAccountRequest = {
  fullName: string;
  phoneNumber: string;
};


export type UserProfile = {
  email: string;
  firstLogin: boolean;
  jwt: string;
  role: string[];
  username: string;
  userId: string;
  twoFA: boolean;
  passwordToken: string;
};

export type IHttpError = {
  status?: number;
  status_code?: string;
  message: string;
  errors: Record<string, string[]> | string[][] | undefined;
};

export type IHttpSuccess = {
  status?: number;
  message: string;
};
