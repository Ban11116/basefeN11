export interface User {
  _id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  address: string;
  city?: string;
  country?: string;
  state?: string;
  avatar?: string;
  status: string;
  role: "user" | "admin";
  isEmailConfirmed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type UpdateUserData = Partial<Pick<User, "name" | "email" | "phone" | "status" | "address" | "avatar">>;
