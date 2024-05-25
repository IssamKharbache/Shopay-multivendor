"use client";
import { useSelector } from "react-redux";
import AdditionalInformationForm from "./stepforms/AdditionalInformationForm";
import SummaryForm from "./stepforms/SummaryForm";
import PersonnelInformationForm from "./stepforms/PersonalInformationForm";
import SellerDetailsForm from "./stepforms/SellerDetailsForm";

const StepForms = ({ sellerId }) => {
  const currentStep = useSelector(
    (store) => store.onboardingSeller.currentStep
  );
  const renderFormByStep = (step) => {
    if (step === 1) {
      return <PersonnelInformationForm />;
    } else if (step === 2) {
      return <SellerDetailsForm />;
    } else if (step === 3) {
      return <AdditionalInformationForm />;
    } else if (step === 4) {
      return <SummaryForm sellerId={sellerId} />;
    }
  };
  return <div>{renderFormByStep(currentStep)}</div>;
};

export default StepForms;
