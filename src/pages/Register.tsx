import { useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import toast from "react-hot-toast";
import type { UserRole } from "../types/userTypes";
import { registerUser } from "../services/auth";
import AuthLayout from "../components/AuthLayout";



const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<UserRole>("customer");
  const [showPassword, setShowPassword] = useState(false);

  const mutation = useMutation({
    mutationFn: registerUser,

    onSuccess: (data) => {
      toast.success("Account created successfully!");

      // If registration returns a token, log the user in immediately.
      if (data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        const destination = location.state?.from;

        if (typeof destination === "string") {
          navigate(destination, { replace: true });
        } else if (data.user.role === "provider") {
          navigate("/provider/dashboard", { replace: true });
        } else {
          navigate("/customer/dashboard", { replace: true });
        }

        return;
      }

      // If registration does not return a token, go to login.
      navigate("/login", {
        replace: true,
        state: location.state,
      });
    },

    onError: (error: any) => {
      const message =
        error.response?.data?.message ||
        "Unable to create your account. Please try again.";

      toast.error(message);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !password) {
      toast.error("Please complete all required fields.");
      return;
    }

    if (password.length < 8) {
      toast.error("Your password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Your passwords do not match.");
      return;
    }

    mutation.mutate({
      name: name.trim(),
      email: email.trim(),
      password,
      role,
    });
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join Fixora and get started in just a few steps."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Role selection */}
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">
            I want to join as
          </p>

          <div className="grid grid-cols-2 gap-3">
            {(["customer", "provider"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setRole(option)}
                aria-pressed={role === option}
                className={`rounded-xl border px-3 py-3 text-sm font-bold capitalize transition ${
                  role === option
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-slate-200 text-slate-600 hover:border-orange-300"
                }`}
              >
                {option === "customer" ? "Customer" : "Service Provider"}
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Full name
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
            <FiUser className="shrink-0 text-slate-400" />

            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full bg-transparent py-3 text-sm outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="register-email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email address
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
            <FiMail className="shrink-0 text-slate-400" />

            <input
              id="register-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full bg-transparent py-3 text-sm outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
            <FiLock className="shrink-0 text-slate-400" />

            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full bg-transparent py-3 text-sm outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-slate-400 hover:text-slate-700"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div>
          <label
            htmlFor="confirm-password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Confirm password
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
            <FiLock className="shrink-0 text-slate-400" />

            <input
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              className="w-full bg-transparent py-3 text-sm outline-none"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {mutation.isPending ? "Creating account..." : "Register"}
        </button>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            state={location.state}
            className="font-bold text-orange-500 hover:text-orange-600"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;