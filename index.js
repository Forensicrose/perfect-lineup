function validateLineup(lineup) {
  let validSalary = true
  let validPositions = true
  let validTeamId = true
  let validGameId = true

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

  // check the new object to determine if any team contains more than two players 
  if (isNumberOfPlayersMoreThan2) {
    validTeamId = false
  }
  // create new object and store gameId as the key and the number of players for that game as the value according to below condition

  lineup.reduce((numberOfPlayersByGameId, player) => {
    if (numberOfPlayersByGameId[player.gameId] === undefined) {
      numberOfPlayersByGameId[player.gameId] = 1
    } else {
      numberOfPlayersByGameId[player.gameId] += 1
    }

    if (numberOfPlayersByGameId[player.gameId] > 3) {
      isNumberOfPlayersMoreThan3 = true
    }
    // eslint-disable-next-line no-console
    // console.log(numberOfPlayersByGameId)

    return numberOfPlayersByGameId
  }, {})

  // check the new object to determine if any game has more than 3 players
  if (isNumberOfPlayersMoreThan3) {
    validTeamId = false
  }

  return validSalary && validPositions && validTeamId && validGameId
}

module.exports = validateLineup





