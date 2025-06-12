import React from 'react'
import Paragragh from '../../../components/ui/Paragrapg'
import HeadingOne from '../../../components/ui/heading/HeadinhOne'
import Icon from "../../../icons/producticon1.svg";

const LogisticCard = () => {
  const progress = 70; // progress in percentage

  return (
    <div className='flex flex-col justify-center bg-white p-4 space-y-2 rounded shadow w-full'>
      <div className='flex flex-row justify-between items-center'>
        <div>
          <Paragragh para='Total Delivery' color='text-[#483415]' />
          <HeadingOne text='10' />
        </div>
        <div>
          <img src={Icon} alt="icon" className="w-10 h-10" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-2">
            <p className="text-xs text-gray-600">{progress}% Delivered</p>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#5D5FEF] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
      </div>
    </div>
  );
};

export default LogisticCard;
