import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mb-40 mx-auto mt-20 pt-8 px-6 pb-12 rounded-xl backdrop-blur-md bg-white/10 shadow-md space-y-6 text-base md:text-lg" style={{ color: "var(--text-color)" }}>
      <h1 className="text-4xl font-bold">Contact</h1>

      <p>
        If you have suggestions, feedback, or need help, feel free to reach out through any of the following channels:
      </p>

      <div className="space-y-2">
        <p><strong>Email:</strong> <a href="mailto:hassanfaqeed12@gmail.com" className="underline hover:text-blue-400">hassanfaqeed12@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/faqeed-hassan-61004a25a" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Faqeed Hassan-LinkedIn</a></p>
        <p><strong>Fiverr:</strong> <a href="https://www.fiverr.com/s/GzrQR1Z" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400">Hire Me on Fiverr</a></p>
      </div>

      <p><b>I typically respond within 24 hours. Thank you for using the tool!</b></p>
    </div>
  );
}
