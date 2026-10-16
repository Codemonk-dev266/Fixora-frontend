import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAvailableJobs } from "../services/Jobs";
import JobCard from "../components/JobCard";



const AllJobs = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["availableJobs", "all", page, 12],
    queryFn: () => fetchAvailableJobs(page, 12),
    placeholderData: (previousData) => previousData,
  });

  const jobs = data?.jobs ?? [];
  const pagination = data?.pagination;

  const totalPages = pagination
    ? Math.ceil(pagination.totalJobs / pagination.limit)
    : 1;

  if (isLoading) {
    return <p className="p-8 text-center">Loading jobs...</p>;
  }

  if (isError) {
    return (
      <p className="p-8 text-center text-red-500">
        Unable to load jobs. Please try again.
      </p>
    );
  }

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-black text-slate-950">
          All Available Jobs
        </h1>

        {jobs.length === 0 ? (
          <p>No jobs are currently available.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onClick={() => {
                  // Navigate to the selected job details here.
                }}
              />
            ))}
          </div>
        )}

        {/* Pagination controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((current) => current - 1)}
            className="rounded-lg border border-slate-200 px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <span className="text-sm font-semibold text-slate-600">
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((current) => current + 1)}
            className="rounded-lg border border-slate-200 px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllJobs;