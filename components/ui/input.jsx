import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full bg-gray-50 rounded-sm border-gray-300 text-gray-900 dark:text-gray-300 dark:border-gray-700 dark:bg-transparent py-2.5 pe-10 shadow-sm sm:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
