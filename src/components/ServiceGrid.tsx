import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiMapPin } from "react-icons/fi";


import { getRandomJobs } from "../utils/randomJobs.ts";
import { fetchAvailableJobs } from "../services/Jobs.ts";

const ServiceGrid = () => {
const navigate = useNavigate();

const {
data,
isLoading,
isError,
} = useQuery({
queryKey: ["availableJobs", "home", 8],
queryFn: () =>fetchAvailableJobs(1, 8),
});

const jobs = data?.jobs ?? [];
const randomJobs = getRandomJobs(jobs, 8);

// Redirect unauthenticated users to login
const handleJobClick = (jobId: string) => {
const token = localStorage.getItem("token");


if (!token) {
  navigate("/login", {
    state: {
      from: `/jobs/${jobId}`,
    },
  });

  return;
}

// Authenticated users can view the job details
navigate(`/jobs/${jobId}`);


};

return ( <section
   id="services"
   className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12"
 > <div className="mx-auto max-w-7xl">
{/* Section heading */} <div className="mb-10"> <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
Find your next opportunity </p>


      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        Explore Available Jobs
      </h2>

      <p className="mt-3 max-w-2xl text-slate-600">
        Discover jobs posted by customers and find opportunities that
        match your skills.
      </p>
    </div>

    {/* Loading state */}
    {isLoading && (
      <div className="py-16 text-center">
        <p className="font-medium text-slate-600">
          Loading available jobs...
        </p>
      </div>
    )}

    {/* Error state */}
    {isError && (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
        <p className="font-semibold text-red-600">
          We couldn't load jobs right now.
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Please try again later.
        </p>
      </div>
    )}

    {/* Empty state */}
    {!isLoading && !isError && randomJobs.length === 0 && (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
        <h3 className="text-xl font-bold text-slate-950">
          No jobs available yet
        </h3>

        <p className="mt-2 text-slate-600">
          Check back soon for new opportunities.
        </p>
      </div>
    )}

    {/* Random jobs grid */}
    {!isLoading && !isError && randomJobs.length > 0 && (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {randomJobs.map((job) => (
          <button
            key={job._id}
            type="button"
            onClick={() => handleJobClick(job._id)}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {/* Service icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl font-black text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
              {job.service.charAt(0).toUpperCase()}
            </div>

            {/* Service name */}
            <h3 className="mt-5 text-lg font-bold text-slate-950">
              {job.service}
            </h3>

            {/* Description */}
            <p className="mt-3 line-clamp-3 flex-grow text-sm leading-6 text-slate-600">
              {job.description}
            </p>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <FiMapPin className="shrink-0" />

              <span className="truncate">{job.location}</span>
            </div>

            {/* Price and action */}
            <div className="mt-5 flex w-full items-center justify-between border-t border-slate-100 pt-4">
              <span className="font-extrabold text-slate-950">
                ₦{job.price.toLocaleString()}
              </span>

              <span className="flex items-center gap-1 text-sm font-bold text-orange-500">
                View Job
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </button>
        ))}
      </div>
    )}

    {/* View all jobs button */}
    <div className="mt-12 flex justify-center">
      <button
        type="button"
        onClick={() => navigate("/jobs")}
        className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-orange-500"
      >
        View All Jobs
        <FiArrowRight size={18} />
      </button>
    </div>
  </div>
</section>

);
};

export default ServiceGrid;
