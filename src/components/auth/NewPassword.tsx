import { useState } from "react";
import './NewPassword.scss'
import { Link } from "react-router";

import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";

export default function NewPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

  return (
   <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar signin-container">
    
      <div className="flex flex-col justify-center flex-1 w-full mx-auto p-0 px-15">
         <img src="/images/logo/logo.svg" alt="Logo" className="w-60 mb-6 logo mx-auto" /> 
        <div>
          <div className="mb-5  mx-auto">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md text-center">
              Create a new password 
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
             Create a new password 
            </p>
          </div>
          <div>
           
            <form>
              <div className="space-y-5">
                <div className="grid grid-cols-1 mb-1">
                  


                  

                  <div className='field'>
                  
                    <div>
                  <Label>
                    Password<span className="text-error-500"></span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>    
                  </div>

                </div>

                 <div className='field'>
                  
                    <div>
                  <Label>
                    Confirm Password<span className="text-error-500"></span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Re-enter your password"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>    
                  </div>

                </div>
                  
               
               
                
                </div>
                {/* <!-- Checkbox --> */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    className="w-5 h-5"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400 account">
                    Remember me
                    
                  </p>
                </div>
                {/* <!-- Button --> */}
                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                       Login
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 test-center">
                Don’t have an account?  
                <Link
                  to="/"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                   &nbsp;SignUp 
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
      

  );
}
