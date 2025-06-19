export const gradeToPoint = {
  A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0,
};

export const calculateGPA = (subjects) => {
  let totalPoints = 0;
  let totalCredits = 0;
  subjects.forEach(({ credit, grade }) => {
    const g = gradeToPoint[grade.toUpperCase()];
    const c = parseFloat(credit);
    if (!isNaN(g) && !isNaN(c)) {
      totalPoints += g * c;
      totalCredits += c;
    }
  });
  return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
};

export const calculateCGPA = (prevCGPA, prevCredits, gpa, gpaCredits) => {
  const prevTotal = parseFloat(prevCGPA) * parseFloat(prevCredits);
  const newTotal = parseFloat(gpa) * parseFloat(gpaCredits);
  const totalCredits = parseFloat(prevCredits) + parseFloat(gpaCredits);
  return totalCredits ? ((prevTotal + newTotal) / totalCredits).toFixed(2) : "0.00";
};
