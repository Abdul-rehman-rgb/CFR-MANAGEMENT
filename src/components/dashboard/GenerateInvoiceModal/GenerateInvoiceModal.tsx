import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Form");
  const [uploadProgress, setUploadProgress] = useState(0);

  const tabs = ["Form", "Upload"];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 200);
  };

  return (
    <div className="h-[380px] overflow-y-auto rounded-lg p-4 sm:p-6 bg-white">
      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-[11px] sm:text-[12px] md:text-[13px] font-medium capitalize rounded transition-all duration-200 ${
              activeTab === tab
                ? "text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
                : "text-[#8E8E9C] hover:text-[#151D48]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Form" && (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      )}

      {activeTab === "Upload" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload File
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
            onChange={handleFileUpload}
          />
          {uploadProgress > 0 && (
            <div className="mt-4 h-2 w-full bg-gray-200 rounded">
              <div
                className="h-2 bg-indigo-500 rounded"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tabs;
