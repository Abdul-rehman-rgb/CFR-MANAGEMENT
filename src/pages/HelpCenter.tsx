import React, { useState } from "react";
import HeadingFour from "../components/ui/heading/HeadingFour";
import HeadingOne from "../components/ui/heading/HeadinhOne";
import HeadingThree from "../components/ui/heading/HeadingThree";
import Paragragh from "../components/ui/Paragrapg";

const categories = [
  "Login Issues",
  "Products",
  "Inventory",
  "Order Management",
  "Accounts",
];

const questionsAndAnswers = [
  {
    question: "How do I reset my password?",
    answer: (
      <ul className="list-disc pl-5 text-[#7b7fc1] mt-2 space-y-1">
        <li>Go to Settings &gt; Security.</li>
        <li>Click "Reset Password" and enter your email.</li>
        <li>Follow the instructions in the email to set a new password.</li>
      </ul>
    ),
  },
  {
    question: "How can I update my billing details?",
    answer: null,
  },
  {
    question: "What should I do if my order is delayed?",
    answer: null,
  },
  {
    question: "How do I enable Two-Factor Authentication (2FA)?",
    answer: null,
  },
  {
    question: "How do I generate an invoice for my purchase?",
    answer: null,
  },
  {
    question: "Can I change the default currency in my account?",
    answer: null,
  },
];

const HelpCenter: React.FC = () => {
  const [activeCategory] = useState(0);
  const [expanded, setExpanded] = useState(0);

  return (
    <>
      <HeadingFour text={"Help Center"} />

      <div className="min-h-screen flex flex-col items-center">
        <HeadingOne
          text={"Help Center"}
          fontSize="text-[30px]"
          fontWeight="font-semibold"
          className="mb-5"
        />
        <div className="flex gap-6 w-full">
          <aside className="w-64 bg-white dark:bg-[#0D0D0D] dark:text-white rounded-2xl p-6 flex flex-col gap-3">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`flex items-center justify-between text-[14px] px-2 py-2 rounded-lg text-left text-[#5D5FEF] font-regular transition ${
                  idx === activeCategory
                    ? "bg-[#f4f4ff] text-[#5D5FEF]"
                    : "hover:bg-[#f4f4ff] text-[#7b7fc1]"
                }`}
                disabled={idx !== activeCategory}
              >
                <span>{cat}</span>
                {idx === activeCategory && (
                  <svg
                    className="w-4 h-4 text-[#5D5FEF]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </aside>
          <main className="flex-1 bg-white dark:bg-[#0D0D0D] dark:text-white rounded-2xl p-6">
            {questionsAndAnswers.map((qa, idx) => (
              <div
                key={qa.question}
                className={`border-b last:border-b-0 border-[#f4f4ff]`}
              >
                <button
                  className={`w-full flex items-center justify-between py-5 focus:outline-none ${
                    expanded === idx ? "bg-[#f4f4ff]" : ""
                  }`}
                  onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                >
                  <div className="flex items-center gap-3 text-[#23235F] font-medium text-lg">
                    <span
                      className={`rounded-full w-6 h-6 flex items-center justify-center ${
                        expanded === idx
                          ? "bg-[#5D5FEF] text-white"
                          : "bg-[#f4f4ff] text-[#5D5FEF]"
                      }`}
                    ></span>
                    <HeadingThree
                      weight="font-regular"
                      color="text-black"
                      text={qa.question}
                    />
                  </div>
                  <svg
                    className={`w-6 h-6 text-[#7b7fc1] transform transition-transform duration-200 ${
                      expanded === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expanded === idx && qa.answer && (
                  <div className="pl-12 pb-5">
                    <Paragragh
                      color="text-[#737791]"
                      className="text-[16px]"
                      para={qa.answer}
                    />
                  </div>
                )}
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
