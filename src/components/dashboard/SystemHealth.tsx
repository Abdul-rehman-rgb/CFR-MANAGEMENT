// components/SystemHealthGauge.jsx
import GaugeChart from 'react-gauge-chart';

type SystemHealthGaugeChart = {
  overall: number;
  shopify: number;
  amazon: number;
  color?: string;
  ebay: number;
  subtitle: string;
  changeText: string;
  changeColor?:string;
  data?: { value: number }[];
};

const SystemHealthGauge = ({ overall, shopify, amazon, ebay, changeText, changeColor } : SystemHealthGaugeChart) => {
  return (
    
    // <div className="p-6 rounded-xl bg-white shadow-md max-w-md bg-white h-[450px] rounded-lg p-6 sm:p-6 flex flex-col dark:text-white dark:bg-[#0D0D0D]">
       <div className="w-full p-6 rounded-xl bg-white shadow-md h-[550px] flex flex-col dark:text-white dark:bg-[#0D0D0D]">
 
    
      <div className="flex justify-between items-center mb-4">
          <h2 className="mb-3 text-2xl font-bold">System Health</h2>
        {/* <h2 className="text-2xl font-bold text-slate-800">System Health</h2> */}
        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-sm">
          This Year ▼
        </div>
      </div>

      <div className="flex items-center mb-4 text-sm">
        <span className="text-red-500 text-xl mr-1">⬇</span>
        <span style={{ color: changeColor }}>{changeText}</span>
      </div>

      <GaugeChart
        id="system-health-gauge"
        nrOfLevels={100}
        arcWidth={0.2}
        percent={overall / 100}
        colors={['#FF5F6D', '#FFC371', '#00C49F']}
        arcPadding={0.00}
        needleColor="#000"
        textColor="#4B5563"
      />
      {/* <div className="text-center mt-[-20px] text-3xl font-bold text-green-600">{overall}%</div> */}
      <p className="text-center text-gray-500 text-sm">Overall Health</p>

      <div className="flex justify-between mt-4 text-sm px-8">
        <div className="text-center">
          <div className="font-bold text-green-600 text-2xl">{shopify}%</div>
          <div className="text-gray-500">Shopify</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-yellow-500 text-2xl">{amazon}%</div>
          <div className="text-gray-500">Amazon</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-red-500 text-2xl">{ebay}%</div>
          <div className="text-gray-500">eBay</div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthGauge;
