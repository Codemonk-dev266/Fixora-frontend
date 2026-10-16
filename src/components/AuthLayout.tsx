import type { ReactNode } from "react";
import { FiHome, FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  children,
}: AuthLayoutProps) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4 sm:p-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:min-h-[650px] md:grid-cols-2">
        {/* Branding panel */}
        <section className="relative flex flex-col justify-between overflow-hidden bg-orange-500 p-8 text-white sm:p-12">
          <Link
            to="/"
            className="flex w-fit items-center gap-2 text-2xl font-black"
          >
            <FiTool size={30} />
            Fixora
          </Link>

          <div className="relative z-10 py-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
              <FiHome size={34} />
            </div>

            <h1 className="max-w-sm text-4xl font-black leading-tight sm:text-5xl">
              Trusted Hands.
              <br />
              Better Homes.
            </h1>

            <p className="mt-5 max-w-sm text-base leading-7 text-orange-50">
              Connect with skilled professionals for your home
              and everyday service needs.
            </p>
          </div>

          <p className="text-sm text-orange-100">
            © {new Date().getFullYear()} Fixora. All rights reserved.
          </p>

          {/* Decorative shapes */}
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border-[35px] border-white/10" />
          <div className="absolute right-16 top-24 h-24 w-24 rounded-full bg-white/10" />
        </section>

        {/* Form panel */}
        <section className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
                Welcome to Fixora
              </p>

              <h2 className="text-3xl font-black text-slate-950">
                {title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;