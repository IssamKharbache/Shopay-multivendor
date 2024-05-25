import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  checkoutFormData: {},
};

const onboardingSellerSlice = createSlice({
  name: "onboardingSeller",
  initialState,
  reducers: {
    //functions
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateOnboardingFormData: (state, action) => {
      state.onboardingFormData = {
        ...state.onboardingFormData,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentStep, updateOnboardingFormData } =
  onboardingSellerSlice.actions;

export default onboardingSellerSlice.reducer;
