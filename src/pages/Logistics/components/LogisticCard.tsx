import React from 'react';
import Paragragh from '../../../components/ui/Paragrapg';
import HeadingOne from '../../../components/ui/heading/HeadinhOne';

const LogisticCard = ({ para, value, progress, Icon, showProgress = true, customText, green }) => {
  return (
    <div className='flex flex-col justify-center bg-white p-4 space-y-2 rounded w-full dark:bg-[#0D0D0D]'>
      <div className='flex flex-row justify-between items-center'>
        <div>
          <Paragragh para={para} color='text-black/40' className='text-[12px] mb-4' />
          <HeadingOne text={value} />
        </div>
        <div>
          <img src={Icon} alt="icon" className="w-10 h-10" />
        </div>
      </div>

      {/* Conditional section */}
      <div className="mt-2">
        {showProgress ? (
          <>
            <p className="text-[8px] text-[#A9A9CD]">{progress}% Delivered</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#5D5FEF] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        ) : (
          <p className="text-[8px] font-regular text-[#A9A9CD]"><span className='text-green-600'>{green}</span>{customText}</p>
        )}
      </div>
    </div>
  );
};

export default LogisticCard;
