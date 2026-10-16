import type { JobType } from "../types/jobTypes.ts";


export const getRandomJobs = (jobs: JobType[], count = 8): JobType[] => {
  const shuffledJobs = [...jobs];

  // Fisher-Yates shuffle
  for (let i = shuffledJobs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledJobs[i], shuffledJobs[j]] = [
      shuffledJobs[j],
      shuffledJobs[i],
    ];
  }

  return shuffledJobs.slice(0, count);
};