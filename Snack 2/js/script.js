const footballTeam = [
    { name: "Juventus", point: 0, fault: 0 },
    { name: "Milan", point: 0, fault: 0 },
    { name: "Inter", point: 0, fault: 0 }
]

  console.log(footballTeam);
  
  footballTeam.forEach((team) => {
    team.point = generateRandomNumber(0, 10) 
    team.fault = generateRandomNumber(0, 10)
  })

  const teamAndFault = [];
  footballTeam.forEach(({ name, fault }) => {
    teamAndFault.push({ name, fault });
});

console.log(teamAndFault);

// funzioni
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
  }

