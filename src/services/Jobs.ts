import { api } from "../api/client.ts";
import type { JobType } from "../types/jobTypes.ts";

export interface JobResponse {
  message: string;
  jobs: JobType[];
  pagination?: {
    limit: number;
    totalJobs: number;
    page: number;
  };
}

export interface SingleJobResponse {
  message: string;
  job: JobType;
}

// get all jobs
export async function fetchAvailableJobs(
  page = 1,
  limit = 12): Promise<JobResponse> {
  const response = await api.get<JobResponse>( `/jobs/available_jobs?page=${page}&limit=${limit}`);

  console.log("Available jobs response:", response.data);

  return response.data;
}

// get job by id
export async function fetchSingleJob(id: string): Promise<JobType> {
  const response = await api.get(`/jobs/available_jobs/${id}`);

  return response.data.job;
}

// get customers job
export async function fetchMyJobs() {
  const response = await api.get("/jobs/my_jobs/");

  return response.data;
}

// updating job status from requested to accepted
export async function acceptJobs() {
  const response = await api.patch("/jobs/:id/update_job_to_accepted");

  return response.data;
}

// updating job status from accepted to in_progress
export async function jobInProgress() {
  const response = await api.patch("/jobs/:id/update_job_to_in_progress");

  return response.data;
}

// updating job status from in_progress to in_review
export async function jobInReview() {
  const response = await api.patch("/jobs/:id/update_job_to_in_review");

  return response.data;
}
// updating job status from in_review to completed
export async function jobCompleted() {
  const response = await api.patch("/jobs/:id/update_job_to_completed");

  return response.data;
}
// updating job status from requested to cancelled
export async function cancelJob() {
  const response = await api.patch("/jobs/:id/update_job_to_cancelled");

  return response.data;
}
