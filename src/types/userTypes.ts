// export type UserType = {
//   _id: string;
//   name: string;
//   email: string;
//   password?: string;
//   role: "customer" | "provider";
//   createdAt: string;
//   updatedAt: string;
// };

// export type LoginType = {
//   email: string;
//   password: string;
// };

// export type RegisterType = {
//   name: string;
//   eamil: string;
//   password: string;
//   role: "customer" | "provider";
// };

// export type UserResponseType = {
// _id: string;
// name: string;
// email: string;
// role: "customer" | "provider";
// createdAt: string;
// updatedAt: string;
// };



export type UserRole = "customer" | "provider";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthUser {
  id?: string;
  userId: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AuthResponse {
  message: string;
  user: AuthUser;
  token: string;
}