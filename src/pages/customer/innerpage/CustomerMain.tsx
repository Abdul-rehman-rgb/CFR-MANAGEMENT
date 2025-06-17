import React, { useState } from 'react'
import OrderManagementHeader from '../../../components/common/OrderManagementHeader'
import CustomerCard from '../components/CustomerCard';
import { FiDollarSign, FiDownload, FiFilter } from 'react-icons/fi';
import image from '../../../../public/images/icons/scale-icon.svg'
import HeadingOne from '../../../components/ui/heading/HeadinhOne';
import Paragragh from '../../../components/ui/Paragrapg';
import SearchInput from '../../../components/form/SearchInput';
import Export from '../../../components/ui/button/Export';
import ReportTable from '../components/ReportTable';

const CustomerMain = () => {
    
      const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      });
    
      const handleExport = () => console.log("Exporting data...");
      const handleRefresh = () => console.log("Refreshing data...");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
      {/* Header Section */}
      <div className="col-span-1 md:col-span-4 space-y-6">
          <OrderManagementHeader
            onExport={handleExport}
            onRefresh={handleRefresh}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onAddNewOrder={() => setIsModalOpen(true)}
          />
      </div>
      <div className="col-span-1 md:col-span-4 space-y-6">
        <div className='flex flex-row justify-between gap-2'>
             <CustomerCard
            title="Total Revenue"
            amount="$1,245"
            subtitle="2% more than last year"
            icon={<FiDollarSign className="text-[#22C55E]" size={15} />}
            iconBgColor="bg-[#22C55E]/5"
            iconWrapperClassName="dark:bg-[#27DA68]/5"
            chart={
              <img
                src={image}
                alt="Revenue Chart"
                className="mt-2 h-auto"
              />
            }
          />
            <CustomerCard
            title="Total Revenue"
            amount="$1,245"
            subtitle="2% more than last year"
            icon={<FiDollarSign className="text-[#22C55E]" size={15} />}
            iconBgColor="bg-[#22C55E]/5"
            iconWrapperClassName="dark:bg-[#27DA68]/5"
            chart={
              <img
                src={image}
                alt="Revenue Chart"
                className="mt-2 h-auto"
              />
            }
          />
            <CustomerCard
            title="Total Revenue"
            amount="$1,245"
            subtitle="2% more than last year"
            icon={<FiDollarSign className="text-[#22C55E]" size={15} />}
            iconBgColor="bg-[#22C55E]/5"
            iconWrapperClassName="dark:bg-[#27DA68]/5"
            chart={
              <img
                src={image}
                alt="Revenue Chart"
                className="mt-2 h-auto"
              />
            }
          />
            <CustomerCard
            title="Total Revenue"
            amount="$1,245"
            subtitle="2% more than last year"
            icon={<FiDollarSign className="text-[#22C55E]" size={15} />}
            iconBgColor="bg-[#22C55E]/5"
            iconWrapperClassName="dark:bg-[#27DA68]/5"
            chart={
              <img
                src={image}
                alt="Revenue Chart"
                className="mt-2 h-auto"
              />
            }
          />
            <CustomerCard
            title="Total Revenue"
            amount="$1,245"
            subtitle="2% more than last year"
            icon={<FiDollarSign className="text-[#22C55E]" size={15} />}
            iconBgColor="bg-[#22C55E]/5"
            iconWrapperClassName="dark:bg-[#27DA68]/5"
            chart={
              <img
                src={image}
                alt="Revenue Chart"
                className="mt-2 h-auto"
              />
            }
          />
        </div>
      </div>
        {/* Table and Filters */}
      <div className="col-span-1 md:col-span-4 space-y-6 bg-white p-4 sm:p-6 dark:bg-[#0D0D0D] rounded-xl">
        <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <HeadingOne text="Low Stock Products" />
            <Paragragh para="Real-time data on product and manage products." />
          </div>

          <div className="flex flex-col sm:flex-row max-sm:flex-col sm:items-center gap-3">
            <SearchInput />
            <div className="flex gap-2 justify-start sm:justify-end">
              <Export BtnName="Filter" icon={FiDownload} />
              <Export BtnName="Export" icon={FiFilter} />
            </div>
          </div>
        </div>

        <div>
          <ReportTable BtnText={"Order Details"} BtnTextTwo={"Delivery Note"} />
        </div>
      </div>
      </div>
  )
}

export default CustomerMain