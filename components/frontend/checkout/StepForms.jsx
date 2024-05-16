"use client";
import { useSelector } from "react-redux";
import OrderSummaryForm from "./stepforms/OrderSummaryForm";
import PersonnelDetailsForm from "./stepforms/PersonnelDetailsForm";
import ShippingDetailsForm from "./stepforms/ShippingDetailsForm";
import PaymentMethodForm from "./stepforms/PaymentMethodForm";

const StepForms = () => {
  const currentStep = useSelector((store) => store.checkout.currentStep);

  const renderFormByStep = (step) => {
    if (step === 1) {
      return <PersonnelDetailsForm />;
    } else if (step === 2) {
      return <ShippingDetailsForm />;
    } else if (step === 3) {
      return <PaymentMethodForm />;
    } else if (step === 4) {
      return <OrderSummaryForm />;
    }
  };
  return <div>{renderFormByStep(currentStep)}</div>;
};

export default StepForms;
