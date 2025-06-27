import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is the difference between GPA and CGPA?",
    answer:
      "GPA refers to Grade Point Average of a single semester, while CGPA is the cumulative GPA across all semesters.",
  },
  {
    question: "Can I calculate CGPA for any grading system?",
    answer:
      "Yes, you can use this tool for most grading systems. Just ensure you correctly input your grade points and credit hours.",
  },
  {
    question: "Is my GPA data saved or shared?",
    answer:
      "No, your input stays on your device. We don’t store, send, or track any personal data.",
  },
  {
    question: "Can I use this calculator on mobile?",
    answer:
      "Absolutely! This tool is fully responsive and optimized for all screen sizes.",
  },
  {
    question: "How do I reset my GPA/CGPA calculation?",
    answer:
      "Just refresh the page or go back to the main screen to start a new calculation.",
  },
  {
    question: "Can I calculate GPA for different subjects with different credits?",
    answer:
      "Yes! You can enter each subject along with its respective credit hours and grade.",
  },
  {
    question: "Who developed this GPA Calculator?",
    answer:
      "This tool is developed by Faqeed Hassan to help students easily track their academic progress.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, it’s completely free and ad-supported to keep it accessible to all users.",
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mt-20 mx-auto pt-8 px-6 pb-12 rounded-xl backdrop-blur-md bg-white/10 shadow-md space-y-6 text-base md:text-lg" style={{ color: "var(--text-color)" }}>
      <h1 className="text-4xl font-bold">About This GPA & CGPA Calculator</h1>

      <p>
        This tool helps students calculate their GPA (Grade Point Average) and CGPA (Cumulative Grade Point Average) quickly and accurately. It supports credit hour customization, multiple themes, and is fully mobile-responsive.
      </p>

      <p>
        Created by <strong>Faqeed Hassan</strong>, the calculator focuses on simplicity, performance, and academic accuracy.
      </p>

      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Supports GPA & CGPA calculation</li>
        <li>Custom credit hour input</li>
        <li>Responsive design with light/dark themes</li>
        <li>100% free and private</li>
      </ul>

      <h2 className="text-2xl font-semibold pt-8">Frequently Asked Questions (FAQ)</h2>

      <div className="divide-y divide-white/10 border border-white/20 rounded-md">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4 px-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>

            {openIndex === index && (
              <p className="mt-3 text-sm text-white/90">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
