import LoginForm from "@/components/frontend/authentication/LoginForm";
export default function Login() {
  return (
    <section className="bg-slate-200  h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-5 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        ></a>
        <div className="w-full bg-white  rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Login to Shopay
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
