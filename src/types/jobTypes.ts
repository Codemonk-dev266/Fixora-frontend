import type { AuthUser } from "./userTypes";



export type JobStatus =
  | "requested"
  | "accepted"
  | "in_progress"
  | "awaiting_confirmation"
  | "completed";

export type JobType = {
  _id: string;
  service: string;
  description: string;
  price: number;
  location: string;
  status: JobStatus;
  customer: string | AuthUser;
  provider: string | AuthUser | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateJobType = {
  service: string;
  description: string;
  price: number;
  location: string;
};
