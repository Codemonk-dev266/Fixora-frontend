import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { fetchSingleJob } from "../services/Jobs.ts";



const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: job,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: () => fetchSingleJob(id!),
    enabled: Boolean(id),
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="px-5 py-20 text-center text-slate-600">
        Loading job details...
      </div>
    );
  }

  if (isError || !job) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <h1 className="text-2xl font-black text-slate-950">
            Job not found
          </h1>

          <p className="mt-3 text-slate-600">
            We couldn't retrieve this job. It may no longer exist.
          </p>

          <button
            onClick={() => navigate("/jobs")}
            className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Back to Jobs
          </button>
        </div>
      </main>
    );
  }

  const handleApply = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", {
        state: { from: `/jobs/${job._id}` },
      });

      return;
    }

    // We'll connect this to the appropriate job action later.
    // For example, a provider may need to accept a requested job.
    navigate("/jobs");
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/jobs")}
          className="mb-8 inline-flex items-center gap-2 font-semibold text-slate-600 transition hover:text-orange-500"
        >
          <FiArrowLeft />
          Back to Jobs
        </button>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="bg-slate-950 px-6 py-10 text-white sm:px-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-black">
              {job.service.charAt(0).toUpperCase()}
            </div>

            <h1 className="mt-6 text-3xl font-black sm:text-4xl">
              {job.service}
            </h1>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <FiMapPin />
                {job.location}
              </span>

              <span className="flex items-center gap-2">
                <FiClock />
                {job.status.replaceAll("_", " ")}
              </span>
            </div>
          </div>

          {/* Job information */}
          <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-[1fr_280px]">
            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                Job Description
              </h2>

              <p className="mt-4 whitespace-pre-line leading-7 text-slate-600">
                {job.description}
              </p>
            </section>

            {/* Price and action */}
            <aside className="h-fit rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold text-slate-500">
                Offered Price
              </p>

              <p className="mt-2 text-3xl font-black text-slate-950">
                ₦{job.price.toLocaleString()}
              </p>

              <div className="my-6 border-t border-slate-200" />

              <p className="flex items-center gap-2 text-sm text-slate-600">
                <FiCheckCircle className="text-green-500" />
                Job details available
              </p>

              <button
                onClick={handleApply}
                className="mt-6 w-full rounded-full bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                {localStorage.getItem("token")
                  ? "View Available Jobs"
                  : "Log in to Continue"}
              </button>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetails;