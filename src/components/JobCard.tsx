import { FiArrowRight, FiMapPin } from "react-icons/fi";
import type { JobType } from "../types/jobTypes";


interface JobCardProps {
  job: JobType;
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
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
          ₦{Number(job.price).toLocaleString("en-NG")}
        </span>

        <span className="flex items-center gap-1 text-sm font-bold text-orange-500">
          View Job
          <FiArrowRight className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
};

export default JobCard;