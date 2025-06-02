import React from 'react';
import PropTypes from 'prop-types';
import './SalesCharts.scss'; // Optional for styling

const SalesTrendChart = ({
  currentValue,
  comparisonText,
  comparisonPercentage,
  timeRange,
  showLegend = true,
  lineColor = '#4A90E2',
  circleColor = '#4A90E2',
  height = 300,
  width = '100%'
}) => {
  // Sample monthly data - in a real app, this would come from props
  const monthlyData = [40, 65, 70, 80, 56, 55, 40, 60, 75, 70, 65, 60];
  
  // Calculate max value for scaling
  const maxValue = Math.max(...monthlyData);
  
  return (
    <div className="sales-trend-chart line-style" style={{ width, height }}>
      <div className="chart-header">
        <div className="main-value">
          <h2>Sales Trends</h2>
          <div className="value">{currentValue}%</div>
        </div>
        
        <div className="comparison">
          {comparisonPercentage && (
            <span className={`trend ${comparisonPercentage > 0 ? 'up' : 'down'}`}>
              {comparisonPercentage > 0 ? '↑' : '↓'} {Math.abs(comparisonPercentage)}% {comparisonText}
            </span>
          )}
        </div>
      </div>
      
      <div className="monthly-bars">
        <div className="bars-container">
          {monthlyData.map((value, index) => {
            const barHeight = (value / maxValue) * 100;
            
            return (
              <div key={index} className="bar-wrapper">
                <div 
                  className="line-bar"
                  style={{ 
                    height: `${barHeight}%`,
                    backgroundColor: lineColor
                  }}
                >
                  <div 
                    className="top-circle"
                    style={{ backgroundColor: circleColor }}
                  ></div>
                </div>
                <div className="month-label">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="time-range">
        {timeRange}
      </div>
    </div>
  );
};

SalesTrendChart.propTypes = {
  currentValue: PropTypes.number.isRequired,
  comparisonText: PropTypes.string,
  comparisonPercentage: PropTypes.number,
  timeRange: PropTypes.string,
  showLegend: PropTypes.bool,
  lineColor: PropTypes.string,
  circleColor: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

SalesTrendChart.defaultProps = {
  timeRange: 'This Year',
  showLegend: false,
  lineColor: '#4A90E2',
  circleColor: '#4A90E2'
};

export default SalesTrendChart;