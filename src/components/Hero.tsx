import { FiArrowUpRight, FiCheckCircle, FiPlay } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className="overflow-hidden bg-orange-50">
      {" "}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        {/* Hero text */}{" "}
        <div className="relative z-10">
          {" "}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2">
            {" "}
            <span className="h-2 w-2 rounded-full bg-green-500" />{" "}
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
              Your everyday service partner{" "}
            </span>{" "}
          </div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Life gets easier with the right{" "}
            <span className="relative inline-block text-orange-500">
              hands.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 220 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8C55 2 145 2 217 7"
                  stroke="#FDBA74"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            From quick home repairs to everyday services, Fixora connects you
            with people who know how to get things done. Find your help. ``` Get
            your time back.{" "}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore Services
              <FiArrowUpRight size={20} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-orange-400 hover:text-orange-600"
            >
              <FiPlay size={17} />
              How It Works
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-orange-500" size={18} />
              Simple booking
            </span>

            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-orange-500" size={18} />
              Skilled professionals
            </span>
          </div>
        </div>
        {/* Hero visual */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-200/70 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-yellow-200/70 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-3 shadow-2xl shadow-orange-200/60 sm:rounded-[2.5rem] sm:p-4">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85"
              alt="Professional electrician working on a home service"
              className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[480px] sm:rounded-[2rem]"
            />

            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                    Find your expert
                  </p>

                  <h3 className="mt-1 text-lg font-black text-slate-950 sm:text-xl">
                    The right help. Right here.
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <FiArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating availability card */}
          <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8 sm:top-12">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FiCheckCircle size={23} />
            </div>

            <div>
              <p className="text-sm font-black text-slate-950">
                Help is within reach
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Discover available services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
