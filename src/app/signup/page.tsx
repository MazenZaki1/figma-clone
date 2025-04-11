"use client";
import Link from "next/link";
import { useActionState } from "react";
import { register } from "../actions/auth";

export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(
    register,
    undefined,
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-center text-6xl font-semibold">Sign Up</h1>
              <form action={formAction} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              // type="email"
              name="email"
              className="rounded-md border-gray-300 py-1 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              // required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              // type="password"
              name="password"
              // minLength={8}
              className="rounded-md border-gray-300 py-1 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              // required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Sign Up
          </button>
          <p className="text-center text-xs text-gray-600">
            Already have an account?{" "}
            <Link className="text-blue-600 hover:underline" href="/login">
              Log in
            </Link>
          </p>
          {errorMessage && (
            <p className="text-center text-sm text-red-500">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
