import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Tomatoe", "Cabbage", "Watermelon", "Brocolli"],
  datasets: [
    {
      label: "Salles",
      data: [10, 20, 50, 20],
      backgroundColor: [
        "rgba(241, 89, 49, 0.8)",
        "rgba(19, 151, 88, 0.8)",
        "rgba(218, 137, 116, 0.8)",
        "rgba(0, 53, 10, 0.8)",
      ],
      borderColor: [
        "rgba(241, 89, 49, 0.8)",
        "rgba(19, 151, 88, 0.8)",
        "rgba(218, 137, 116, 0.8)",
        "rgba(0, 53, 10, 0.8)",
      ],
      borderWidth: 1,
    },
  ],
};

const BestSPChart = () => {
  return (
    <div className="bg-gray-200 dark:bg-slate-700 p-8 rounded-md flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
        Best selling products
      </h2>
      <div className="p-8">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default BestSPChart;
