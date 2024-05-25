import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import checkoutSlice from "./slices/checkoutSlice";
import onboardingSellerSlice from "./slices/onboardingSellerSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkout: checkoutSlice,
    onboardingSeller: onboardingSellerSlice,
  },
});
