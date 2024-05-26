import Link from "next/link";
import React from "react";

const PricingCards = () => {
  const plans = [
    {
      title: "Free",
      description: "+5% transaction fee, good plan for startups",
      price: "0",
      isRecommended: false,
      features: ["Unlimited Revenue", "Unlimited Products"],
      notIncluded: [
        "All Features",

        "Free Product Marketing",
        "Free consulting",
      ],
      param: "free",
    },
    {
      title: "Silver",
      description:
        "+2% transaction fee, good plan for a seller that got a 500$ revenue or above",
      price: "20",
      isRecommended: true,
      features: ["Unlimited Revenue", "Unlimited Products", "All features"],
      notIncluded: ["Free Product Marketing", "Free consulting"],
      param: "silver",
    },
    {
      title: "Gold",
      description:
        "No transaction fee, good plan for a seller that got a 5000$ revenue or above",
      price: "99",
      isRecommended: false,
      features: [
        "Unlimited Revenue",
        "Unlimited Products",
        "All Features",
        "Free Product Marketing",
        "Free consulting",
      ],

      param: "gold",
    },
  ];
  return (
    <div className="py-12 px-4 mx-auto flex gap-6">
      {plans.map((plan, i) => {
        return (
          <div
            key={i}
            class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4 ">
              <h5 class="text-xl font-medium text-gray-500 dark:text-gray-400">
                {plan.title}
              </h5>
              {plan.isRecommended ? (
                <h1 className="text-xs border border-blue-400 rounded-xl items-center justify-center py-1 px-2">
                  Recommended
                </h1>
              ) : (
                ""
              )}
            </div>

            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">
                {plan.price}
              </span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              {plan.features.map((feature, i) => (
                <li key={i} class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    {feature}
                  </span>
                </li>
              ))}
              {plan.notIncluded
                ? plan.notIncluded.map((notIncluded, i) => (
                    <li key={i} class="flex line-through decoration-gray-500">
                      <svg
                        class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                        {notIncluded}
                      </span>
                    </li>
                  ))
                : ""}
            </ul>
            <Link
              href={`/register-seller?plan=${plan.param}`}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center duration-200"
            >
              Choose plan
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCards;
