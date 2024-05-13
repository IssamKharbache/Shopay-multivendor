import { CiCircleInfo } from "react-icons/ci";

const page = () => {
  return (
    <div className="max-w-2xl pt-6 mx-auto  min-h-screen">
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 pt-4"
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
          Thank you for signing up! We've just sent an email to the address you
          provided. To complete the registration process and access your
          account, please follow the instructions in the email to verify your
          email address. Can't find the email? Please check your spam or junk
          folder
        </div>
      </div>
    </div>
  );
};

export default page;
