import React from 'react'
import HeadingOne from '../../../components/ui/heading/HeadinhOne'
import Paragragh from '../../../components/ui/Paragrapg'
import SearchInput from '../../../components/form/SearchInput'
import Export from '../../../components/ui/button/Export'
import { FiDownload, FiFilter } from 'react-icons/fi'
import InvoiceSentTable from '../../Tables/account/InvoiceSentTable'

const InvoiceReceived = () => {
  return (
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6 dark:bg-[#0D0D0D]">
                <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <HeadingOne text="Invoices" />
                        <Paragragh para="Real-time data on stock levels, location, and status." />
                    </div>
                    <div className="flex items-center gap-2 max-sm:flex-col">
                        <SearchInput />
                        <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
                            <div className="mr-2">
                                <Export
                        BtnName="Export"
                        icon={FiDownload}
                        onClick={() => console.log("Export triggered")}
                      />
                            </div>
                            <Export
                        BtnName="Export"
                        icon={FiFilter}
                        onClick={() => console.log("Export triggered")}
                      />
                        </div>
                    </div>
                </div>
                {/* Table */}
                <div>
                         <InvoiceSentTable />

                </div>
            </div>
  )
}

export default InvoiceReceived