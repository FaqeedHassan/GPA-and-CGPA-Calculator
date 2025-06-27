import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Adcomponent from "./components/Adcomponent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import { FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [mode, setMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div
      className="min-h-screen p-6 transition"
      style={{
        background: "var(--primary-bg)",
        color: "var(--text-color)",
      }}
    >
      {/* Pages Links + ThemeSwitcher */}
      <div className="absolute top-4 right-4 flex items-center gap-4 z-50">
        {/* Desktop Links */}
        <div
          className="hidden md:flex relative top-5 right-20 gap-4 text-[18px] font-medium"
          style={{ color: "var(--text-color)" }}
        >
          <Link to="/about" className="transition">
            About
          </Link>
          <Link to="/contact" className="transition">
            Contact
          </Link>
          <Link to="/privacy-policy" className="transition">
            Privacy Policy
          </Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          <button
            ref={toggleRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 mt-2 mr-14 rounded-md hover:bg-white/10 transition"
          >
            <FaBars
              className="w-5 h-5"
              style={{ color: "var(--text-color)" }}
            />
          </button>

          {menuOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-15 mt-2 w-30 bg-white/10 backdrop-blur-lg rounded-md shadow border border-white/20 z-50 text-sm"
              style={{ color: "var(--text-color)" }}
            >
              <Link to="/about" className="block px-4 py-2 hover:bg-white/20">
                About
              </Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-white/20">
                Contact
              </Link>
              <Link
                to="/privacy-policy"
                className="block px-4 py-2 hover:bg-white/20"
              >
                Privacy Policy
              </Link>
            </div>
          )}
        </div>

        <ThemeSwitcher />
      </div>

      {/* Top Left: Social + Home Icons */}
      <div className="absolute top-6 left-6 flex items-center space-x-4 z-30">
        {/* Home Icon */}
        <Link
          to="/"
          className="p-2 rounded-full transition hover:scale-110"
          style={{
            color: "var(--text-color)",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
          }}
          title="Home"
        >
          <svg
            fill="var(--text-color)"
            width="21px"
            height="21px"
            viewBox="0 0 495.398 495.398"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                  />
                  <path
                    d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>

        {/* LinkedIn */}
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

        {/* Email */}
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

        {/* Fiverr */}
        <a
          href="https://www.fiverr.com/s/GzrQR1Z"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition hover:scale-110"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
            color: "var(--text-color)",
          }}
        >
          <svg
            fill="var(--text-color)"
            viewBox="-2.5 -2 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path d='M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z'/>
            <circle cx="14.375" cy="1.875" r="1.875" />
          </svg>
        </a>
      </div>

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {/* Ads and Analytics */}
      <div className="mt-10 hidden md:block text-center">
        <Adcomponent />
      </div>

      <Analytics />
    </div>
  );
}
