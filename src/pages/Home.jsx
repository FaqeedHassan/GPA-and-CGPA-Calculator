import React from "react";
import GPAForm from "../components/GPAForm";
import CGPAForm from "../components/CGPAForm";
import studentImg from "/assets/student1.png";
import teacherImg from "/assets/teacher3.png";

export default function Home({ mode, setMode }) {
  return (
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

      {/* Welcome Box / Calculator */}
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
  );
}
