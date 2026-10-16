import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX, FiTool } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      {" "}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        {/* Logo */}{" "}
        <a
          href="#home"
          className="flex items-center gap-2.5"
          onClick={closeMenu}
          aria-label="Fixora home"
        >
          {" "}
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
            {" "}
            <FiTool size={23} />{" "}
          </span>
          <span className="text-2xl font-black tracking-tight text-slate-950">
            fixora<span className="text-orange-500">.</span>
          </span>
        </a>
        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            Explore Services
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            How It Works
          </a>

          <a
            href="#footer"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            About Us
          </a>
        </div>
        {/* Desktop authentication buttons */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="/login"
            className="text-sm font-bold text-slate-800 transition hover:text-orange-500"
          >
            Log in
          </a>

          <a
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
          >
            Get Started
            <FiArrowUpRight size={17} />
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </nav>
      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-5 py-6 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <a
              href="#home"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              Explore Services
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              How It Works
            </a>

            <a
              href="#footer"
              onClick={closeMenu}
              className="font-semibold text-slate-700"
            >
              About Us
            </a>

            <hr className="border-slate-200" />

            <a
              href="/login"
              onClick={closeMenu}
              className="font-bold text-slate-800"
            >
              Log in
            </a>

            <a
              href="/register"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-bold text-white"
            >
              Get Started
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
