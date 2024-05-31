import StepForms from "@/components/frontend/onboardingSeller/StepForms";
import Steps from "@/components/frontend/onboardingSeller/Steps";

const page = ({ params: { id } }) => {
  const steps = [
    { number: 1, title: "Personal Information" },
    { number: 2, title: "Seller Details" },
    { number: 3, title: "Additional Information" },
    { number: 4, title: "Summary" },
  ];
  return (
    <div className="min-h-screen px-4 py-5">
      <div className="max-w-3xl my-6 mx-auto ">
        {/*  STEPS */}
        <Steps steps={steps} />
        <div className="w-full  p-4 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-6">
          {/* FORM */}
          <StepForms sellerId={id} />
        </div>
      </div>
    </div>
  );
};

export default page;
