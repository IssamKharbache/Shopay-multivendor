import { getData } from "@/lib/getData";
import { CiCircleInfo } from "react-icons/ci";

const page = async ({ searchParams }) => {
  const { userId } = searchParams;
  const user = await getData(`users/${userId}`);
  const { email } = user;

  return (
    <div className="max-w-2xl pt-6 mx-auto  min-h-screen">
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200 dark:border-blue-800 pt-4"
        role="alert"
      >
        <div className="flex items-center">
          <CiCircleInfo className="flex-shrink-0 w-12 h-12 me-2" />
          <span className="sr-only">Info</span>
          <h3 className="text-2xl font-medium">
            Email Sent-Verify Your Account
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          <h1>
            {" "}
            Thank you for signing up! We've just sent an email to{" "}
            <span className="font-bold">{email}</span>. To complete the
            registration process and access your account, please follow the
            instructions in the email to verify your email address. Can't find
            the email? Please check your spam or junk folder
          </h1>
          <button className="bg-blue-400 text-black hover:bg-blue-500 py-2 px-4 mt-2 rounded-md ">
            Change Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
