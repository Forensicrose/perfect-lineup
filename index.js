function validateLineup(lineup) {
  // add up salary and return false if salary is greater than 45000
  let salary = lineup.reduce((acc, salaryTotal) => acc + salaryTotal.salary, 0)

  if (salary > 45000) return false
}



module.exports = validateLineup
