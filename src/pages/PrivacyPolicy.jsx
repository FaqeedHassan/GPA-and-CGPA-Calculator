import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto pt-8 mt-20 px-6 pb-12 rounded-xl backdrop-blur-md bg-white/10 shadow-md space-y-4 text-base md:text-lg" style={{ color: "var(--text-color)" }}>
      <h1 className="text-4xl font-bold">Privacy Policy</h1>

      <p>This calculator respects your privacy. We do not collect, store, or share any of your data.</p>

      <h2 className="text-2xl font-semibold">What We Collect</h2>
      <p>
        Nothing. All GPA/CGPA calculations happen in your browser. No information is sent or saved to any server.
      </p>

      <h2 className="text-2xl font-semibold">Third-Party Services</h2>
      <p>
        We use Vercel Analytics to track anonymous page visits. No personal data is collected or shared.
      </p>

      <h2 className="text-2xl font-semibold">Changes to Policy</h2>
      <p>
        We may update this policy occasionally. Any changes will be published on this page.
      </p>

      <p className="italic">Last updated: June 27, 2025</p>
    </div>
  );
}
