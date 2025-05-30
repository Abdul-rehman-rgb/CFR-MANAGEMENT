import React from "react";
import GridShape from "../../components/common/GridShape";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";
import './AuthPageLayout.scss'

export default function AuthLayout({
  children,
  imageSrc,
}: {
  children: React.ReactNode;
  imageSrc?: string;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full lg:w-1/2 lg:grid authBgImage">
          <div className="relative flex items-center justify-center z-1">
            <GridShape />
            {imageSrc && (
              <div className="">
                <img src={imageSrc} alt="auth visual" className="w-full" />
              </div>
            )}
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}

