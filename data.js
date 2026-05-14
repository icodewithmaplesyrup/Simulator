// data.js
// This file acts as our local database.
// It maps lowercase input names to exact geographic and statistical data.

const WORLD_DATA = {
  'united states': {
    iso: 'USA',
    label: 'United States',
    relId: 148838,
    subdivisions: [
      { relId: 61965, name: 'California', military: 85, population: 39000000, naval: true, landlocked: false },
      { relId: 114690, name: 'Texas', military: 90, population: 30000000, naval: true, landlocked: false },
      { relId: 162050, name: 'Florida', military: 75, population: 22000000, naval: true, landlocked: false },
      { relId: 61320, name: 'New York', military: 70, population: 19000000, naval: true, landlocked: false }
    ]
  },
  'france': {
    iso: 'FRA',
    label: 'France',
    relId: 2202162,
    subdivisions: [
      { relId: 3792876, name: 'Île-de-France', military: 80, population: 12200000, naval: false, landlocked: true },
      { relId: 3792880, name: 'Nouvelle-Aquitaine', military: 60, population: 6000000, naval: true, landlocked: false },
      { relId: 3792878, name: 'Occitanie', military: 65, population: 5900000, naval: true, landlocked: false },
      { relId: 102740, name: 'Brittany', military: 55, population: 3300000, naval: true, landlocked: false }
    ]
  },
  'united kingdom': {
    iso: 'GBR',
    label: 'United Kingdom',
    relId: 62149,
    subdivisions: [
      { relId: 58447, name: 'England', military: 85, population: 56000000, naval: true, landlocked: false },
      { relId: 58446, name: 'Scotland', military: 70, population: 5400000, naval: true, landlocked: false },
      { relId: 58437, name: 'Wales', military: 50, population: 3100000, naval: true, landlocked: false },
      { relId: 156393, name: 'Northern Ireland', military: 40, population: 1900000, naval: true, landlocked: false }
    ]
  }
};

const ALIASES = {
  'usa': 'united states',
  'us': 'united states',
  'america': 'united states',
  'uk': 'united kingdom',
  'britain': 'united kingdom'
};

function getDbData(inputName) {
  const key = inputName.toLowerCase().trim();
  const resolvedKey = ALIASES[key] || key;
  return WORLD_DATA[resolvedKey] || null;
}
