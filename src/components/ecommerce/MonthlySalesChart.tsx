import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import { useState } from "react";

export default function SalesTrendsChart() {
  const salesData = [40, 65, 70, 80, 56, 55, 40, 60, 75, 70, 65, 60];
  const maxValue = Math.max(...salesData);

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 300,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    stroke: {
      width: 2,
      curve: "straight",
      colors: ["#4A90E2"], // Line color
    },
    markers: {
      size: 6,
      colors: ["#4A90E2"], // Dot color
      strokeColors: "#fff", // White border around dots
      strokeWidth: 2,
      hover: {
        size: 8,
      },
      shape: "circle",
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#666",
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: maxValue * 1.1, // Add padding at top
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val: number) => `${val}%`,
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["rgba(255,255,255,0)"],
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Sales Trends
        </h3>
        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} className="w-40 p-2">
            <DropdownItem onItemClick={() => setIsOpen(false)} className="w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              View More
            </DropdownItem>
            <DropdownItem onItemClick={() => setIsOpen(false)} className="w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <p className="text-3xl font-bold text-gray-800 dark:text-white/90">75.08%</p>
        <span className="text-sm text-green-600 dark:text-green-400">↑ 2% more than year</span>
      </div>

      <div className="mt-4">
        <Chart 
          options={options} 
          series={[{ 
            name: "Sales", 
            data: salesData 
          }]} 
          type="area" // Changed to area for the gradient fill
          height={300} 
        />
      </div>

      <div className="flex justify-center mt-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">This Year</p>
      </div>
    </div>
  );
}