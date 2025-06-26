import GaugeChart from 'react-gauge-chart';

type SystemHealthGaugeChart = {
  overall: number;
  shopify: number;
  amazon: number;
  ebay: number;
  changeText: string;
  changeColor?: string;
};

const SystemHealthGauge = ({
  overall,
  shopify,
  amazon,
  ebay,
  changeText,
  changeColor = "#EB5757",
}: SystemHealthGaugeChart) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md px-8 py-7 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-extrabold text-[#23235F]">System Health</h2>
        <button className="px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 shadow hover:brightness-110 text-base flex items-center gap-2">
          This Year
          <svg width={16} height={16} fill="none" viewBox="0 0 24 24">
            <path d="M8 10l4 4 4-4" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {/* Change Indicator */}
      <div className="flex items-center mt-3 mb-3 text-base">
        <svg width={18} height={18} className="mr-1" fill="none" viewBox="0 0 24 24">
          <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="#EB5757" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-medium" style={{ color: changeColor }}>{changeText}</span>
      </div>
      {/* Gauge Chart */}
      <div className="relative z-0 flex flex-col items-center mt-2">
        <GaugeChart
          id="system-health-gauge"
          nrOfLevels={60}
          arcsLength={[0.25, 0.25, 0.35, 0.15]}
          colors={['#FF5F6D', '#FFD600', '#18C964', '#E4E8EF']}
          percent={overall / 100}
          arcWidth={0.18}
          arcPadding={0.005}
          needleColor="#222"
          textColor="#222"
          hideText={true}
          animate={false}
          style={{ width: "100%", minWidth: 280, maxWidth: 470 }}
        />
        {/* Large % in center */}
        <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-extrabold text-[#18C964] drop-shadow">{overall}%</span>
          <span className="text-[#7b7fc1] font-semibold text-lg md:text-xl mt-1">Overall Health</span>
        </div>
      </div>
      {/* Sub-metrics */}
      <div className="flex justify-between items-end mt-5 px-10">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-extrabold text-[#18C964]">{shopify}%</span>
          <span className="text-[#23235F] font-semibold text-sm mt-1">Shopify</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-extrabold text-[#FFD600]">{amazon}%</span>
          <span className="text-[#23235F] font-semibold text-sm mt-1">Amazon</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-extrabold text-[#EB5757]">{ebay}%</span>
          <span className="text-[#23235F] font-semibold text-sm mt-1">eBay</span>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthGauge;