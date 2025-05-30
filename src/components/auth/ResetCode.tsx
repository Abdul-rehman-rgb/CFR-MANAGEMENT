// import { useState } from "react";
import { Link } from "react-router";
// import Button from "../ui/button/Button";
import "./ResetCode.scss";

export default function ResetCodeForm() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar resetcode-container">
      <div className="flex flex-col justify-center flex-1 w-full mx-auto p-0 px-15">
        <img
          src="/images/logo/logo.svg"
          alt="Logo"
          className="w-60 mb-6 logo mx-auto"
        />
        <div>
          <div className="mb-5  mx-auto">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md text-center">
              Enter Reset Code
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              A verification code has been sent to 86373743545
            </p>
          </div>
          <div>
            <div>
              <label className="text-sm font-medium mb-2">Enter Code</label>
              <div className="flex gap-5 mb-6 verificationDigits">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="code-input"
                  />
                ))}
              </div>
            </div>

            {/* <!-- Button --> */}
            <div>
              <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                Continue
              </button>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 test-center">
              Not received verification code ?
              <Link
                to="/"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                &nbsp;Resend
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
