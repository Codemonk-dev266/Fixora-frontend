import {
  FiTool,
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-white">
      {" "}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        {" "}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}{" "}
          <div className="lg:col-span-2">
            {" "}
            <a href="#home" className="inline-flex items-center gap-3">
              {" "}
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500">
                {" "}
                <FiTool size={23} />{" "}
              </span>
              <span className="text-2xl font-black tracking-tight">
                fixora<span className="text-orange-500">.</span>
              </span>
            </a>
            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Life is easier when you have the right help. Fixora connects
              customers with service providers to make everyday tasks simpler.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="#footer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-orange-500 hover:bg-orange-500"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#footer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-orange-500 hover:bg-orange-500"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#footer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-orange-500 hover:bg-orange-500"
              >
                <FiTwitter size={18} />
              </a>
            </div>
          </div>
          {/* Explore */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest">
              Explore
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li>
                <a href="#home" className="transition hover:text-orange-400">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-orange-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="transition hover:text-orange-400"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/register"
                  className="transition hover:text-orange-400"
                >
                  Become a Member
                </a>
              </li>
            </ul>
          </div>
          {/* Account */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest">
              Your Account
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li>
                <a href="/login" className="transition hover:text-orange-400">
                  Log in
                </a>
              </li>

              <li>
                <a
                  href="/register"
                  className="transition hover:text-orange-400"
                >
                  Create an account
                </a>
              </li>

              <li>
                <a
                  href="/register"
                  className="inline-flex items-center gap-2 font-bold text-orange-400 transition hover:text-orange-300"
                >
                  Get started
                  <FiArrowUpRight size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fixora. All rights reserved.</p>

          <p>Making everyday services easier.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
