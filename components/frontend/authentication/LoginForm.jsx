"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  async function onSubmit(data) {
    try {
      setLoading(true);

      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (loginData?.error) {
        setLoading(false);
        if (loginData?.status === 401) {
          setWrongCredentials(true);
        } else if (loginData?.status === 405) {
          toast.error("User not found");
          setWrongCredentials(false);
        }
      } else {
        // Sign-in was successful
        toast.success("Login Successfully");
        reset();
        router.push("/");
        setWrongCredentials(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
      <div>
        {wrongCredentials ? (
          <div className="pb-4">
            <Alert color="red" icon={HiInformationCircle}>
              <span className="font-medium text-center">
                Email or Password incorrect !
              </span>
            </Alert>
          </div>
        ) : (
          ""
        )}
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="name@gmail.com"
          className="block w-full rounded-sm border-0 py-3 text-gray-900 dark:text-gray-300 dark:bg-slate-800 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-sm sm:placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
          required=""
        />
        {errors.email && (
          <small className="text-red-500 text-sm ">
            This field is required
          </small>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="block w-full rounded-sm border-0 py-3 text-gray-900 dark:text-gray-300 dark:bg-slate-800 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-sm sm:placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
          required=""
        />
        {errors.password && (
          <small className="text-red-500 text-sm ">
            This field is required
          </small>
        )}
      </div>
      <div className="flex gap-4 items-center">
        {loading ? (
          <button
            disabled
            type="button"
            className="w-full text-white bg-blue-500 opacity-50  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 disabled:cursor-not-allowed  dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Signing you in please wait...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
          >
            Login
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Link href="/forgot-password">
          <p className="font-medium  text-blue-600 hover:underline dark:text-blue-500 ">
            I forgot my password
          </p>
        </Link>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don't have an account ?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
