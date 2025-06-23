import React, { useState } from "react";

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
  const [activeCategory] = useState(0); // Only "Login Issues" active in mock
  const [expanded, setExpanded] = useState(0); // First question expanded by default

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-12 px-2 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#23235F] mb-8">Help Center</h1>
      <div className="flex gap-6 w-full">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-2xl shadow p-6 flex flex-col gap-3">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`flex items-center justify-between px-2 py-2 rounded-lg text-left text-[#23235F] font-medium transition ${
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          ))}
        </aside>
        {/* Main content */}
        <main className="flex-1 bg-white rounded-2xl shadow p-8">
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
                  >
                    ●
                  </span>
                  {qa.question}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expanded === idx && qa.answer && (
                <div className="pl-12 pb-5">{qa.answer}</div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default HelpCenter;