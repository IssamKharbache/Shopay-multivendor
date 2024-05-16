import BannerInfo from "@/components/frontend/checkout/BannerInfo";
import StepForms from "@/components/frontend/checkout/StepForms";
import Steps from "@/components/frontend/checkout/Steps";

const page = () => {
  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Shipping Details" },
    { number: 3, title: "Payment Method" },
    { number: 4, title: "Order Summary" },
  ];
  return (
    <div className="bg-slate-200 dark:bg-slate-900 min-h-screen px-4 py-5">
      <div className="max-w-3xl my-6 mx-auto ">
        {/*  STEPS */}
        <Steps steps={steps} />
        <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-6">
          {/* BANNER */}
          <BannerInfo />
          {/* FORM */}
          <StepForms />
        </div>
      </div>
    </div>
  );
};

export default page;
