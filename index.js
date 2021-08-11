function validateLineup(lineup) {
  let validSalary = true
  let validPositions = true
  let validTeamId = true

  // add up all salaries and if the sum is greater than 45000 than return false
  let salary = lineup.reduce((acc, salaryTotal) => acc + salaryTotal.salary, 0)

  if (salary > 45000) validSalary = false

  // eslint-disable-next-line no-console
  //   console.log(salary)

  let isNumberOfPlayersMoreThan2 = false

  let isNumberOfPlayersMoreThan3 = false

  // create new object and store teamId as the key and the number of players on the team as the value according to below condition
  lineup.reduce((numberOfPlayersByTeamId, player) => {
    if (numberOfPlayersByTeamId[player.teamId] === undefined) {
      numberOfPlayersByTeamId[player.teamId] = 1
    } else {
      numberOfPlayersByTeamId[player.teamId] += 1
    }

    if (numberOfPlayersByTeamId[player.teamId] > 2) {
      isNumberOfPlayersMoreThan2 = true
    }
    // eslint-disable-next-line no-console
    // console.log(numberOfPlayersByTeamId)

    return numberOfPlayersByTeamId
  }, {})

  // check the new object to determine if any team exists more than twice
  if (isNumberOfPlayersMoreThan2) {
    validTeamId = false
  }

  return validSalary && validPositions && validTeamId
}

module.exports = validateLineup





