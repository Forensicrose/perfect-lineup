function validateLineup(lineup) {
  let validSalary = true
  let validTeamId = true
  let validGameId = true
  let validPositions = true

  // add up all salaries and if the sum is greater than 45000 than return false
  let salary = lineup.reduce((acc, salaryTotal) => acc + salaryTotal.salary, 0)

  if (salary > 45000) validSalary = false

  // eslint-disable-next-line no-console
  //   console.log(salary)

  let isNumberOfPlayersMoreThan2 = false
  let isNumberOfPlayersMoreThan3 = false

  // create new object and store teamId as the key and the number of players on the team as the value according to below condition. If therea are more than two players then return false
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
  // create new object and store gameId as the key and the number of players for that game as the value according to below condition. If there are more than three players return false

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



  let checkIfExactly3 = ['OF']
  let checkIfExactly1 = ['P', 'C', '1B', '2B', '3B', 'SS']
  let failed = false

  // check to determine if the exact number of players at each position is correct by creating a new object with the position as the keys and the number of players at each position as the value according to the condition below. If more than the number require appears at a given positioin then return false

  let numberOfPlayersByPosition = lineup.reduce((byPositionId, player) => {
    if (byPositionId[player.position] === undefined) {
      byPositionId[player.position] = 1
    } else {
      byPositionId[player.position] += 1
    }

    return byPositionId
  }, {})

  for (const position in numberOfPlayersByPosition) {
    const playerByPosition = numberOfPlayersByPosition[position]

    if (checkIfExactly3.includes(position) && playerByPosition !== 3) {
      failed = true
    } else if (checkIfExactly1.includes(position) && playerByPosition !== 1) {
      failed = true
    }
  }
  if (failed) {
    validPositions = false
  }

  return validSalary && validPositions && validTeamId && validGameId
}

module.exports = validateLineup





