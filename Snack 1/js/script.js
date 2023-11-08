const bicycle= [
  { name: 'Bianchi', weight: 8 },
  { name: 'Atala', weight: 9 },
  { name: 'Olmo', weight: 7 }, 
  { name: 'Casati', weight: 11 },
  { name: 'Colnago', weight: 6 },   
];

// console.log(bicycle);

let bicycleLight = bicycle[0]

// console.log(bicycleLight);

bicycle.forEach(({ name, weight }) => {
  if (weight < bicycleLight.weight) {
    bicycleLight = { name, weight };
  }
});

console.log(`La bici più leggera è la ${bicycleLight.name} `);
