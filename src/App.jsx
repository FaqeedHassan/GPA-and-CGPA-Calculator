import React, { useState } from "react";
import GPAForm from "./components/GPAForm";
import CGPAForm from "./components/CGPAForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
import studentImg from "/assets/student1.png";
import teacherImg from "/assets/teacher3.png";

export default function App() {
  const [mode, setMode] = useState(null);

  return (
    <div
      className="min-h-screen p-6 relative transition"
      style={{
        background: "var(--primary-bg)",
        color: "var(--text-color)",
      }}
    >
      <ThemeSwitcher />

      {/* Floating Characters Positioned Near Edges of Welcome Box */}
      {!mode && (
        <>
          {/* Teacher Image (Left side of welcome box) */}
          <div className="hidden md:flex hide-on-1560 flex-col items-center absolute left-4 top-1/2 transform -translate-y-1/2 animate-fade-in z-10">
            <img
              src={teacherImg}
              alt="Teacher"
              className="w-24 ml-90 lg:w-32 hover:scale-105 transition duration-300"
            />
            <div
              className="mt-2 bg-white/20 ml-30 backdrop-blur-md text-white px-3 py-2 rounded-xl text-sm shadow-md text-center"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                color: "var(--text-color)",
              }}
            >
              Hello! I'm your teacher. Let's calculate!
            </div>
          </div>

          {/* Student Image (Right side of welcome box) */}
          <div className="hidden md:flex hide-on-1560 flex-col items-center absolute right-4 top-1/2 transform -translate-y-1/2 animate-fade-in z-10">
            <img
              src={studentImg}
              alt="Student"
              className="w-24 mr-90 lg:w-32 hover:scale-105 transition duration-300"
            />
            <div
              className="mt-2 mr-70 bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-xl text-sm shadow-md text-center"
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

      {/* Welcome Box */}
      <div className="max-w-5xl m-70 mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl relative z-0">
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

        {mode === "gpa" && <GPAForm goBack={() => setMode(null)} />}
        {mode === "cgpa" && <CGPAForm goBack={() => setMode(null)} />}
      </div>
    </div>
  );
}
