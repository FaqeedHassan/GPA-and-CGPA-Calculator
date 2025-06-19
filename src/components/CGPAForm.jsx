import React, { useState } from 'react';

export default function CGPAForm({ goBack }) {
  const [gpas, setGPAs] = useState(['', '']);
  const [cgpa, setCGPA] = useState(null);

  const addSemester = () => {
    setGPAs([...gpas, '']);
  };

  const updateGPA = (index, value) => {
    const updated = [...gpas];
    updated[index] = value;
    setGPAs(updated);
  };

  const calculateCGPA = () => {
    const values = gpas.map((g) => parseFloat(g)).filter((g) => !isNaN(g));
    const result = values.length > 0 ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2) : '0.00';
    setCGPA(result);
  };

  return (
    <div style={{ color: 'var(--text-color)' }}>
      <h2 className="text-2xl font-bold mb-4">CGPA Calculator</h2>
      {gpas.map((gpa, idx) => (
        <div key={idx} className="mb-4">
          <input
            type="number"
            step="0.01"
            placeholder={`Semester ${idx + 1} GPA`}
            value={gpa}
            onChange={(e) => updateGPA(idx, e.target.value)}
            className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          />
        </div>
      ))}

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={addSemester}
          className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)' }}
        >
          + Add Semester
        </button>
        <button
          onClick={calculateCGPA}
          className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)' }}
        >
          Calculate CGPA
        </button>
        <button
          onClick={goBack}
          className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          style={{ backgroundColor: 'transparent', color: 'var(--text-color)' }}
        >
          ⬅ Back
        </button>
      </div>

      {cgpa && (
        <div className="mt-6 text-lg font-semibold">
          Your CGPA is: <span className="text-yellow-300">{cgpa}</span>
        </div>
      )}
    </div>
  );
}
