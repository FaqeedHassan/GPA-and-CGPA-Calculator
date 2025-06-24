import React, { useState } from "react";
import GPAForm from "./components/GPAForm";
import CGPAForm from "./components/CGPAForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
import studentImg from "/assets/student1.png";
import teacherImg from "/assets/teacher3.png";
import Adcomponent from "./components/Adcomponent";
import { FaLinkedin, FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [mode, setMode] = useState(null);

  return (
    <div
      className="min-h-screen p-6 transition"
      style={{
        background: "var(--primary-bg)",
        color: "var(--text-color)",
      }}
    >
      <ThemeSwitcher />
      <div className="absolute top-6 left-6 flex items-center space-x-4 z-30">
        <a
          href="https://www.linkedin.com/in/faqeed-hassan-61004a25a"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition hover:scale-110"
          style={{
            color: "var(--text-color)",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
          }}
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:hassanfaqeed12@gmail.com"
          className="p-2 rounded-full transition hover:scale-110"
          style={{
            color: "var(--text-color)",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
          }}
        >
          <FaEnvelope size={22} />
        </a>
        <a
          href="https://www.fiverr.com/s/GzrQR1Z"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition hover:scale-110"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
            color: "var(--text-color)", // still controls dynamic color
          }}
        >
          <svg
            fill="var(--text-color)"
            viewBox="-2.5 -2 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
            <circle cx="14.375" cy="1.875" r="1.875" />
          </svg>
        </a>
      </div>

      {/* Wrap everything in a relative z-10 container */}
      <div className="relative max-w-5xl m-70 mx-auto z-10">
        {/* Characters - only shown on welcome screen */}
        {!mode && (
          <>
            {/* Teacher (Left) */}
            <div className="hidden md:flex hide-on-1560 flex-col items-center absolute -left-32 top-1/2 -translate-y-1/2 animate-fade-in z-20">
              <img
                src={teacherImg}
                alt="Teacher"
                className="w-24 lg:w-32 hover:scale-105 transition duration-300"
              />
              <div
                className="mt-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl text-sm shadow-md text-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  color: "var(--text-color)",
                }}
              >
                Hello! I'm your teacher. Let's calculate!
              </div>
            </div>

            {/* Student (Right) */}
            <div className="hidden md:flex hide-on-1560 flex-col items-center absolute -right-24 top-1/2 -translate-y-1/2 animate-fade-in z-20">
              <img
                src={studentImg}
                alt="Student"
                className="w-24 lg:w-32 hover:scale-105 transition duration-300"
              />
              <div
                className="mt-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl text-sm shadow-md text-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  color: "var(--text-color)",
                }}
              >
                I'm excited to learn my GPA!
              </div>
            </div>
          </>
        )}

        {/* Main Welcome / Calculator Box */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl z-10 relative">
          {!mode && (
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold">
                Welcome to CGPA & GPA Calculator
              </h1>
              <p className="text-lg">Calculate your GPA or CGPA with ease!</p>
              <div className="space-x-4 mt-6">
                <button
                  onClick={() => setMode("gpa")}
                  style={{
                    backgroundColor: "orange",
                    color: "var(--btn-text)",
                  }}
                  className="backdrop-blur-md set-buttons border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
                >
                  GPA Calculator
                </button>
                <button
                  onClick={() => setMode("cgpa")}
                  style={{
                    backgroundColor: "limegreen",
                    color: "var(--btn-text)",
                  }}
                  className="backdrop-blur-md set-buttons border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
                >
                  CGPA Calculator
                </button>
              </div>
            </div>
          )}

          {/* GPA/CGPA Form Rendering */}
          {mode === "gpa" && <GPAForm goBack={() => setMode(null)} />}
          {mode === "cgpa" && <CGPAForm goBack={() => setMode(null)} />}
        </div>
      </div>

      {/* Ad Component at the very bottom */}
      <div className="mt-10 hidden md:block text-center">
        <Adcomponent />
      </div>

      <Analytics />
    </div>
  );
}
