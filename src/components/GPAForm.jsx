import React, { useState } from 'react';

export default function GPAForm({ goBack }) {
  const [subjects, setSubjects] = useState([
    { name: '', credit: '', grade: '' },
    { name: '', credit: '', grade: '' },
  ]);
  const [gpa, setGPA] = useState(null);

  const gradePoints = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D': 1.0,
    'F': 0.0,
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', credit: '', grade: '' }]);
  };

  const updateSubject = (index, key, value) => {
    const updated = [...subjects];
    updated[index][key] = value;
    setSubjects(updated);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(({ credit, grade }) => {
      const gp = gradePoints[grade];
      const cr = parseFloat(credit);
      if (!isNaN(gp) && !isNaN(cr)) {
        totalPoints += gp * cr;
        totalCredits += cr;
      }
    });

    const result = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
    setGPA(result);
  };

  return (
    <div style={{ color: 'var(--text-color)' }}>
      <h2 className="text-2xl font-bold mb-4">GPA Calculator</h2>
      {subjects.map((sub, idx) => (
        <div key={idx} className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Subject Name"
            value={sub.name}
            onChange={(e) => updateSubject(idx, 'name', e.target.value)}
            className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          />
          <select
            value={sub.credit}
            onChange={(e) => updateSubject(idx, 'credit', e.target.value)}
            className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          >
            <option value="">Credit Hours</option>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <select
            value={sub.grade}
            onChange={(e) => updateSubject(idx, 'grade', e.target.value)}
            className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          >
            <option value="">Grade</option>
            {Object.keys(gradePoints).map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      ))}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={addSubject}
          className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)' }}
        >
          + Add Subject
        </button>
        <button
          onClick={calculateGPA}
          className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)' }}
        >
          Calculate GPA
        </button>
        <button
          onClick={goBack}
          className="backdrop-blur-md border border-white/20 font-bold py-2 px-4 rounded-xl shadow hover:brightness-110 transition"
          style={{ backgroundColor: 'transparent', color: 'var(--text-color)' }}
        >
          ⬅ Back
        </button>
      </div>

      {gpa && (
        <div className="mt-6 text-lg font-semibold">
          Your GPA is: <span className="text-yellow-300">{gpa}</span>
        </div>
      )}
    </div>
  );
}
