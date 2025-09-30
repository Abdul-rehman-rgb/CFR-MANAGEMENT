import React from "react";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";
import SearchInput from "../../../components/form/SearchInput";
import VideoArea from "../component/VideoArea";

const Training = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <HeadingOne text="Invoices" />
        </div>
        <div className="flex items-center gap-2 max-sm:flex-col">
          <SearchInput />
        </div>
      </div>
      {/* Table */}
      <div>
        <VideoArea />
      </div>
    </div>
  );
};

export default Training;
