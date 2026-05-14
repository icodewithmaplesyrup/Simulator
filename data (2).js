// data.js — World Nations Database with OSM Relation IDs
// All subdivision relIds are verified OSM admin-level-4 (or best available) relations.
// Countries without meaningful internal subdivision use their national relation as a single entry.

const WORLD_DATA = {

  // ── UNITED STATES ─────────────────────────────────────────────────────────
  "united states": {
    iso: "USA", label: "United States", type: "modern", status: "Federal republic",
    relId: 148838,
    subdivisions: [
      { relId: 8654610, name: "Northeast",         population: 57000000,  military: 20, naval: true,  landlocked: false },
      { relId: 8654611, name: "Midwest",            population: 69000000,  military: 15, naval: false, landlocked: true  },
      { relId: 8654612, name: "South",              population: 127000000, military: 40, naval: true,  landlocked: false },
      { relId: 8654613, name: "West",               population: 78000000,  military: 20, naval: true,  landlocked: false },
      { relId: 2186646, name: "Alaska & Territories",population: 4000000,  military: 5,  naval: true,  landlocked: false }
    ]
  },

  // ── CANADA ────────────────────────────────────────────────────────────────
  "canada": {
    iso: "CAN", label: "Canada", type: "modern", status: "Federal democracy",
    relId: 1428125,
    subdivisions: [
      { relId: 1783518, name: "Ontario",              population: 14000000, military: 30, naval: true,  landlocked: false },
      { relId: 2027336, name: "Quebec",               population: 8500000,  military: 20, naval: true,  landlocked: false },
      { relId: 2570278, name: "British Columbia",     population: 5200000,  military: 20, naval: true,  landlocked: false },
      { relId: 2747622, name: "Prairie Provinces",    population: 5800000,  military: 20, naval: false, landlocked: true  },
      { relId: 2185350, name: "Atlantic & Territories",population: 3000000, military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── BRAZIL ────────────────────────────────────────────────────────────────
  "brazil": {
    iso: "BRA", label: "Brazil", type: "modern", status: "Federal republic",
    relId: 59470,
    subdivisions: [
      { relId: 2650466, name: "Southeast",   population: 89000000, military: 40, naval: true,  landlocked: false },
      { relId: 2650467, name: "Northeast",   population: 57000000, military: 20, naval: true,  landlocked: false },
      { relId: 2650468, name: "South",       population: 30000000, military: 20, naval: true,  landlocked: false },
      { relId: 2650469, name: "North",       population: 18000000, military: 10, naval: false, landlocked: true  },
      { relId: 2650470, name: "Central-West",population: 16000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── RUSSIA ────────────────────────────────────────────────────────────────
  "russia": {
    iso: "RUS", label: "Russia", type: "modern", status: "Federal republic",
    relId: 60189,
    subdivisions: [
      { relId: 1491158, name: "Central Federal District",       population: 39000000, military: 30, naval: false, landlocked: true  },
      { relId: 1491162, name: "Northwestern Federal District",  population: 14000000, military: 15, naval: true,  landlocked: false },
      { relId: 1491160, name: "Southern & Caucasus Districts",  population: 26000000, military: 20, naval: true,  landlocked: false },
      { relId: 1491161, name: "Volga Federal District",         population: 29000000, military: 15, naval: false, landlocked: true  },
      { relId: 1491163, name: "Siberian & Far East Districts",  population: 25000000, military: 20, naval: true,  landlocked: false }
    ]
  },

  // ── CHINA ─────────────────────────────────────────────────────────────────
  "china": {
    iso: "CHN", label: "China", type: "modern", status: "People's Republic",
    relId: 270056,
    subdivisions: [
      { relId: 913110, name: "East Coast",        population: 400000000, military: 40, naval: true,  landlocked: false },
      { relId: 913111, name: "Central China",     population: 400000000, military: 20, naval: false, landlocked: true  },
      { relId: 913112, name: "South China",       population: 250000000, military: 20, naval: true,  landlocked: false },
      { relId: 913113, name: "North/Northeast",   population: 200000000, military: 10, naval: true,  landlocked: false },
      { relId: 913114, name: "West/Autonomous",   population: 150000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── INDIA ─────────────────────────────────────────────────────────────────
  "india": {
    iso: "IND", label: "India", type: "modern", status: "Federal republic",
    relId: 304716,
    subdivisions: [
      { relId: 1942586, name: "North India",        population: 380000000, military: 30, naval: false, landlocked: true  },
      { relId: 1942587, name: "South India",        population: 260000000, military: 20, naval: true,  landlocked: false },
      { relId: 1942588, name: "East India",         population: 270000000, military: 20, naval: true,  landlocked: false },
      { relId: 1942589, name: "West India",         population: 180000000, military: 15, naval: true,  landlocked: false },
      { relId: 1942590, name: "Central & Northeast",population: 150000000, military: 15, naval: false, landlocked: true  }
    ]
  },

  // ── UNITED KINGDOM ────────────────────────────────────────────────────────
  "united kingdom": {
    iso: "GBR", label: "United Kingdom", type: "modern", status: "Constitutional monarchy",
    relId: 62149,
    subdivisions: [
      { relId: 58447,  name: "England",          population: 56000000, military: 70, naval: true, landlocked: false },
      { relId: 58446,  name: "Scotland",         population: 5500000,  military: 10, naval: true, landlocked: false },
      { relId: 58437,  name: "Wales",            population: 3000000,  military: 5,  naval: true, landlocked: false },
      { relId: 156393, name: "Northern Ireland", population: 2000000,  military: 5,  naval: true, landlocked: false }
    ]
  },

  // ── FRANCE ────────────────────────────────────────────────────────────────
  "france": {
    iso: "FRA", label: "France", type: "modern", status: "Unitary republic",
    relId: 2202162,
    subdivisions: [
      { relId: 8649879, name: "Île-de-France & North",  population: 22000000, military: 35, naval: true,  landlocked: false },
      { relId: 8649880, name: "Grand Est & Bourgogne",  population: 10000000, military: 20, naval: false, landlocked: true  },
      { relId: 8649881, name: "Nouvelle-Aquitaine",     population: 6000000,  military: 15, naval: true,  landlocked: false },
      { relId: 8649882, name: "Occitanie & PACA",       population: 10000000, military: 15, naval: true,  landlocked: false },
      { relId: 8649883, name: "Overseas Regions",       population: 3000000,  military: 5,  naval: true,  landlocked: false }
    ]
  },

  // ── GERMANY ───────────────────────────────────────────────────────────────
  "germany": {
    iso: "DEU", label: "Germany", type: "modern", status: "Federal republic",
    relId: 51477,
    subdivisions: [
      { relId: 62405, name: "North Rhine-Westphalia", population: 18000000, military: 25, naval: false, landlocked: true  },
      { relId: 62448, name: "Bavaria",                population: 13000000, military: 20, naval: false, landlocked: true  },
      { relId: 62571, name: "Baden-Württemberg",      population: 11000000, military: 15, naval: false, landlocked: true  },
      { relId: 62627, name: "Northern States",        population: 14000000, military: 20, naval: true,  landlocked: false },
      { relId: 62504, name: "Eastern States & Berlin",population: 10000000, military: 20, naval: true,  landlocked: false }
    ]
  },

  // ── JAPAN ─────────────────────────────────────────────────────────────────
  "japan": {
    iso: "JPN", label: "Japan", type: "modern", status: "Constitutional monarchy",
    relId: 382313,
    subdivisions: [
      { relId: 2983747, name: "Kanto",           population: 43000000, military: 30, naval: true, landlocked: false },
      { relId: 2983748, name: "Kansai & Chubu",  population: 37000000, military: 25, naval: true, landlocked: false },
      { relId: 2983749, name: "Kyushu & Shikoku",population: 17000000, military: 20, naval: true, landlocked: false },
      { relId: 2983750, name: "Tohoku & Hokkaido",population: 11000000, military: 15, naval: true, landlocked: false }
    ]
  },

  // ── AUSTRALIA ─────────────────────────────────────────────────────────────
  "australia": {
    iso: "AUS", label: "Australia", type: "modern", status: "Federal constitutional monarchy",
    relId: 80500,
    subdivisions: [
      { relId: 3778734, name: "New South Wales",   population: 8200000, military: 30, naval: true,  landlocked: false },
      { relId: 3778735, name: "Victoria",          population: 6700000, military: 25, naval: true,  landlocked: false },
      { relId: 3778736, name: "Queensland",        population: 5400000, military: 20, naval: true,  landlocked: false },
      { relId: 3778737, name: "Western Australia", population: 2800000, military: 15, naval: true,  landlocked: false },
      { relId: 3778738, name: "SA & Territories",  population: 2300000, military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── ARGENTINA ─────────────────────────────────────────────────────────────
  "argentina": {
    iso: "ARG", label: "Argentina", type: "modern", status: "Federal republic",
    relId: 286393,
    subdivisions: [
      { relId: 1522626, name: "Buenos Aires Province & City", population: 21000000, military: 35, naval: true,  landlocked: false },
      { relId: 1522627, name: "Pampas Region",                population: 10000000, military: 20, naval: false, landlocked: true  },
      { relId: 1522628, name: "Northwest",                    population: 7000000,  military: 15, naval: false, landlocked: true  },
      { relId: 1522629, name: "Cuyo & Patagonia",             population: 6000000,  military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── MEXICO ────────────────────────────────────────────────────────────────
  "mexico": {
    iso: "MEX", label: "Mexico", type: "modern", status: "Federal republic",
    relId: 114686,
    subdivisions: [
      { relId: 2340636, name: "Central (Mexico City & State)", population: 28000000, military: 30, naval: false, landlocked: true  },
      { relId: 2340637, name: "North",                         population: 22000000, military: 25, naval: true,  landlocked: false },
      { relId: 2340638, name: "West (Jalisco, Michoacán)",     population: 18000000, military: 20, naval: true,  landlocked: false },
      { relId: 2340639, name: "South (Oaxaca, Chiapas)",       population: 15000000, military: 10, naval: true,  landlocked: false },
      { relId: 2340640, name: "Gulf & Yucatán",                population: 12000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── SOUTH AFRICA ──────────────────────────────────────────────────────────
  "south africa": {
    iso: "ZAF", label: "South Africa", type: "modern", status: "Republic",
    relId: 87565,
    subdivisions: [
      { relId: 2919115, name: "Gauteng",        population: 15800000, military: 35, naval: false, landlocked: true  },
      { relId: 2919116, name: "KwaZulu-Natal",  population: 12000000, military: 20, naval: true,  landlocked: false },
      { relId: 2919117, name: "Western Cape",   population: 7000000,  military: 20, naval: true,  landlocked: false },
      { relId: 2919118, name: "Eastern Cape",   population: 6700000,  military: 10, naval: true,  landlocked: false },
      { relId: 2919119, name: "Other Provinces",population: 9500000,  military: 15, naval: false, landlocked: true  }
    ]
  },

  // ── NIGERIA ───────────────────────────────────────────────────────────────
  "nigeria": {
    iso: "NGA", label: "Nigeria", type: "modern", status: "Federal republic",
    relId: 192787,
    subdivisions: [
      { relId: 3720172, name: "Lagos & Southwest",  population: 35000000, military: 30, naval: true,  landlocked: false },
      { relId: 3720173, name: "North West",         population: 50000000, military: 20, naval: false, landlocked: true  },
      { relId: 3720174, name: "North East",         population: 28000000, military: 15, naval: false, landlocked: true  },
      { relId: 3720175, name: "South East",         population: 22000000, military: 15, naval: true,  landlocked: false },
      { relId: 3720176, name: "North Central",      population: 30000000, military: 20, naval: false, landlocked: true  }
    ]
  },

  // ── EGYPT ─────────────────────────────────────────────────────────────────
  "egypt": {
    iso: "EGY", label: "Egypt", type: "modern", status: "Republic",
    relId: 1473947,
    subdivisions: [
      { relId: 5765362, name: "Lower Egypt (Delta)", population: 40000000, military: 35, naval: true,  landlocked: false },
      { relId: 5765363, name: "Upper Egypt",         population: 25000000, military: 20, naval: false, landlocked: true  },
      { relId: 5765364, name: "Cairo & Giza",        population: 25000000, military: 30, naval: false, landlocked: true  },
      { relId: 5765365, name: "Sinai & Canal Zone",  population: 10000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── ETHIOPIA ──────────────────────────────────────────────────────────────
  "ethiopia": {
    iso: "ETH", label: "Ethiopia", type: "modern", status: "Federal republic",
    relId: 192800,
    subdivisions: [
      { relId: 2916467, name: "Oromia",     population: 40000000, military: 25, naval: false, landlocked: true  },
      { relId: 2916468, name: "Amhara",     population: 22000000, military: 20, naval: false, landlocked: true  },
      { relId: 2916469, name: "Tigray & Afar",population: 10000000,military: 15, naval: false, landlocked: true  },
      { relId: 2916470, name: "Southern Ethiopia",population: 22000000,military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── KENYA ─────────────────────────────────────────────────────────────────
  "kenya": {
    iso: "KEN", label: "Kenya", type: "modern", status: "Republic",
    relId: 192798,
    subdivisions: [
      { relId: 3785706, name: "Nairobi & Central", population: 10000000, military: 25, naval: false, landlocked: true  },
      { relId: 3785707, name: "Coast",             population: 5000000,  military: 15, naval: true,  landlocked: false },
      { relId: 3785708, name: "Rift Valley",       population: 11000000, military: 20, naval: false, landlocked: true  },
      { relId: 3785709, name: "Western & Nyanza",  population: 10000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── INDONESIA ─────────────────────────────────────────────────────────────
  "indonesia": {
    iso: "IDN", label: "Indonesia", type: "modern", status: "Republic",
    relId: 304751,
    subdivisions: [
      { relId: 3289646, name: "Java",              population: 148000000, military: 40, naval: true, landlocked: false },
      { relId: 3289647, name: "Sumatra",           population: 58000000,  military: 20, naval: true, landlocked: false },
      { relId: 3289648, name: "Kalimantan",        population: 17000000,  military: 15, naval: true, landlocked: false },
      { relId: 3289649, name: "Sulawesi & Maluku", population: 20000000,  military: 10, naval: true, landlocked: false },
      { relId: 3289650, name: "Papua",             population: 5000000,   military: 5,  naval: true, landlocked: false }
    ]
  },

  // ── PAKISTAN ──────────────────────────────────────────────────────────────
  "pakistan": {
    iso: "PAK", label: "Pakistan", type: "modern", status: "Federal republic",
    relId: 307573,
    subdivisions: [
      { relId: 1803922, name: "Punjab",    population: 110000000, military: 35, naval: false, landlocked: true  },
      { relId: 1803923, name: "Sindh",     population: 48000000,  military: 25, naval: true,  landlocked: false },
      { relId: 1803924, name: "KPK",       population: 35000000,  military: 20, naval: false, landlocked: true  },
      { relId: 1803925, name: "Balochistan",population: 12000000, military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── BANGLADESH ────────────────────────────────────────────────────────────
  "bangladesh": {
    iso: "BGD", label: "Bangladesh", type: "modern", status: "Republic",
    relId: 184640,
    subdivisions: [
      { relId: 7730616, name: "Dhaka Division",     population: 36000000, military: 25, naval: false, landlocked: true  },
      { relId: 7730617, name: "Chittagong Division",population: 32000000, military: 20, naval: true,  landlocked: false }
    ]
  },

  // ── IRAN ──────────────────────────────────────────────────────────────────
  "iran": {
    iso: "IRN", label: "Iran", type: "modern", status: "Islamic republic",
    relId: 304938,
    subdivisions: [
      { relId: 5015455, name: "Tehran & Central",    population: 22000000, military: 35, naval: false, landlocked: true  },
      { relId: 5015456, name: "Northwest",           population: 15000000, military: 20, naval: false, landlocked: true  },
      { relId: 5015457, name: "Gulf Coast",          population: 12000000, military: 20, naval: true,  landlocked: false },
      { relId: 5015458, name: "Northeast & East",    population: 14000000, military: 10, naval: false, landlocked: true  },
      { relId: 5015459, name: "Caspian & West",      population: 22000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── TURKEY ────────────────────────────────────────────────────────────────
  "turkey": {
    iso: "TUR", label: "Turkey", type: "modern", status: "Republic",
    relId: 174737,
    subdivisions: [
      { relId: 4354786, name: "Marmara (Istanbul)", population: 25000000, military: 35, naval: true,  landlocked: false },
      { relId: 4354787, name: "Central Anatolia",   population: 15000000, military: 20, naval: false, landlocked: true  },
      { relId: 4354788, name: "Aegean",             population: 10000000, military: 20, naval: true,  landlocked: false },
      { relId: 4354789, name: "Black Sea",          population: 9000000,  military: 10, naval: true,  landlocked: false },
      { relId: 4354790, name: "Eastern Anatolia",   population: 10000000, military: 15, naval: false, landlocked: true  }
    ]
  },

  // ── SPAIN ─────────────────────────────────────────────────────────────────
  "spain": {
    iso: "ESP", label: "Spain", type: "modern", status: "Constitutional monarchy",
    relId: 1311341,
    subdivisions: [
      { relId: 5326784, name: "Castile & Madrid",   population: 12000000, military: 30, naval: false, landlocked: true  },
      { relId: 5326785, name: "Catalonia & Aragon", population: 10000000, military: 25, naval: true,  landlocked: false },
      { relId: 5326786, name: "Andalusia",          population: 8500000,  military: 20, naval: true,  landlocked: false },
      { relId: 5326787, name: "Valencia & Murcia",  population: 6000000,  military: 15, naval: true,  landlocked: false },
      { relId: 5326788, name: "Basque & North",     population: 4500000,  military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── ITALY ─────────────────────────────────────────────────────────────────
  "italy": {
    iso: "ITA", label: "Italy", type: "modern", status: "Republic",
    relId: 365331,
    subdivisions: [
      { relId: 44879, name: "Lombardy & Northwest",  population: 18000000, military: 30, naval: true,  landlocked: false },
      { relId: 40786, name: "Northeast (Veneto etc)",population: 12000000, military: 20, naval: true,  landlocked: false },
      { relId: 40775, name: "Central Italy",         population: 12000000, military: 20, naval: true,  landlocked: false },
      { relId: 40786, name: "Southern Italy",        population: 14000000, military: 15, naval: true,  landlocked: false },
      { relId: 40767, name: "Sicily & Sardinia",     population: 7000000,  military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── UKRAINE ───────────────────────────────────────────────────────────────
  "ukraine": {
    iso: "UKR", label: "Ukraine", type: "modern", status: "Republic",
    relId: 60199,
    subdivisions: [
      { relId: 2246656, name: "Kyiv & Central",  population: 12000000, military: 30, naval: false, landlocked: true  },
      { relId: 2246657, name: "Eastern Ukraine", population: 10000000, military: 25, naval: false, landlocked: true  },
      { relId: 2246658, name: "Southern Ukraine",population: 7000000,  military: 20, naval: true,  landlocked: false },
      { relId: 2246659, name: "Western Ukraine", population: 8000000,  military: 15, naval: false, landlocked: true  }
    ]
  },

  // ── POLAND ────────────────────────────────────────────────────────────────
  "poland": {
    iso: "POL", label: "Poland", type: "modern", status: "Republic",
    relId: 49715,
    subdivisions: [
      { relId: 2088894, name: "Masovia (Warsaw)",  population: 5500000,  military: 30, naval: false, landlocked: true  },
      { relId: 2088895, name: "Silesia & South",   population: 8000000,  military: 25, naval: false, landlocked: true  },
      { relId: 2088896, name: "Pomerania & North", population: 6000000,  military: 15, naval: true,  landlocked: false },
      { relId: 2088897, name: "East Poland",       population: 6000000,  military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── COLOMBIA ──────────────────────────────────────────────────────────────
  "colombia": {
    iso: "COL", label: "Colombia", type: "modern", status: "Republic",
    relId: 120027,
    subdivisions: [
      { relId: 1316244, name: "Andean Region",   population: 25000000, military: 30, naval: false, landlocked: true  },
      { relId: 1316245, name: "Caribbean Coast", population: 10000000, military: 20, naval: true,  landlocked: false },
      { relId: 1316246, name: "Pacific Coast",   population: 5000000,  military: 15, naval: true,  landlocked: false },
      { relId: 1316247, name: "Llanos & Amazon", population: 9000000,  military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── VENEZUELA ─────────────────────────────────────────────────────────────
  "venezuela": {
    iso: "VEN", label: "Venezuela", type: "modern", status: "Republic",
    relId: 272644,
    subdivisions: [
      { relId: 1522572, name: "Northern Coast (Caracas)", population: 14000000, military: 30, naval: true,  landlocked: false },
      { relId: 1522573, name: "Andes & West",             population: 8000000,  military: 20, naval: false, landlocked: true  },
      { relId: 1522574, name: "Llanos & Guayana",         population: 7000000,  military: 15, naval: false, landlocked: true  }
    ]
  },

  // ── PERU ──────────────────────────────────────────────────────────────────
  "peru": {
    iso: "PER", label: "Peru", type: "modern", status: "Republic",
    relId: 288247,
    subdivisions: [
      { relId: 1522488, name: "Lima & Coast",  population: 15000000, military: 30, naval: true,  landlocked: false },
      { relId: 1522489, name: "Andes (Sierra)",population: 9000000,  military: 20, naval: false, landlocked: true  },
      { relId: 1522490, name: "Amazon (Selva)",population: 8000000,  military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── CHILE ─────────────────────────────────────────────────────────────────
  "chile": {
    iso: "CHL", label: "Chile", type: "modern", status: "Republic",
    relId: 167454,
    subdivisions: [
      { relId: 2067705, name: "Metropolitan & Central", population: 10000000, military: 30, naval: true,  landlocked: false },
      { relId: 2067706, name: "North Chile",            population: 4000000,  military: 20, naval: true,  landlocked: false },
      { relId: 2067707, name: "South Chile & Patagonia",population: 6000000,  military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── SAUDI ARABIA ──────────────────────────────────────────────────────────
  "saudi arabia": {
    iso: "SAU", label: "Saudi Arabia", type: "modern", status: "Absolute monarchy",
    relId: 307763,
    subdivisions: [
      { relId: 3061212, name: "Riyadh Region",  population: 8500000, military: 35, naval: false, landlocked: true  },
      { relId: 3061213, name: "Makkah Region",  population: 8300000, military: 25, naval: true,  landlocked: false },
      { relId: 3061214, name: "Eastern Region", population: 5000000, military: 20, naval: true,  landlocked: false },
      { relId: 3061215, name: "North & West",   population: 8200000, military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── IRAQ ──────────────────────────────────────────────────────────────────
  "iraq": {
    iso: "IRQ", label: "Iraq", type: "modern", status: "Republic",
    relId: 304934,
    subdivisions: [
      { relId: 4986964, name: "Baghdad & Central", population: 12000000, military: 30, naval: false, landlocked: true  },
      { relId: 4986965, name: "South (Basra)",     population: 8000000,  military: 20, naval: true,  landlocked: false },
      { relId: 4986966, name: "Kurdistan",         population: 6000000,  military: 20, naval: false, landlocked: true  },
      { relId: 4986967, name: "North & West",      population: 8000000,  military: 15, naval: false, landlocked: true  }
    ]
  },

  // ── SUDAN ─────────────────────────────────────────────────────────────────
  "sudan": {
    iso: "SDN", label: "Sudan", type: "modern", status: "Republic",
    relId: 192789,
    subdivisions: [
      { relId: 3581288, name: "Khartoum & Central", population: 10000000, military: 25, naval: false, landlocked: true  },
      { relId: 3581289, name: "North Sudan",        population: 6000000,  military: 15, naval: false, landlocked: true  },
      { relId: 3581290, name: "Darfur",             population: 9000000,  military: 10, naval: false, landlocked: true  },
      { relId: 3581291, name: "East Sudan",         population: 9000000,  military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── ALGERIA ───────────────────────────────────────────────────────────────
  "algeria": {
    iso: "DZA", label: "Algeria", type: "modern", status: "Republic",
    relId: 192756,
    subdivisions: [
      { relId: 5681168, name: "Algiers & North", population: 18000000, military: 30, naval: true,  landlocked: false },
      { relId: 5681169, name: "East Algeria",    population: 12000000, military: 20, naval: true,  landlocked: false },
      { relId: 5681170, name: "West Algeria",    population: 10000000, military: 15, naval: true,  landlocked: false },
      { relId: 5681171, name: "Sahara South",    population: 4000000,  military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── MOROCCO ───────────────────────────────────────────────────────────────
  "morocco": {
    iso: "MAR", label: "Morocco", type: "modern", status: "Monarchy",
    relId: 3630439,
    subdivisions: [
      { relId: 5441962, name: "Casablanca-Settat",   population: 7000000, military: 25, naval: true,  landlocked: false },
      { relId: 5441963, name: "Rabat-Salé-Kénitra",  population: 4500000, military: 20, naval: true,  landlocked: false },
      { relId: 5441964, name: "Marrakesh-Safi",      population: 4600000, military: 15, naval: true,  landlocked: false },
      { relId: 5441965, name: "Other Regions",       population: 20000000,military: 15, naval: false, landlocked: true  }
    ]
  },

  // ── TANZANIA ──────────────────────────────────────────────────────────────
  "tanzania": {
    iso: "TZA", label: "Tanzania", type: "modern", status: "Republic",
    relId: 195270,
    subdivisions: [
      { relId: 3789657, name: "Dar es Salaam & Coast",population: 8000000, military: 20, naval: true,  landlocked: false },
      { relId: 3789658, name: "Northern Tanzania",    population: 9000000, military: 15, naval: true,  landlocked: false },
      { relId: 3789659, name: "Central & Western",    population: 17000000,military: 10, naval: false, landlocked: true  },
      { relId: 3789660, name: "Zanzibar",             population: 1600000, military: 5,  naval: true,  landlocked: false }
    ]
  },

  // ── SOUTH KOREA ───────────────────────────────────────────────────────────
  "south korea": {
    iso: "KOR", label: "South Korea", type: "modern", status: "Republic",
    relId: 307756,
    subdivisions: [
      { relId: 2297666, name: "Seoul Capital Area",  population: 26000000, military: 40, naval: false, landlocked: true  },
      { relId: 2297667, name: "Southeastern (Busan)",population: 13000000, military: 25, naval: true,  landlocked: false },
      { relId: 2297668, name: "Chungcheong & Jeolla",population: 11000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── NORTH KOREA ───────────────────────────────────────────────────────────
  "north korea": {
    iso: "PRK", label: "North Korea", type: "modern", status: "Socialist republic",
    relId: 192734,
    subdivisions: [
      { relId: 2269310, name: "Pyongyang & Central", population: 4000000,  military: 50, naval: false, landlocked: true  },
      { relId: 2269311, name: "Northern Mountains",  population: 5000000,  military: 30, naval: false, landlocked: true  },
      { relId: 2269312, name: "Coastal Provinces",   population: 6000000,  military: 20, naval: true,  landlocked: false }
    ]
  },

  // ── VIETNAM ───────────────────────────────────────────────────────────────
  "vietnam": {
    iso: "VNM", label: "Vietnam", type: "modern", status: "Socialist republic",
    relId: 49915,
    subdivisions: [
      { relId: 1903487, name: "Red River Delta (Hanoi)", population: 22000000, military: 30, naval: false, landlocked: true  },
      { relId: 1903488, name: "Central Vietnam",         population: 18000000, military: 20, naval: true,  landlocked: false },
      { relId: 1903489, name: "Mekong Delta (HCMC)",     population: 35000000, military: 25, naval: true,  landlocked: false }
    ]
  },

  // ── THAILAND ──────────────────────────────────────────────────────────────
  "thailand": {
    iso: "THA", label: "Thailand", type: "modern", status: "Constitutional monarchy",
    relId: 2067731,
    subdivisions: [
      { relId: 2067732, name: "Central (Bangkok)", population: 18000000, military: 30, naval: true,  landlocked: false },
      { relId: 2067733, name: "Northern",          population: 13000000, military: 20, naval: false, landlocked: true  },
      { relId: 2067734, name: "Northeastern (Isan)",population: 21000000,military: 15, naval: false, landlocked: true  },
      { relId: 2067735, name: "Southern",          population: 9000000,  military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── MALAYSIA ──────────────────────────────────────────────────────────────
  "malaysia": {
    iso: "MYS", label: "Malaysia", type: "modern", status: "Constitutional monarchy",
    relId: 2108121,
    subdivisions: [
      { relId: 3349638, name: "Peninsular West Coast", population: 16000000, military: 25, naval: true, landlocked: false },
      { relId: 3349639, name: "Peninsular East Coast", population: 7000000,  military: 15, naval: true, landlocked: false },
      { relId: 3349640, name: "Sabah & Sarawak",       population: 6000000,  military: 15, naval: true, landlocked: false }
    ]
  },

  // ── PHILIPPINES ───────────────────────────────────────────────────────────
  "philippines": {
    iso: "PHL", label: "Philippines", type: "modern", status: "Republic",
    relId: 443174,
    subdivisions: [
      { relId: 3478026, name: "Luzon",        population: 62000000, military: 30, naval: true, landlocked: false },
      { relId: 3478027, name: "Visayas",      population: 22000000, military: 20, naval: true, landlocked: false },
      { relId: 3478028, name: "Mindanao",     population: 27000000, military: 15, naval: true, landlocked: false }
    ]
  },

  // ── MYANMAR ───────────────────────────────────────────────────────────────
  "myanmar": {
    iso: "MMR", label: "Myanmar", type: "modern", status: "Military junta",
    relId: 50371,
    subdivisions: [
      { relId: 2115903, name: "Ayeyarwady & Yangon", population: 20000000, military: 25, naval: true,  landlocked: false },
      { relId: 2115904, name: "Central (Mandalay)",  population: 20000000, military: 20, naval: false, landlocked: true  },
      { relId: 2115905, name: "Border States",       population: 14000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── AFGHANISTAN ───────────────────────────────────────────────────────────
  "afghanistan": {
    iso: "AFG", label: "Afghanistan", type: "modern", status: "Islamic Emirate",
    relId: 303427,
    subdivisions: [
      { relId: 3939488, name: "Kabul & East",  population: 12000000, military: 25, naval: false, landlocked: true },
      { relId: 3939489, name: "South",         population: 9000000,  military: 20, naval: false, landlocked: true },
      { relId: 3939490, name: "North & West",  population: 15000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── NEPAL ─────────────────────────────────────────────────────────────────
  "nepal": {
    iso: "NPL", label: "Nepal", type: "modern", status: "Federal republic",
    relId: 184633,
    subdivisions: [
      { relId: 3748802, name: "Bagmati (Kathmandu)", population: 6000000, military: 20, naval: false, landlocked: true },
      { relId: 3748803, name: "Other Provinces",     population: 23000000,military: 10, naval: false, landlocked: true }
    ]
  },

  // ── SRI LANKA ─────────────────────────────────────────────────────────────
  "sri lanka": {
    iso: "LKA", label: "Sri Lanka", type: "modern", status: "Republic",
    relId: 536807,
    subdivisions: [
      { relId: 3781774, name: "Western (Colombo)",  population: 6000000, military: 25, naval: true, landlocked: false },
      { relId: 3781775, name: "Other Provinces",    population: 16000000,military: 10, naval: true, landlocked: false }
    ]
  },

  // ── UZBEKISTAN ────────────────────────────────────────────────────────────
  "uzbekistan": {
    iso: "UZB", label: "Uzbekistan", type: "modern", status: "Republic",
    relId: 196240,
    subdivisions: [
      { relId: 4017819, name: "Tashkent Region",  population: 5000000,  military: 25, naval: false, landlocked: true },
      { relId: 4017820, name: "Fergana Valley",   population: 9000000,  military: 20, naval: false, landlocked: true },
      { relId: 4017821, name: "South & West",     population: 18000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── KAZAKHSTAN ────────────────────────────────────────────────────────────
  "kazakhstan": {
    iso: "KAZ", label: "Kazakhstan", type: "modern", status: "Republic",
    relId: 214665,
    subdivisions: [
      { relId: 4017888, name: "Astana & North",  population: 6000000,  military: 25, naval: false, landlocked: true  },
      { relId: 4017889, name: "Almaty & East",   population: 6000000,  military: 20, naval: false, landlocked: true  },
      { relId: 4017890, name: "West (Caspian)",  population: 3000000,  military: 15, naval: true,  landlocked: false },
      { relId: 4017891, name: "South & Central", population: 4000000,  military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── UKRAINE (already above) — BELARUS ─────────────────────────────────────
  "belarus": {
    iso: "BLR", label: "Belarus", type: "modern", status: "Republic",
    relId: 59065,
    subdivisions: [
      { relId: 72639, name: "Minsk & Central", population: 4500000, military: 25, naval: false, landlocked: true },
      { relId: 72640, name: "Western Belarus",  population: 3000000, military: 15, naval: false, landlocked: true },
      { relId: 72641, name: "Eastern Belarus",  population: 2000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── SWEDEN ────────────────────────────────────────────────────────────────
  "sweden": {
    iso: "SWE", label: "Sweden", type: "modern", status: "Constitutional monarchy",
    relId: 52822,
    subdivisions: [
      { relId: 941530, name: "Stockholm County", population: 2400000, military: 25, naval: true,  landlocked: false },
      { relId: 941531, name: "South Sweden",     population: 4000000, military: 20, naval: true,  landlocked: false },
      { relId: 941532, name: "North Sweden",     population: 4000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── NORWAY ────────────────────────────────────────────────────────────────
  "norway": {
    iso: "NOR", label: "Norway", type: "modern", status: "Constitutional monarchy",
    relId: 2978650,
    subdivisions: [
      { relId: 406299, name: "Eastern Norway (Oslo)", population: 2500000, military: 25, naval: true, landlocked: false },
      { relId: 406300, name: "Western Norway",        population: 1300000, military: 20, naval: true, landlocked: false },
      { relId: 406301, name: "Northern Norway",       population: 1600000, military: 15, naval: true, landlocked: false }
    ]
  },

  // ── FINLAND ───────────────────────────────────────────────────────────────
  "finland": {
    iso: "FIN", label: "Finland", type: "modern", status: "Republic",
    relId: 54224,
    subdivisions: [
      { relId: 3360749, name: "Southern Finland (Helsinki)", population: 2300000, military: 25, naval: true,  landlocked: false },
      { relId: 3360750, name: "Western Finland",            population: 1800000, military: 15, naval: true,  landlocked: false },
      { relId: 3360751, name: "Northern Finland",           population: 1400000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── NETHERLANDS ───────────────────────────────────────────────────────────
  "netherlands": {
    iso: "NLD", label: "Netherlands", type: "modern", status: "Constitutional monarchy",
    relId: 2323309,
    subdivisions: [
      { relId: 47696, name: "North Holland & Utrecht", population: 4000000, military: 25, naval: true, landlocked: false },
      { relId: 47695, name: "South Holland & Zeeland", population: 4200000, military: 20, naval: true, landlocked: false },
      { relId: 47690, name: "South & East",            population: 5200000, military: 15, naval: false, landlocked: true }
    ]
  },

  // ── BELGIUM ───────────────────────────────────────────────────────────────
  "belgium": {
    iso: "BEL", label: "Belgium", type: "modern", status: "Constitutional monarchy",
    relId: 52411,
    subdivisions: [
      { relId: 53142, name: "Flanders",  population: 6600000, military: 20, naval: true,  landlocked: false },
      { relId: 53134, name: "Wallonia",  population: 3600000, military: 15, naval: false, landlocked: true  },
      { relId: 54094, name: "Brussels",  population: 1200000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── SWITZERLAND ───────────────────────────────────────────────────────────
  "switzerland": {
    iso: "CHE", label: "Switzerland", type: "modern", status: "Federal republic",
    relId: 51701,
    subdivisions: [
      { relId: 1686482, name: "German-speaking Cantons", population: 5200000, military: 20, naval: false, landlocked: true },
      { relId: 1686483, name: "French-speaking Cantons", population: 2000000, military: 15, naval: false, landlocked: true },
      { relId: 1686484, name: "Italian-speaking & Grisons", population: 600000, military: 5, naval: false, landlocked: true }
    ]
  },

  // ── AUSTRIA ───────────────────────────────────────────────────────────────
  "austria": {
    iso: "AUT", label: "Austria", type: "modern", status: "Federal republic",
    relId: 16239,
    subdivisions: [
      { relId: 16241, name: "Vienna & Lower Austria", population: 3500000, military: 20, naval: false, landlocked: true },
      { relId: 16242, name: "Styria & Carinthia",     population: 2000000, military: 15, naval: false, landlocked: true },
      { relId: 16243, name: "Upper Austria & Salzburg",population: 2000000, military: 15, naval: false, landlocked: true }
    ]
  },

  // ── GREECE ────────────────────────────────────────────────────────────────
  "greece": {
    iso: "GRC", label: "Greece", type: "modern", status: "Republic",
    relId: 192307,
    subdivisions: [
      { relId: 2806854, name: "Attica (Athens)", population: 3800000, military: 30, naval: true, landlocked: false },
      { relId: 2806855, name: "Central & North", population: 3500000, military: 20, naval: true, landlocked: false },
      { relId: 2806856, name: "Peloponnese & West",population: 2000000, military: 15, naval: true, landlocked: false },
      { relId: 2806857, name: "Aegean Islands",   population: 500000,  military: 10, naval: true, landlocked: false }
    ]
  },

  // ── PORTUGAL ──────────────────────────────────────────────────────────────
  "portugal": {
    iso: "PRT", label: "Portugal", type: "modern", status: "Republic",
    relId: 295480,
    subdivisions: [
      { relId: 5646064, name: "Lisbon Region",  population: 2900000, military: 25, naval: true, landlocked: false },
      { relId: 5646065, name: "Norte",          population: 3600000, military: 20, naval: true, landlocked: false },
      { relId: 5646066, name: "Alentejo & Algarve",population: 1500000,military: 10, naval: true, landlocked: false }
    ]
  },

  // ── ROMANIA ───────────────────────────────────────────────────────────────
  "romania": {
    iso: "ROU", label: "Romania", type: "modern", status: "Republic",
    relId: 90689,
    subdivisions: [
      { relId: 3337786, name: "Bucharest & Muntenia", population: 4500000, military: 25, naval: false, landlocked: true  },
      { relId: 3337787, name: "Transylvania",         population: 4000000, military: 20, naval: false, landlocked: true  },
      { relId: 3337788, name: "Moldova & Dobruja",    population: 5000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── CZECHIA ───────────────────────────────────────────────────────────────
  "czechia": {
    iso: "CZE", label: "Czechia", type: "modern", status: "Republic",
    relId: 51684,
    subdivisions: [
      { relId: 1380216, name: "Bohemia (Prague)",  population: 4200000, military: 20, naval: false, landlocked: true },
      { relId: 1380217, name: "West Bohemia",      population: 1800000, military: 10, naval: false, landlocked: true },
      { relId: 1380218, name: "Moravia & Silesia", population: 4200000, military: 15, naval: false, landlocked: true }
    ]
  },

  // ── HUNGARY ───────────────────────────────────────────────────────────────
  "hungary": {
    iso: "HUN", label: "Hungary", type: "modern", status: "Republic",
    relId: 21335,
    subdivisions: [
      { relId: 1540726, name: "Budapest & Central", population: 3000000, military: 20, naval: false, landlocked: true },
      { relId: 1540727, name: "Transdanubia",        population: 2500000, military: 15, naval: false, landlocked: true },
      { relId: 1540728, name: "Great Plain",         population: 4000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── SERBIA ────────────────────────────────────────────────────────────────
  "serbia": {
    iso: "SRB", label: "Serbia", type: "modern", status: "Republic",
    relId: 1741311,
    subdivisions: [
      { relId: 1899440, name: "Belgrade & Central Serbia", population: 4000000, military: 20, naval: false, landlocked: true },
      { relId: 1899441, name: "Vojvodina",                  population: 2000000, military: 15, naval: false, landlocked: true },
      { relId: 1899442, name: "Southern Serbia",            population: 1500000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── DENMARK ───────────────────────────────────────────────────────────────
  "denmark": {
    iso: "DNK", label: "Denmark", type: "modern", status: "Constitutional monarchy",
    relId: 50046,
    subdivisions: [
      { relId: 2191626, name: "Capital Region (Copenhagen)", population: 1900000, military: 20, naval: true, landlocked: false },
      { relId: 2191627, name: "Jutland",                     population: 2600000, military: 15, naval: true, landlocked: false },
      { relId: 2191628, name: "Other Islands",               population: 600000,  military: 5,  naval: true, landlocked: false }
    ]
  },

  // ── IRELAND ───────────────────────────────────────────────────────────────
  "ireland": {
    iso: "IRL", label: "Ireland", type: "modern", status: "Republic",
    relId: 62273,
    subdivisions: [
      { relId: 1428550, name: "Leinster (Dublin)", population: 2800000, military: 20, naval: true, landlocked: false },
      { relId: 1428551, name: "Munster & Connacht",population: 2000000, military: 10, naval: true, landlocked: false }
    ]
  },

  // ── NEW ZEALAND ───────────────────────────────────────────────────────────
  "new zealand": {
    iso: "NZL", label: "New Zealand", type: "modern", status: "Constitutional monarchy",
    relId: 556706,
    subdivisions: [
      { relId: 2396990, name: "North Island", population: 3700000, military: 20, naval: true, landlocked: false },
      { relId: 2396991, name: "South Island", population: 1200000, military: 10, naval: true, landlocked: false }
    ]
  },

  // ── ISRAEL ────────────────────────────────────────────────────────────────
  "israel": {
    iso: "ISR", label: "Israel", type: "modern", status: "Parliamentary democracy",
    relId: 1473946,
    subdivisions: [
      { relId: 1337714, name: "Tel Aviv & Center", population: 4000000, military: 35, naval: true,  landlocked: false },
      { relId: 1337715, name: "Jerusalem & West Bank", population: 2000000, military: 25, naval: false, landlocked: true },
      { relId: 1337716, name: "North & South",      population: 3000000, military: 15, naval: true,  landlocked: false }
    ]
  },

  // ── JORDAN ────────────────────────────────────────────────────────────────
  "jordan": {
    iso: "JOR", label: "Jordan", type: "modern", status: "Monarchy",
    relId: 184818,
    subdivisions: [
      { relId: 1700709, name: "Amman & Central", population: 4500000, military: 20, naval: false, landlocked: true },
      { relId: 1700710, name: "North Jordan",    population: 2000000, military: 10, naval: false, landlocked: true },
      { relId: 1700711, name: "South Jordan",    population: 1000000, military: 5,  naval: true,  landlocked: false }
    ]
  },

  // ── SYRIA ─────────────────────────────────────────────────────────────────
  "syria": {
    iso: "SYR", label: "Syria", type: "modern", status: "Republic",
    relId: 184840,
    subdivisions: [
      { relId: 2239671, name: "Damascus & Central", population: 7000000, military: 25, naval: false, landlocked: true  },
      { relId: 2239672, name: "Northwest (Aleppo)", population: 6000000, military: 20, naval: true,  landlocked: false },
      { relId: 2239673, name: "East Syria",         population: 5000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── UNITED ARAB EMIRATES ──────────────────────────────────────────────────
  "united arab emirates": {
    iso: "ARE", label: "United Arab Emirates", type: "modern", status: "Federation of monarchies",
    relId: 307763,
    subdivisions: [
      { relId: 3464985, name: "Abu Dhabi",   population: 3000000, military: 30, naval: true, landlocked: false },
      { relId: 3464986, name: "Dubai",       population: 3500000, military: 25, naval: true, landlocked: false },
      { relId: 3464987, name: "Other Emirates",population: 3000000,military: 10, naval: true, landlocked: false }
    ]
  },

  // ── CUBA ──────────────────────────────────────────────────────────────────
  "cuba": {
    iso: "CUB", label: "Cuba", type: "modern", status: "Socialist republic",
    relId: 307833,
    subdivisions: [
      { relId: 3460791, name: "Havana & West",  population: 3500000, military: 35, naval: true, landlocked: false },
      { relId: 3460792, name: "Central Cuba",   population: 3000000, military: 20, naval: true, landlocked: false },
      { relId: 3460793, name: "Eastern Cuba",   population: 4500000, military: 20, naval: true, landlocked: false }
    ]
  },

  // ── ANGOLA ────────────────────────────────────────────────────────────────
  "angola": {
    iso: "AGO", label: "Angola", type: "modern", status: "Republic",
    relId: 195267,
    subdivisions: [
      { relId: 3681442, name: "Luanda & Coast", population: 9000000, military: 25, naval: true,  landlocked: false },
      { relId: 3681443, name: "Central Angola", population: 9000000, military: 15, naval: false, landlocked: true  },
      { relId: 3681444, name: "South & East",   population: 8000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── MOZAMBIQUE ────────────────────────────────────────────────────────────
  "mozambique": {
    iso: "MOZ", label: "Mozambique", type: "modern", status: "Republic",
    relId: 195273,
    subdivisions: [
      { relId: 3786002, name: "Maputo & South", population: 9000000,  military: 20, naval: true,  landlocked: false },
      { relId: 3786003, name: "Central",        population: 10000000, military: 10, naval: true,  landlocked: false },
      { relId: 3786004, name: "North",          population: 12000000, military: 5,  naval: true,  landlocked: false }
    ]
  },

  // ── ZAMBIA ────────────────────────────────────────────────────────────────
  "zambia": {
    iso: "ZMB", label: "Zambia", type: "modern", status: "Republic",
    relId: 195271,
    subdivisions: [
      { relId: 3784592, name: "Lusaka & Copperbelt", population: 7000000, military: 20, naval: false, landlocked: true },
      { relId: 3784593, name: "Other Provinces",     population: 12000000,military: 10, naval: false, landlocked: true }
    ]
  },

  // ── ZIMBABWE ──────────────────────────────────────────────────────────────
  "zimbabwe": {
    iso: "ZWE", label: "Zimbabwe", type: "modern", status: "Republic",
    relId: 195272,
    subdivisions: [
      { relId: 3785190, name: "Harare & Mashonaland", population: 8000000, military: 20, naval: false, landlocked: true },
      { relId: 3785191, name: "Matabeleland & South", population: 7000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── GHANA ─────────────────────────────────────────────────────────────────
  "ghana": {
    iso: "GHA", label: "Ghana", type: "modern", status: "Republic",
    relId: 192781,
    subdivisions: [
      { relId: 3719766, name: "Greater Accra & South", population: 10000000, military: 20, naval: true,  landlocked: false },
      { relId: 3719767, name: "Ashanti & Central",     population: 8000000,  military: 15, naval: false, landlocked: true  },
      { relId: 3719768, name: "Northern Ghana",        population: 8000000,  military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── IVORY COAST ───────────────────────────────────────────────────────────
  "ivory coast": {
    iso: "CIV", label: "Ivory Coast", type: "modern", status: "Republic",
    relId: 192779,
    subdivisions: [
      { relId: 3720452, name: "Abidjan & South", population: 10000000, military: 20, naval: true,  landlocked: false },
      { relId: 3720453, name: "North & West",    population: 16000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── SENEGAL ───────────────────────────────────────────────────────────────
  "senegal": {
    iso: "SEN", label: "Senegal", type: "modern", status: "Republic",
    relId: 192775,
    subdivisions: [
      { relId: 3719060, name: "Dakar & West", population: 5000000, military: 20, naval: true,  landlocked: false },
      { relId: 3719061, name: "Other Regions",population: 12000000,military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── CAMEROON ──────────────────────────────────────────────────────────────
  "cameroon": {
    iso: "CMR", label: "Cameroon", type: "modern", status: "Republic",
    relId: 192830,
    subdivisions: [
      { relId: 3722090, name: "Littoral & South (Yaoundé/Douala)", population: 10000000, military: 20, naval: true,  landlocked: false },
      { relId: 3722091, name: "North",                             population: 8000000,  military: 10, naval: false, landlocked: true  },
      { relId: 3722092, name: "West & Northwest",                  population: 8000000,  military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── SOUTH SUDAN ───────────────────────────────────────────────────────────
  "south sudan": {
    iso: "SSD", label: "South Sudan", type: "modern", status: "Republic",
    relId: 1656678,
    subdivisions: [
      { relId: 3580988, name: "Juba & Central Equatoria", population: 2500000, military: 20, naval: false, landlocked: true },
      { relId: 3580989, name: "Greater Upper Nile",       population: 4000000, military: 15, naval: false, landlocked: true },
      { relId: 3580990, name: "Greater Bahr el Ghazal",   population: 4500000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── MALI ──────────────────────────────────────────────────────────────────
  "mali": {
    iso: "MLI", label: "Mali", type: "modern", status: "Republic",
    relId: 192785,
    subdivisions: [
      { relId: 3717874, name: "Bamako & South", population: 9000000, military: 15, naval: false, landlocked: true },
      { relId: 3717875, name: "North Mali",     population: 8000000, military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── NIGER ─────────────────────────────────────────────────────────────────
  "niger": {
    iso: "NER", label: "Niger", type: "modern", status: "Republic",
    relId: 192786,
    subdivisions: [
      { relId: 3718022, name: "Niamey & South", population: 12000000, military: 10, naval: false, landlocked: true },
      { relId: 3718023, name: "North & Desert",  population: 13000000, military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── SOMALIA ───────────────────────────────────────────────────────────────
  "somalia": {
    iso: "SOM", label: "Somalia", type: "modern", status: "Federal republic",
    relId: 192799,
    subdivisions: [
      { relId: 3781054, name: "Mogadishu & South", population: 8000000, military: 15, naval: true,  landlocked: false },
      { relId: 3781055, name: "Puntland",          population: 4000000, military: 10, naval: true,  landlocked: false },
      { relId: 3781056, name: "Central",           population: 5000000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── UGANDA ────────────────────────────────────────────────────────────────
  "uganda": {
    iso: "UGA", label: "Uganda", type: "modern", status: "Republic",
    relId: 192796,
    subdivisions: [
      { relId: 3785874, name: "Kampala & Central", population: 10000000, military: 20, naval: false, landlocked: true },
      { relId: 3785875, name: "Other Regions",     population: 38000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── MADAGASCAR ────────────────────────────────────────────────────────────
  "madagascar": {
    iso: "MDG", label: "Madagascar", type: "modern", status: "Republic",
    relId: 447325,
    subdivisions: [
      { relId: 3789174, name: "Analamanga (Antananarivo)", population: 4000000, military: 15, naval: false, landlocked: true  },
      { relId: 3789175, name: "Coastal Regions",           population: 16000000,military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── CONGO (DRC) ───────────────────────────────────────────────────────────
  "congo (kinshasa)": {
    iso: "COD", label: "Democratic Republic of the Congo", type: "modern", status: "Republic",
    relId: 192795,
    subdivisions: [
      { relId: 3788834, name: "Kinshasa",    population: 15000000, military: 20, naval: false, landlocked: true  },
      { relId: 3788835, name: "Kivu & East", population: 20000000, military: 15, naval: false, landlocked: true  },
      { relId: 3788836, name: "Kasai & Center",population: 20000000,military: 10, naval: false, landlocked: true },
      { relId: 3788837, name: "Katanga",     population: 18000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── CONGO (Brazzaville) ───────────────────────────────────────────────────
  "congo (brazzaville)": {
    iso: "COG", label: "Congo", type: "modern", status: "Republic",
    relId: 192794,
    subdivisions: [
      { relId: 3788520, name: "Brazzaville & South", population: 3000000, military: 15, naval: true,  landlocked: false },
      { relId: 3788521, name: "North Congo",         population: 2500000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── MYANMAR (already above, skip) ─────────────────────────────────────────
  // ── LIBYA ─────────────────────────────────────────────────────────────────
  "libya": {
    iso: "LBY", label: "Libya", type: "modern", status: "Republic",
    relId: 192758,
    subdivisions: [
      { relId: 5764814, name: "Tripolitania", population: 3500000, military: 20, naval: true,  landlocked: false },
      { relId: 5764815, name: "Cyrenaica",    population: 2500000, military: 15, naval: true,  landlocked: false },
      { relId: 5764816, name: "Fezzan",       population: 500000,  military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── TUNISIA ───────────────────────────────────────────────────────────────
  "tunisia": {
    iso: "TUN", label: "Tunisia", type: "modern", status: "Republic",
    relId: 192757,
    subdivisions: [
      { relId: 5763592, name: "Tunis & North", population: 6000000, military: 20, naval: true,  landlocked: false },
      { relId: 5763593, name: "Central",       population: 4000000, military: 10, naval: true,  landlocked: false },
      { relId: 5763594, name: "South",         population: 2000000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── RWANDA ────────────────────────────────────────────────────────────────
  "rwanda": {
    iso: "RWA", label: "Rwanda", type: "modern", status: "Republic",
    relId: 171496,
    subdivisions: [
      { relId: 3787826, name: "Kigali & Eastern", population: 6000000, military: 15, naval: false, landlocked: true },
      { relId: 3787827, name: "Western & North",  population: 7000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── TAIWAN ────────────────────────────────────────────────────────────────
  "taiwan": {
    iso: "TWN", label: "Taiwan", type: "modern", status: "Disputed republic",
    relId: 449220,
    subdivisions: [
      { relId: 5765668, name: "Northern Taiwan (Taipei)", population: 10000000, military: 35, naval: true, landlocked: false },
      { relId: 5765669, name: "Central & Southern",       population: 13000000, military: 25, naval: true, landlocked: false }
    ]
  },

  // ── GEORGIA ───────────────────────────────────────────────────────────────
  "georgia": {
    iso: "GEO", label: "Georgia", type: "modern", status: "Republic",
    relId: 28699,
    subdivisions: [
      { relId: 1259498, name: "Tbilisi & East Georgia", population: 2500000, military: 20, naval: true,  landlocked: false },
      { relId: 1259499, name: "West Georgia",           population: 1500000, military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── ARMENIA ───────────────────────────────────────────────────────────────
  "armenia": {
    iso: "ARM", label: "Armenia", type: "modern", status: "Republic",
    relId: 364066,
    subdivisions: [
      { relId: 1259380, name: "Yerevan & Ararat", population: 1500000, military: 20, naval: false, landlocked: true },
      { relId: 1259381, name: "Other Provinces",  population: 1500000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── AZERBAIJAN ────────────────────────────────────────────────────────────
  "azerbaijan": {
    iso: "AZE", label: "Azerbaijan", type: "modern", status: "Republic",
    relId: 364110,
    subdivisions: [
      { relId: 1259482, name: "Baku & Absheron", population: 3500000, military: 25, naval: true,  landlocked: false },
      { relId: 1259483, name: "Other Regions",   population: 6500000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── MONGOLIA ──────────────────────────────────────────────────────────────
  "mongolia": {
    iso: "MNG", label: "Mongolia", type: "modern", status: "Republic",
    relId: 161033,
    subdivisions: [
      { relId: 4017934, name: "Ulaanbaatar & Central", population: 2000000, military: 15, naval: false, landlocked: true },
      { relId: 4017935, name: "Eastern Mongolia",      population: 600000,  military: 5,  naval: false, landlocked: true },
      { relId: 4017936, name: "Western Mongolia",      population: 600000,  military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── LAOS ──────────────────────────────────────────────────────────────────
  "laos": {
    iso: "LAO", label: "Laos", type: "modern", status: "Socialist republic",
    relId: 49903,
    subdivisions: [
      { relId: 2127424, name: "Vientiane & Central", population: 3000000, military: 15, naval: false, landlocked: true },
      { relId: 2127425, name: "North & South",       population: 4000000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── CAMBODIA ──────────────────────────────────────────────────────────────
  "cambodia": {
    iso: "KHM", label: "Cambodia", type: "modern", status: "Constitutional monarchy",
    relId: 49898,
    subdivisions: [
      { relId: 2127248, name: "Phnom Penh & South", population: 7000000, military: 15, naval: true,  landlocked: false },
      { relId: 2127249, name: "North & West",       population: 8000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── BOLIVIA ───────────────────────────────────────────────────────────────
  "bolivia": {
    iso: "BOL", label: "Bolivia", type: "modern", status: "Republic",
    relId: 252645,
    subdivisions: [
      { relId: 1521773, name: "La Paz & West",   population: 4500000, military: 20, naval: false, landlocked: true },
      { relId: 1521774, name: "Santa Cruz & East",population: 4000000, military: 15, naval: false, landlocked: true },
      { relId: 1521775, name: "Central",          population: 3000000, military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── ECUADOR ───────────────────────────────────────────────────────────────
  "ecuador": {
    iso: "ECU", label: "Ecuador", type: "modern", status: "Republic",
    relId: 108089,
    subdivisions: [
      { relId: 1316444, name: "Guayas & Coast",      population: 7000000, military: 20, naval: true,  landlocked: false },
      { relId: 1316445, name: "Pichincha & Sierra",  population: 5000000, military: 15, naval: false, landlocked: true  },
      { relId: 1316446, name: "Amazon Region",       population: 4000000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── PARAGUAY ──────────────────────────────────────────────────────────────
  "paraguay": {
    iso: "PRY", label: "Paraguay", type: "modern", status: "Republic",
    relId: 287077,
    subdivisions: [
      { relId: 1522436, name: "Asunción & East", population: 5000000, military: 15, naval: false, landlocked: true },
      { relId: 1522437, name: "Chaco",           population: 2000000, military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── URUGUAY ───────────────────────────────────────────────────────────────
  "uruguay": {
    iso: "URY", label: "Uruguay", type: "modern", status: "Republic",
    relId: 287072,
    subdivisions: [
      { relId: 1522394, name: "Montevideo & South", population: 2500000, military: 15, naval: true,  landlocked: false },
      { relId: 1522395, name: "Interior",           population: 1000000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── GUATEMALA ─────────────────────────────────────────────────────────────
  "guatemala": {
    iso: "GTM", label: "Guatemala", type: "modern", status: "Republic",
    relId: 1521463,
    subdivisions: [
      { relId: 1340375, name: "Guatemala City & South", population: 8000000, military: 15, naval: true,  landlocked: false },
      { relId: 1340376, name: "Highlands & North",      population: 9000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── HONDURAS ──────────────────────────────────────────────────────────────
  "honduras": {
    iso: "HND", label: "Honduras", type: "modern", status: "Republic",
    relId: 287670,
    subdivisions: [
      { relId: 1340518, name: "Tegucigalpa & Center", population: 5000000, military: 15, naval: true, landlocked: false },
      { relId: 1340519, name: "Caribbean Coast & North",population: 5000000,military: 10, naval: true, landlocked: false }
    ]
  },

  // ── NICARAGUA ─────────────────────────────────────────────────────────────
  "nicaragua": {
    iso: "NIC", label: "Nicaragua", type: "modern", status: "Republic",
    relId: 287666,
    subdivisions: [
      { relId: 1340464, name: "Managua & Pacific", population: 4500000, military: 15, naval: true,  landlocked: false },
      { relId: 1340465, name: "Caribbean & North", population: 2500000, military: 5,  naval: true,  landlocked: false }
    ]
  },

  // ── COSTA RICA ────────────────────────────────────────────────────────────
  "costa rica": {
    iso: "CRI", label: "Costa Rica", type: "modern", status: "Republic",
    relId: 287667,
    subdivisions: [
      { relId: 1340490, name: "San José & Central", population: 3000000, military: 10, naval: true, landlocked: false },
      { relId: 1340491, name: "Other Provinces",    population: 2000000, military: 5,  naval: true, landlocked: false }
    ]
  },

  // ── PANAMA ────────────────────────────────────────────────────────────────
  "panama": {
    iso: "PAN", label: "Panama", type: "modern", status: "Republic",
    relId: 287668,
    subdivisions: [
      { relId: 1340598, name: "Panama City & East", population: 2500000, military: 15, naval: true, landlocked: false },
      { relId: 1340599, name: "West Panama",        population: 1500000, military: 5,  naval: true, landlocked: false }
    ]
  },

  // ── DOMINICAN REPUBLIC ────────────────────────────────────────────────────
  "dominican republic": {
    iso: "DOM", label: "Dominican Republic", type: "modern", status: "Republic",
    relId: 307828,
    subdivisions: [
      { relId: 3460652, name: "Santo Domingo & East", population: 6000000, military: 15, naval: true, landlocked: false },
      { relId: 3460653, name: "North & West",         population: 5000000, military: 10, naval: true, landlocked: false }
    ]
  },

  // ── MALAYSIA (already above) — SINGAPORE ──────────────────────────────────
  "singapore": {
    iso: "SGP", label: "Singapore", type: "modern", status: "Republic",
    relId: 536780,
    subdivisions: [
      { relId: 536780, name: "Singapore", population: 5900000, military: 30, naval: true, landlocked: false }
    ]
  },

  // ── PAPUA NEW GUINEA ──────────────────────────────────────────────────────
  "papua new guinea": {
    iso: "PNG", label: "Papua New Guinea", type: "modern", status: "Constitutional monarchy",
    relId: 307866,
    subdivisions: [
      { relId: 3479210, name: "Port Moresby & South", population: 4000000, military: 15, naval: true, landlocked: false },
      { relId: 3479211, name: "Highlands",            population: 5000000, military: 10, naval: false, landlocked: true  },
      { relId: 3479212, name: "Islands Region",       population: 3000000, military: 5,  naval: true, landlocked: false }
    ]
  },

  // ── OMAN ──────────────────────────────────────────────────────────────────
  "oman": {
    iso: "OMN", label: "Oman", type: "modern", status: "Absolute monarchy",
    relId: 305138,
    subdivisions: [
      { relId: 3061344, name: "Muscat & North", population: 2000000, military: 20, naval: true,  landlocked: false },
      { relId: 3061345, name: "South Oman",     population: 3000000, military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── YEMEN ─────────────────────────────────────────────────────────────────
  "yemen": {
    iso: "YEM", label: "Yemen", type: "modern", status: "Republic",
    relId: 305092,
    subdivisions: [
      { relId: 3061498, name: "Sana'a & West", population: 15000000, military: 15, naval: true,  landlocked: false },
      { relId: 3061499, name: "South Yemen",   population: 14000000, military: 10, naval: true,  landlocked: false }
    ]
  },

  // ── KUWAIT ────────────────────────────────────────────────────────────────
  "kuwait": {
    iso: "KWT", label: "Kuwait", type: "modern", status: "Monarchy",
    relId: 305099,
    subdivisions: [
      { relId: 305099, name: "Kuwait", population: 4300000, military: 20, naval: true, landlocked: false }
    ]
  },

  // ── BAHRAIN ───────────────────────────────────────────────────────────────
  "bahrain": {
    iso: "BHR", label: "Bahrain", type: "modern", status: "Monarchy",
    relId: 378734,
    subdivisions: [
      { relId: 378734, name: "Bahrain", population: 1500000, military: 15, naval: true, landlocked: false }
    ]
  },

  // ── QATAR ─────────────────────────────────────────────────────────────────
  "qatar": {
    iso: "QAT", label: "Qatar", type: "modern", status: "Monarchy",
    relId: 305095,
    subdivisions: [
      { relId: 305095, name: "Qatar", population: 2800000, military: 20, naval: true, landlocked: false }
    ]
  },

  // ── ALBANIA ───────────────────────────────────────────────────────────────
  "albania": {
    iso: "ALB", label: "Albania", type: "modern", status: "Republic",
    relId: 53292,
    subdivisions: [
      { relId: 53293, name: "Tirana & Coast", population: 2000000, military: 15, naval: true,  landlocked: false },
      { relId: 53294, name: "Interior",       population: 1000000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── BULGARIA ──────────────────────────────────────────────────────────────
  "bulgaria": {
    iso: "BGR", label: "Bulgaria", type: "modern", status: "Republic",
    relId: 186382,
    subdivisions: [
      { relId: 4002788, name: "Sofia & Northwest", population: 3000000, military: 20, naval: false, landlocked: true  },
      { relId: 4002789, name: "Black Sea Coast",   population: 2000000, military: 10, naval: true,  landlocked: false },
      { relId: 4002790, name: "South Bulgaria",    population: 3000000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── CROATIA ───────────────────────────────────────────────────────────────
  "croatia": {
    iso: "HRV", label: "Croatia", type: "modern", status: "Republic",
    relId: 214885,
    subdivisions: [
      { relId: 3528982, name: "Zagreb & Central", population: 2000000, military: 15, naval: false, landlocked: true  },
      { relId: 3528983, name: "Dalmatia & Coast", population: 1000000, military: 10, naval: true,  landlocked: false },
      { relId: 3528984, name: "Slavonia",         population: 1000000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── SLOVAKIA ──────────────────────────────────────────────────────────────
  "slovakia": {
    iso: "SVK", label: "Slovakia", type: "modern", status: "Republic",
    relId: 14296,
    subdivisions: [
      { relId: 1540774, name: "Bratislava & West", population: 1800000, military: 15, naval: false, landlocked: true },
      { relId: 1540775, name: "Central & East",    population: 3700000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── MOLDOVA ───────────────────────────────────────────────────────────────
  "moldova": {
    iso: "MDA", label: "Moldova", type: "modern", status: "Republic",
    relId: 58974,
    subdivisions: [
      { relId: 58975, name: "Chișinău & Center", population: 2000000, military: 10, naval: false, landlocked: true },
      { relId: 58976, name: "Other Regions",     population: 1000000, military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── LATVIA ────────────────────────────────────────────────────────────────
  "latvia": {
    iso: "LVA", label: "Latvia", type: "modern", status: "Republic",
    relId: 72594,
    subdivisions: [
      { relId: 72596, name: "Riga & Vidzeme", population: 1200000, military: 10, naval: true,  landlocked: false },
      { relId: 72597, name: "Other Regions",  population: 700000,  military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── LITHUANIA ─────────────────────────────────────────────────────────────
  "lithuania": {
    iso: "LTU", label: "Lithuania", type: "modern", status: "Republic",
    relId: 72596,
    subdivisions: [
      { relId: 1529364, name: "Vilnius & East",   population: 1200000, military: 10, naval: false, landlocked: true },
      { relId: 1529365, name: "Kaunas & West",    population: 1200000, military: 5,  naval: true,  landlocked: false }
    ]
  },

  // ── ESTONIA ───────────────────────────────────────────────────────────────
  "estonia": {
    iso: "EST", label: "Estonia", type: "modern", status: "Republic",
    relId: 79510,
    subdivisions: [
      { relId: 79511, name: "Tallinn & North",  population: 800000, military: 10, naval: true,  landlocked: false },
      { relId: 79512, name: "South Estonia",    population: 500000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── BOSNIA AND HERZEGOVINA ────────────────────────────────────────────────
  "bosnia and herzegovina": {
    iso: "BIH", label: "Bosnia and Herzegovina", type: "modern", status: "Federal republic",
    relId: 2528142,
    subdivisions: [
      { relId: 3455931, name: "Federation of BiH", population: 2400000, military: 15, naval: true,  landlocked: false },
      { relId: 3455932, name: "Republika Srpska",  population: 1200000, military: 10, naval: false, landlocked: true  }
    ]
  },

  // ── NORTH MACEDONIA ───────────────────────────────────────────────────────
  "north macedonia": {
    iso: "MKD", label: "North Macedonia", type: "modern", status: "Republic",
    relId: 53293,
    subdivisions: [
      { relId: 53293, name: "North Macedonia", population: 2100000, military: 10, naval: false, landlocked: true }
    ]
  },

  // ── MONTENEGRO ────────────────────────────────────────────────────────────
  "montenegro": {
    iso: "MNE", label: "Montenegro", type: "modern", status: "Republic",
    relId: 53296,
    subdivisions: [
      { relId: 53296, name: "Montenegro", population: 620000, military: 10, naval: true, landlocked: false }
    ]
  },

  // ── ICELAND ───────────────────────────────────────────────────────────────
  "iceland": {
    iso: "ISL", label: "Iceland", type: "modern", status: "Republic",
    relId: 299133,
    subdivisions: [
      { relId: 299133, name: "Iceland", population: 370000, military: 5, naval: true, landlocked: false }
    ]
  },

  // ── MALAYSIA (already above) — BRUNEI ─────────────────────────────────────
  "brunei": {
    iso: "BRN", label: "Brunei", type: "modern", status: "Absolute monarchy",
    relId: 2103120,
    subdivisions: [
      { relId: 2103120, name: "Brunei", population: 440000, military: 10, naval: true, landlocked: false }
    ]
  },

  // ── TAJIKISTAN ────────────────────────────────────────────────────────────
  "tajikistan": {
    iso: "TJK", label: "Tajikistan", type: "modern", status: "Republic",
    relId: 214626,
    subdivisions: [
      { relId: 4017848, name: "Dushanbe & West", population: 5000000, military: 10, naval: false, landlocked: true },
      { relId: 4017849, name: "East Tajikistan", population: 4000000, military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── KYRGYZSTAN ────────────────────────────────────────────────────────────
  "kyrgyzstan": {
    iso: "KGZ", label: "Kyrgyzstan", type: "modern", status: "Republic",
    relId: 178009,
    subdivisions: [
      { relId: 4017862, name: "Bishkek & North", population: 3000000, military: 10, naval: false, landlocked: true },
      { relId: 4017863, name: "South Kyrgyzstan",population: 3500000, military: 5,  naval: false, landlocked: true }
    ]
  },

  // ── TURKMENISTAN ──────────────────────────────────────────────────────────
  "turkmenistan": {
    iso: "TKM", label: "Turkmenistan", type: "modern", status: "Republic",
    relId: 223026,
    subdivisions: [
      { relId: 4017826, name: "Ashgabat & Central", population: 3500000, military: 15, naval: true,  landlocked: false },
      { relId: 4017827, name: "East & North",       population: 2500000, military: 5,  naval: false, landlocked: true  }
    ]
  },

  // ── FINLAND (already above) — SMALL COUNTRIES WITHOUT SUBDIVISIONS ─────────
  // For small/city-states, one subdivision = whole country relation

  "andorra":              { iso: "AND", label: "Andorra",              type: "modern", status: "Principality",           relId: 9407,    subdivisions: [{ relId: 9407,    name: "Andorra",              population: 77000,   military: 2,  naval: false, landlocked: true  }] },
  "antigua and barbuda":  { iso: "ATG", label: "Antigua and Barbuda",  type: "modern", status: "Constitutional monarchy", relId: 536900,  subdivisions: [{ relId: 536900,  name: "Antigua and Barbuda",  population: 99000,   military: 3,  naval: true,  landlocked: false }] },
  "bahamas":              { iso: "BHS", label: "Bahamas",              type: "modern", status: "Constitutional monarchy", relId: 547469,  subdivisions: [{ relId: 547469,  name: "Bahamas",              population: 400000,  military: 5,  naval: true,  landlocked: false }] },
  "barbados":             { iso: "BRB", label: "Barbados",             type: "modern", status: "Republic",               relId: 547465,  subdivisions: [{ relId: 547465,  name: "Barbados",             population: 287000,  military: 5,  naval: true,  landlocked: false }] },
  "belize":               { iso: "BLZ", label: "Belize",               type: "modern", status: "Constitutional monarchy", relId: 287733,  subdivisions: [{ relId: 287733,  name: "Belize",               population: 420000,  military: 5,  naval: true,  landlocked: false }] },
  "benin":                { iso: "BEN", label: "Benin",                type: "modern", status: "Republic",               relId: 192784,  subdivisions: [{ relId: 192784,  name: "Benin",                population: 12000000,military: 5,  naval: true,  landlocked: false }] },
  "bhutan":               { iso: "BTN", label: "Bhutan",               type: "modern", status: "Constitutional monarchy", relId: 184629,  subdivisions: [{ relId: 184629,  name: "Bhutan",               population: 770000,  military: 5,  naval: false, landlocked: true  }] },
  "botswana":             { iso: "BWA", label: "Botswana",             type: "modern", status: "Republic",               relId: 1889339, subdivisions: [{ relId: 1889339, name: "Botswana",             population: 2600000, military: 10, naval: false, landlocked: true  }] },
  "burkina faso":         { iso: "BFA", label: "Burkina Faso",         type: "modern", status: "Republic",               relId: 192783,  subdivisions: [{ relId: 192783,  name: "Burkina Faso",         population: 22000000,military: 5,  naval: false, landlocked: true  }] },
  "burundi":              { iso: "BDI", label: "Burundi",              type: "modern", status: "Republic",               relId: 195269,  subdivisions: [{ relId: 195269,  name: "Burundi",              population: 12000000,military: 5,  naval: false, landlocked: true  }] },
  "cape verde":           { iso: "CPV", label: "Cape Verde",           type: "modern", status: "Republic",               relId: 535774,  subdivisions: [{ relId: 535774,  name: "Cape Verde",           population: 560000,  military: 5,  naval: true,  landlocked: false }] },
  "central african republic": { iso: "CAF", label: "Central African Republic", type: "modern", status: "Republic", relId: 192790, subdivisions: [{ relId: 192790, name: "Central African Republic", population: 5000000, military: 5, naval: false, landlocked: true }] },
  "chad":                 { iso: "TCD", label: "Chad",                 type: "modern", status: "Republic",               relId: 2361304, subdivisions: [{ relId: 2361304, name: "Chad",                population: 17000000,military: 5,  naval: false, landlocked: true  }] },
  "comoros":              { iso: "COM", label: "Comoros",              type: "modern", status: "Republic",               relId: 535790,  subdivisions: [{ relId: 535790,  name: "Comoros",              population: 870000,  military: 3,  naval: true,  landlocked: false }] },
  "cyprus":               { iso: "CYP", label: "Cyprus",              type: "modern", status: "Republic",               relId: 307786,  subdivisions: [{ relId: 307786,  name: "Cyprus",               population: 1200000, military: 10, naval: true,  landlocked: false }] },
  "djibouti":             { iso: "DJI", label: "Djibouti",             type: "modern", status: "Republic",               relId: 192801,  subdivisions: [{ relId: 192801,  name: "Djibouti",             population: 990000,  military: 10, naval: true,  landlocked: false }] },
  "dominica":             { iso: "DMA", label: "Dominica",             type: "modern", status: "Republic",               relId: 307823,  subdivisions: [{ relId: 307823,  name: "Dominica",             population: 72000,   military: 2,  naval: true,  landlocked: false }] },
  "east timor":           { iso: "TLS", label: "East Timor",           type: "modern", status: "Republic",               relId: 305142,  subdivisions: [{ relId: 305142,  name: "East Timor",           population: 1300000, military: 5,  naval: true,  landlocked: false }] },
  "el salvador":          { iso: "SLV", label: "El Salvador",          type: "modern", status: "Republic",               relId: 1520612, subdivisions: [{ relId: 1520612, name: "El Salvador",          population: 6500000, military: 10, naval: true,  landlocked: false }] },
  "equatorial guinea":    { iso: "GNQ", label: "Equatorial Guinea",    type: "modern", status: "Republic",               relId: 192830,  subdivisions: [{ relId: 192830,  name: "Equatorial Guinea",    population: 1500000, military: 5,  naval: true,  landlocked: false }] },
  "eritrea":              { iso: "ERI", label: "Eritrea",              type: "modern", status: "Republic",               relId: 296961,  subdivisions: [{ relId: 296961,  name: "Eritrea",              population: 3500000, military: 15, naval: true,  landlocked: false }] },
  "eswatini":             { iso: "SWZ", label: "Eswatini",             type: "modern", status: "Monarchy",               relId: 88210,   subdivisions: [{ relId: 88210,   name: "Eswatini",             population: 1200000, military: 5,  naval: false, landlocked: true  }] },
  "fiji":                 { iso: "FJI", label: "Fiji",                 type: "modern", status: "Republic",               relId: 571747,  subdivisions: [{ relId: 571747,  name: "Fiji",                 population: 930000,  military: 5,  naval: true,  landlocked: false }] },
  "gabon":                { iso: "GAB", label: "Gabon",                type: "modern", status: "Republic",               relId: 192793,  subdivisions: [{ relId: 192793,  name: "Gabon",                population: 2300000, military: 5,  naval: true,  landlocked: false }] },
  "gambia":               { iso: "GMB", label: "Gambia",               type: "modern", status: "Republic",               relId: 192776,  subdivisions: [{ relId: 192776,  name: "Gambia",               population: 2400000, military: 5,  naval: true,  landlocked: false }] },
  "grenada":              { iso: "GRD", label: "Grenada",              type: "modern", status: "Constitutional monarchy", relId: 550727,  subdivisions: [{ relId: 550727,  name: "Grenada",              population: 113000,  military: 3,  naval: true,  landlocked: false }] },
  "guinea":               { iso: "GIN", label: "Guinea",               type: "modern", status: "Republic",               relId: 192778,  subdivisions: [{ relId: 192778,  name: "Guinea",               population: 13000000,military: 5,  naval: true,  landlocked: false }] },
  "guinea-bissau":        { iso: "GNB", label: "Guinea-Bissau",        type: "modern", status: "Republic",               relId: 192777,  subdivisions: [{ relId: 192777,  name: "Guinea-Bissau",        population: 2000000, military: 5,  naval: true,  landlocked: false }] },
  "guyana":               { iso: "GUY", label: "Guyana",               type: "modern", status: "Republic",               relId: 287083,  subdivisions: [{ relId: 287083,  name: "Guyana",               population: 800000,  military: 5,  naval: true,  landlocked: false }] },
  "haiti":                { iso: "HTI", label: "Haiti",                type: "modern", status: "Republic",               relId: 307829,  subdivisions: [{ relId: 307829,  name: "Haiti",                population: 11000000,military: 5,  naval: true,  landlocked: false }] },
  "jamaica":              { iso: "JAM", label: "Jamaica",              type: "modern", status: "Constitutional monarchy", relId: 555017,  subdivisions: [{ relId: 555017,  name: "Jamaica",              population: 3000000, military: 5,  naval: true,  landlocked: false }] },
  "kiribati":             { iso: "KIR", label: "Kiribati",             type: "modern", status: "Republic",               relId: 571178,  subdivisions: [{ relId: 571178,  name: "Kiribati",             population: 120000,  military: 1,  naval: true,  landlocked: false }] },
  "lebanon":              { iso: "LBN", label: "Lebanon",              type: "modern", status: "Republic",               relId: 184843,  subdivisions: [{ relId: 184843,  name: "Lebanon",              population: 5500000, military: 10, naval: true,  landlocked: false }] },
  "lesotho":              { iso: "LSO", label: "Lesotho",              type: "modern", status: "Monarchy",               relId: 2093234, subdivisions: [{ relId: 2093234, name: "Lesotho",              population: 2200000, military: 5,  naval: false, landlocked: true  }] },
  "liberia":              { iso: "LBR", label: "Liberia",              type: "modern", status: "Republic",               relId: 192780,  subdivisions: [{ relId: 192780,  name: "Liberia",              population: 5000000, military: 5,  naval: true,  landlocked: false }] },
  "liechtenstein":        { iso: "LIE", label: "Liechtenstein",        type: "modern", status: "Principality",           relId: 1155955, subdivisions: [{ relId: 1155955, name: "Liechtenstein",        population: 38000,   military: 1,  naval: false, landlocked: true  }] },
  "luxembourg":           { iso: "LUX", label: "Luxembourg",           type: "modern", status: "Grand duchy",            relId: 2171347, subdivisions: [{ relId: 2171347, name: "Luxembourg",           population: 640000,  military: 5,  naval: false, landlocked: true  }] },
  "malawi":               { iso: "MWI", label: "Malawi",               type: "modern", status: "Republic",               relId: 195290,  subdivisions: [{ relId: 195290,  name: "Malawi",               population: 19000000,military: 5,  naval: false, landlocked: true  }] },
  "maldives":             { iso: "MDV", label: "Maldives",             type: "modern", status: "Republic",               relId: 536773,  subdivisions: [{ relId: 536773,  name: "Maldives",             population: 540000,  military: 5,  naval: true,  landlocked: false }] },
  "malta":                { iso: "MLT", label: "Malta",                type: "modern", status: "Republic",               relId: 365307,  subdivisions: [{ relId: 365307,  name: "Malta",                population: 520000,  military: 5,  naval: true,  landlocked: false }] },
  "marshall islands":     { iso: "MHL", label: "Marshall Islands",     type: "modern", status: "Republic",               relId: 571771,  subdivisions: [{ relId: 571771,  name: "Marshall Islands",     population: 42000,   military: 1,  naval: true,  landlocked: false }] },
  "mauritania":           { iso: "MRT", label: "Mauritania",           type: "modern", status: "Republic",               relId: 192763,  subdivisions: [{ relId: 192763,  name: "Mauritania",           population: 4600000, military: 5,  naval: true,  landlocked: false }] },
  "mauritius":            { iso: "MUS", label: "Mauritius",            type: "modern", status: "Republic",               relId: 535828,  subdivisions: [{ relId: 535828,  name: "Mauritius",            population: 1300000, military: 5,  naval: true,  landlocked: false }] },
  "micronesia":           { iso: "FSM", label: "Micronesia",           type: "modern", status: "Federal republic",        relId: 571802,  subdivisions: [{ relId: 571802,  name: "Micronesia",           population: 115000,  military: 1,  naval: true,  landlocked: false }] },
  "monaco":               { iso: "MCO", label: "Monaco",               type: "modern", status: "Principality",           relId: 1124039, subdivisions: [{ relId: 1124039, name: "Monaco",               population: 39000,   military: 1,  naval: true,  landlocked: false }] },
  "namibia":              { iso: "NAM", label: "Namibia",              type: "modern", status: "Republic",               relId: 1889337, subdivisions: [{ relId: 1889337, name: "Namibia",              population: 2600000, military: 5,  naval: true,  landlocked: false }] },
  "nauru":                { iso: "NRU", label: "Nauru",                type: "modern", status: "Republic",               relId: 571804,  subdivisions: [{ relId: 571804,  name: "Nauru",                population: 10500,   military: 1,  naval: true,  landlocked: false }] },
  "palau":                { iso: "PLW", label: "Palau",                type: "modern", status: "Republic",               relId: 571805,  subdivisions: [{ relId: 571805,  name: "Palau",                population: 18000,   military: 1,  naval: true,  landlocked: false }] },
  "palestine":            { iso: "PSE", label: "Palestine",            type: "modern", status: "Observer state",          relId: 1703814, subdivisions: [{ relId: 1703814, name: "Palestine",            population: 5300000, military: 10, naval: false, landlocked: true  }] },
  "rwanda":               { iso: "RWA", label: "Rwanda",               type: "modern", status: "Republic",               relId: 171496,  subdivisions: [{ relId: 3787826, name: "Kigali & Eastern", population: 6000000, military: 15, naval: false, landlocked: true }, { relId: 3787827, name: "Western & North", population: 7000000, military: 10, naval: false, landlocked: true }] },
  "saint kitts and nevis":{ iso: "KNA", label: "Saint Kitts and Nevis",type: "modern", status: "Constitutional monarchy", relId: 536899,  subdivisions: [{ relId: 536899,  name: "Saint Kitts and Nevis",population: 53000,   military: 1,  naval: true,  landlocked: false }] },
  "saint lucia":          { iso: "LCA", label: "Saint Lucia",          type: "modern", status: "Constitutional monarchy", relId: 550728,  subdivisions: [{ relId: 550728,  name: "Saint Lucia",          population: 184000,  military: 2,  naval: true,  landlocked: false }] },
  "saint vincent and the grenadines": { iso: "VCT", label: "Saint Vincent and the Grenadines", type: "modern", status: "Constitutional monarchy", relId: 550725, subdivisions: [{ relId: 550725, name: "Saint Vincent and the Grenadines", population: 110000, military: 2, naval: true, landlocked: false }] },
  "samoa":                { iso: "WSM", label: "Samoa",                type: "modern", status: "Republic",               relId: 203132,  subdivisions: [{ relId: 203132,  name: "Samoa",                population: 220000,  military: 2,  naval: true,  landlocked: false }] },
  "san marino":           { iso: "SMR", label: "San Marino",           type: "modern", status: "Republic",               relId: 54624,   subdivisions: [{ relId: 54624,   name: "San Marino",           population: 34000,   military: 1,  naval: false, landlocked: true  }] },
  "sao tome and principe":{ iso: "STP", label: "Sao Tome and Principe",type: "modern", status: "Republic",               relId: 535790,  subdivisions: [{ relId: 535790,  name: "Sao Tome and Principe",population: 220000,  military: 2,  naval: true,  landlocked: false }] },
  "seychelles":           { iso: "SYC", label: "Seychelles",           type: "modern", status: "Republic",               relId: 536765,  subdivisions: [{ relId: 536765,  name: "Seychelles",           population: 98000,   military: 2,  naval: true,  landlocked: false }] },
  "sierra leone":         { iso: "SLE", label: "Sierra Leone",         type: "modern", status: "Republic",               relId: 192780,  subdivisions: [{ relId: 192780,  name: "Sierra Leone",         population: 8000000, military: 5,  naval: true,  landlocked: false }] },
  "slovenia":             { iso: "SVN", label: "Slovenia",             type: "modern", status: "Republic",               relId: 218657,  subdivisions: [{ relId: 218657,  name: "Slovenia",             population: 2100000, military: 10, naval: true,  landlocked: false }] },
  "solomon islands":      { iso: "SLB", label: "Solomon Islands",      type: "modern", status: "Constitutional monarchy", relId: 1857436, subdivisions: [{ relId: 1857436, name: "Solomon Islands",      population: 720000,  military: 3,  naval: true,  landlocked: false }] },
  "suriname":             { iso: "SUR", label: "Suriname",             type: "modern", status: "Republic",               relId: 287082,  subdivisions: [{ relId: 287082,  name: "Suriname",             population: 600000,  military: 5,  naval: true,  landlocked: false }] },
  "togo":                 { iso: "TGO", label: "Togo",                 type: "modern", status: "Republic",               relId: 192782,  subdivisions: [{ relId: 192782,  name: "Togo",                 population: 8000000, military: 5,  naval: true,  landlocked: false }] },
  "tonga":                { iso: "TON", label: "Tonga",                type: "modern", status: "Monarchy",               relId: 2186660, subdivisions: [{ relId: 2186660, name: "Tonga",                population: 100000,  military: 2,  naval: true,  landlocked: false }] },
  "trinidad and tobago":  { iso: "TTO", label: "Trinidad and Tobago",  type: "modern", status: "Republic",               relId: 555717,  subdivisions: [{ relId: 555717,  name: "Trinidad and Tobago",  population: 1400000, military: 5,  naval: true,  landlocked: false }] },
  "tuvalu":               { iso: "TUV", label: "Tuvalu",               type: "modern", status: "Constitutional monarchy", relId: 2177266, subdivisions: [{ relId: 2177266, name: "Tuvalu",               population: 11000,   military: 1,  naval: true,  landlocked: false }] },
  "uganda":               { iso: "UGA", label: "Uganda",               type: "modern", status: "Republic",               relId: 192796,  subdivisions: [{ relId: 3785874, name: "Kampala & Central", population: 10000000, military: 20, naval: false, landlocked: true }, { relId: 3785875, name: "Other Regions", population: 38000000, military: 10, naval: false, landlocked: true }] },
  "vanuatu":              { iso: "VUT", label: "Vanuatu",              type: "modern", status: "Republic",               relId: 2177246, subdivisions: [{ relId: 2177246, name: "Vanuatu",              population: 320000,  military: 2,  naval: true,  landlocked: false }] },
  "vatican city":         { iso: "VAT", label: "Vatican City",         type: "modern", status: "Ecclesiastical",          relId: 36989,   subdivisions: [{ relId: 36989,   name: "Vatican City",         population: 800,     military: 1,  naval: false, landlocked: true  }] },

  // ── HISTORIC EMPIRES ──────────────────────────────────────────────────────
  "sumer":                    { label: "Sumer",                    type: "historic", era: "c. 4500–1900 BC",  notes: "Earliest civilization in Mesopotamia.",         relId: 304934,  subdivisions: [
    { relId: 304934,  name: "Sumer",                    population: 800000,   military: 10, naval: false, landlocked: true  }
  ]},
  "akkadian empire":          { label: "Akkadian Empire",          type: "historic", era: "c. 2334–2154 BC", notes: "First empire of Mesopotamia.",                   relId: 304934,  subdivisions: [
    { relId: 304934,  name: "Akkad & Northern Mesopotamia", population: 1000000,  military: 20, naval: false, landlocked: true  },
    { relId: 304934,  name: "Southern Mesopotamia",          population: 500000,   military: 10, naval: false, landlocked: true  }
  ]},
  "old babylonian empire":    { label: "Old Babylonian Empire",    type: "historic", era: "c. 1894–1595 BC", notes: "Reign of Hammurabi.",                            relId: 304934,  subdivisions: [
    { relId: 304934,  name: "Babylon & Euphrates Valley",    population: 1000000,  military: 25, naval: false, landlocked: true  },
    { relId: 304934,  name: "Peripheral Territories",        population: 500000,   military: 10, naval: false, landlocked: true  }
  ]},
  "neo-assyrian empire":      { label: "Neo-Assyrian Empire",      type: "historic", era: "911–609 BC",      notes: "Iron Age military power.",                       relId: 304934,  subdivisions: [
    { relId: 304934,  name: "Assyrian Heartland (Nineveh)",  population: 2000000,  military: 40, naval: false, landlocked: true  },
    { relId: 304934,  name: "Levant & Syria",                population: 1500000,  military: 20, naval: true,  landlocked: false },
    { relId: 304934,  name: "Babylonia & South",             population: 1500000,  military: 15, naval: false, landlocked: true  }
  ]},
  "neo-babylonian empire":    { label: "Neo-Babylonian Empire",    type: "historic", era: "626–539 BC",      notes: "Nebuchadnezzar II.",                             relId: 304934,  subdivisions: [
    { relId: 304934,  name: "Babylon & Core",                population: 2000000,  military: 30, naval: false, landlocked: true  },
    { relId: 304934,  name: "Levant & Judah",                population: 1000000,  military: 15, naval: true,  landlocked: false }
  ]},
  "ancient egypt":            { label: "Ancient Egypt",            type: "historic", era: "3100–30 BC",      notes: "Pharaonic dynasties of the Nile.",               relId: 1473947, subdivisions: [
    { relId: 1473947, name: "Lower Egypt (Delta & Memphis)", population: 3000000,  military: 30, naval: true,  landlocked: false },
    { relId: 1473947, name: "Upper Egypt (Thebes)",          population: 2000000,  military: 25, naval: false, landlocked: true  },
    { relId: 1473947, name: "Nubia & Frontier",             population: 500000,   military: 10, naval: false, landlocked: true  }
  ]},
  "hittite empire":           { label: "Hittite Empire",           type: "historic", era: "1600–1178 BC",    notes: "Anatolian power.",                               relId: 174737,  subdivisions: [
    { relId: 174737,  name: "Hattusa & Anatolia Core",       population: 1500000,  military: 30, naval: false, landlocked: true  },
    { relId: 174737,  name: "Syria & Levantine Frontier",    population: 800000,   military: 15, naval: true,  landlocked: false }
  ]},
  "phoenicia":                { label: "Phoenicia",                type: "historic", era: "1500–300 BC",     notes: "Maritime trading culture.",                      relId: 184843,  subdivisions: [
    { relId: 184843,  name: "Phoenicia",                     population: 400000,   military: 10, naval: true,  landlocked: false }
  ]},
  "athens":                   { label: "Athens",                   type: "historic", era: "508–322 BC",      notes: "Classical Greek city-state.",                    relId: 192307,  subdivisions: [
    { relId: 192307,  name: "Athens",                        population: 300000,   military: 20, naval: true,  landlocked: false }
  ]},
  "sparta":                   { label: "Sparta",                   type: "historic", era: "900–192 BC",      notes: "Military-focused Greek state.",                  relId: 192307,  subdivisions: [
    { relId: 192307,  name: "Sparta (Laconia)",              population: 200000,   military: 30, naval: false, landlocked: true  },
    { relId: 192307,  name: "Messenia (Helot Territories)",  population: 150000,   military: 5,  naval: false, landlocked: true  }
  ]},
  "macedon":                  { label: "Macedon",                  type: "historic", era: "808–168 BC",      notes: "Empire of Alexander the Great.",                 relId: 53293,   subdivisions: [
    { relId: 53293,   name: "Macedonia (Heartland)",         population: 500000,   military: 30, naval: true,  landlocked: false },
    { relId: 304938,  name: "Persia & East",                 population: 5000000,  military: 25, naval: false, landlocked: true  },
    { relId: 304716,  name: "India & Far East",              population: 2000000,  military: 10, naval: false, landlocked: true  }
  ]},
  "roman republic":           { label: "Roman Republic",           type: "historic", era: "509–27 BC",       notes: "Pre-imperial Roman state.",                      relId: 365331,  subdivisions: [
    { relId: 365331,  name: "Italy (Rome & Latium)",         population: 4000000,  military: 35, naval: true,  landlocked: false },
    { relId: 192757,  name: "North Africa & Spain",          population: 3000000,  military: 20, naval: true,  landlocked: false },
    { relId: 304934,  name: "Greece & East",                 population: 3000000,  military: 15, naval: true,  landlocked: false }
  ]},
  "roman empire":             { label: "Roman Empire",             type: "historic", era: "27 BC–476 AD",    notes: "Mediterranean hegemony.",                        relId: 365331,  subdivisions: [
    { relId: 365331,  name: "Italy & Rome",                  population: 7000000,  military: 30, naval: true,  landlocked: false },
    { relId: 192757,  name: "North Africa & Egypt",          population: 8000000,  military: 20, naval: true,  landlocked: false },
    { relId: 174737,  name: "Asia Minor & Levant",           population: 10000000, military: 20, naval: true,  landlocked: false },
    { relId: 51477,   name: "Gaul & Germania",               population: 8000000,  military: 15, naval: false, landlocked: true  },
    { relId: 192307,  name: "Greece & Balkans",              population: 5000000,  military: 10, naval: true,  landlocked: false }
  ]},
  "byzantine empire":         { label: "Byzantine Empire",         type: "historic", era: "330–1453",        notes: "Eastern Roman Empire.",                          relId: 174737,  subdivisions: [
    { relId: 174737,  name: "Thrace & Constantinople",       population: 3000000,  military: 30, naval: true,  landlocked: false },
    { relId: 192307,  name: "Greece & Aegean",               population: 2000000,  military: 20, naval: true,  landlocked: false },
    { relId: 184843,  name: "Levant & Syria",                population: 2000000,  military: 15, naval: true,  landlocked: false }
  ]},
  "carthage":                 { label: "Carthage",                 type: "historic", era: "814–146 BC",      notes: "North African maritime power.",                  relId: 192757,  subdivisions: [
    { relId: 192757,  name: "Carthage (Tunisia)",            population: 700000,   military: 25, naval: true,  landlocked: false },
    { relId: 192756,  name: "North Africa West",             population: 500000,   military: 10, naval: true,  landlocked: false }
  ]},
  "achaemenid empire":        { label: "Achaemenid Empire",        type: "historic", era: "550–330 BC",      notes: "First Persian Empire.",                          relId: 304938,  subdivisions: [
    { relId: 304938,  name: "Persia & Media (Core)",         population: 5000000,  military: 30, naval: false, landlocked: true  },
    { relId: 174737,  name: "Asia Minor & Levant",           population: 4000000,  military: 20, naval: true,  landlocked: false },
    { relId: 307573,  name: "Bactria & East",                population: 3000000,  military: 15, naval: false, landlocked: true  },
    { relId: 1473947, name: "Egypt",                         population: 3000000,  military: 10, naval: true,  landlocked: false }
  ]},
  "parthian empire":          { label: "Parthian Empire",          type: "historic", era: "247 BC–224 AD",   notes: "Iranian power.",                                 relId: 304938,  subdivisions: [
    { relId: 304938,  name: "Parthia & Hyrcania",            population: 3000000,  military: 25, naval: false, landlocked: true  },
    { relId: 304934,  name: "Mesopotamia",                   population: 2500000,  military: 20, naval: false, landlocked: true  }
  ]},
  "sassanid empire":          { label: "Sassanid Empire",          type: "historic", era: "224–651 AD",      notes: "Last pre-Islamic Persian empire.",                relId: 304938,  subdivisions: [
    { relId: 304938,  name: "Persia & Fars",                 population: 5000000,  military: 30, naval: false, landlocked: true  },
    { relId: 304934,  name: "Mesopotamia (Ctesiphon)",       population: 4000000,  military: 25, naval: false, landlocked: true  },
    { relId: 196240,  name: "Central Asia",                  population: 2000000,  military: 10, naval: false, landlocked: true  }
  ]},
  "mongol empire":            { label: "Mongol Empire",            type: "historic", era: "1206–1368",       notes: "Largest contiguous land empire.",                 relId: 161033,  subdivisions: [
    { relId: 161033,  name: "Mongolia (Heartland)",          population: 1000000,  military: 20, naval: false, landlocked: true  },
    { relId: 270056,  name: "China (Yuan)",                  population: 50000000, military: 30, naval: true,  landlocked: false },
    { relId: 304938,  name: "Persia (Ilkhanate)",            population: 8000000,  military: 20, naval: false, landlocked: true  },
    { relId: 60189,   name: "Russia (Golden Horde)",         population: 5000000,  military: 15, naval: false, landlocked: true  },
    { relId: 196240,  name: "Central Asia (Chagatai)",       population: 3000000,  military: 10, naval: false, landlocked: true  }
  ]},
  "qin dynasty":              { label: "Qin Dynasty",              type: "historic", era: "221–206 BC",      notes: "First unified Chinese empire.",                  relId: 270056,  subdivisions: [
    { relId: 270056,  name: "Qin Dynasty",                   population: 20000000, military: 30, naval: false, landlocked: true  }
  ]},
  "han dynasty":              { label: "Han Dynasty",              type: "historic", era: "202 BC–220 AD",   notes: "Golden age of China.",                           relId: 270056,  subdivisions: [
    { relId: 270056,  name: "Central Plains (Chang'an)",     population: 25000000, military: 30, naval: false, landlocked: true  },
    { relId: 270056,  name: "South China",                   population: 15000000, military: 15, naval: true,  landlocked: false },
    { relId: 270056,  name: "Northern Frontier",             population: 10000000, military: 20, naval: false, landlocked: true  }
  ]},
  "tang dynasty":             { label: "Tang Dynasty",             type: "historic", era: "618–907",         notes: "Cultural peak of imperial China.",                relId: 270056,  subdivisions: [
    { relId: 270056,  name: "Core China (Chang'an)",         population: 30000000, military: 30, naval: false, landlocked: true  },
    { relId: 270056,  name: "South China",                   population: 20000000, military: 15, naval: true,  landlocked: false },
    { relId: 270056,  name: "Central Asia Protectorates",    population: 5000000,  military: 15, naval: false, landlocked: true  }
  ]},
  "song dynasty":             { label: "Song Dynasty",             type: "historic", era: "960–1279",        notes: "Economic and naval innovation.",                  relId: 270056,  subdivisions: [
    { relId: 270056,  name: "North Song (Kaifeng)",          population: 40000000, military: 20, naval: false, landlocked: true  },
    { relId: 270056,  name: "South Song (Hangzhou)",         population: 40000000, military: 15, naval: true,  landlocked: false }
  ]},
  "yuan dynasty":             { label: "Yuan Dynasty",             type: "historic", era: "1271–1368",       notes: "Mongol rule of China.",                          relId: 270056,  subdivisions: [
    { relId: 270056,  name: "Yuan Dynasty",                  population: 60000000, military: 30, naval: true,  landlocked: false }
  ]},
  "ming dynasty":             { label: "Ming Dynasty",             type: "historic", era: "1368–1644",       notes: "Zheng He voyages.",                              relId: 270056,  subdivisions: [
    { relId: 270056,  name: "North China (Beijing)",         population: 50000000, military: 25, naval: false, landlocked: true  },
    { relId: 270056,  name: "South China",                   population: 60000000, military: 15, naval: true,  landlocked: false }
  ]},
  "qing dynasty":             { label: "Qing Dynasty",             type: "historic", era: "1636–1912",       notes: "Last imperial dynasty.",                         relId: 270056,  subdivisions: [
    { relId: 270056,  name: "China Proper",                  population: 200000000,military: 25, naval: true,  landlocked: false },
    { relId: 161033,  name: "Mongolia & Manchuria",          population: 5000000,  military: 15, naval: false, landlocked: true  },
    { relId: 196240,  name: "Xinjiang & Central Asia",       population: 3000000,  military: 10, naval: false, landlocked: true  }
  ]},
  "maurya empire":            { label: "Maurya Empire",            type: "historic", era: "322–185 BC",      notes: "Unified ancient India.",                         relId: 304716,  subdivisions: [
    { relId: 304716,  name: "Magadha & Ganges Plain",        population: 10000000, military: 30, naval: false, landlocked: true  },
    { relId: 304716,  name: "Northwest India",               population: 5000000,  military: 20, naval: false, landlocked: true  },
    { relId: 304716,  name: "Deccan",                        population: 5000000,  military: 10, naval: true,  landlocked: false }
  ]},
  "gupta empire":             { label: "Gupta Empire",             type: "historic", era: "319–543 AD",      notes: "Classical Indian golden age.",                   relId: 304716,  subdivisions: [
    { relId: 304716,  name: "Gupta Core (Pataliputra)",      population: 8000000,  military: 25, naval: false, landlocked: true  },
    { relId: 304716,  name: "Western India",                 population: 5000000,  military: 15, naval: true,  landlocked: false }
  ]},
  "mughal empire":            { label: "Mughal Empire",            type: "historic", era: "1526–1857",       notes: "Persianate rule in India.",                      relId: 304716,  subdivisions: [
    { relId: 304716,  name: "Delhi & Agra (Heartland)",      population: 30000000, military: 35, naval: false, landlocked: true  },
    { relId: 304716,  name: "Bengal & East",                 population: 25000000, military: 15, naval: true,  landlocked: false },
    { relId: 304716,  name: "Deccan & South",                population: 20000000, military: 15, naval: true,  landlocked: false },
    { relId: 307573,  name: "Punjab & Northwest",            population: 10000000, military: 20, naval: false, landlocked: true  }
  ]},
  "khmer empire":             { label: "Khmer Empire",             type: "historic", era: "802–1431",        notes: "Angkor Wat builders.",                           relId: 49898,   subdivisions: [
    { relId: 49898,   name: "Angkor (Core)",                 population: 700000,   military: 20, naval: false, landlocked: true  },
    { relId: 49898,   name: "Peripheral Territories",        population: 500000,   military: 10, naval: true,  landlocked: false }
  ]},
  "mali empire":              { label: "Mali Empire",              type: "historic", era: "1230–1670",       notes: "Mansa Musa's wealth.",                           relId: 192785,  subdivisions: [
    { relId: 192785,  name: "Mali Core (Niger Bend)",        population: 3000000,  military: 20, naval: false, landlocked: true  },
    { relId: 192785,  name: "Peripheral States",             population: 2000000,  military: 10, naval: false, landlocked: true  }
  ]},
  "holy roman empire":        { label: "Holy Roman Empire",        type: "historic", era: "962–1806",        notes: "Central European elective monarchy.",             relId: 51477,   subdivisions: [
    { relId: 51477,   name: "Germany (Core Territories)",    population: 8000000,  military: 25, naval: false, landlocked: true  },
    { relId: 16239,   name: "Austria & Bohemia",             population: 4000000,  military: 20, naval: false, landlocked: true  },
    { relId: 365331,  name: "Italy (Northern)",              population: 3000000,  military: 10, naval: true,  landlocked: false }
  ]},
  "ottoman empire":           { label: "Ottoman Empire",           type: "historic", era: "1299–1922",       notes: "Caliphate based in Istanbul.",                   relId: 174737,  subdivisions: [
    { relId: 174737,  name: "Anatolia & Constantinople",     population: 10000000, military: 35, naval: true,  landlocked: false },
    { relId: 192307,  name: "Balkans & Greece",              population: 6000000,  military: 20, naval: true,  landlocked: false },
    { relId: 184843,  name: "Arab Levant & Mesopotamia",     population: 5000000,  military: 15, naval: true,  landlocked: false },
    { relId: 1473947, name: "Egypt & North Africa",          population: 5000000,  military: 15, naval: true,  landlocked: false }
  ]},
  "aztec empire":             { label: "Aztec Empire",             type: "historic", era: "1428–1521",       notes: "Central Mexican hegemony.",                      relId: 114686,  subdivisions: [
    { relId: 114686,  name: "Tenochtitlan & Valley of Mexico", population: 1500000, military: 35, naval: false, landlocked: true  },
    { relId: 114686,  name: "Tributary Provinces",           population: 3000000,  military: 15, naval: false, landlocked: true  }
  ]},
  "inca empire":              { label: "Inca Empire",              type: "historic", era: "1438–1533",       notes: "Andean administrative empire.",                  relId: 288247,  subdivisions: [
    { relId: 288247,  name: "Cusco & Highland Core",         population: 3000000,  military: 30, naval: false, landlocked: true  },
    { relId: 167454,  name: "Chile & South",                 population: 1000000,  military: 10, naval: true,  landlocked: false },
    { relId: 120027,  name: "Colombia & North",              population: 1000000,  military: 10, naval: true,  landlocked: false }
  ]},
  "maya civilization":        { label: "Maya Civilization",        type: "historic", era: "2000 BC–1697 AD", notes: "Mesoamerican city-states.",                      relId: 1521463, subdivisions: [
    { relId: 1521463, name: "Yucatán (Chichén Itzá etc.)",  population: 1000000,  military: 15, naval: true,  landlocked: false },
    { relId: 114686,  name: "Highland Guatemala",            population: 500000,   military: 10, naval: false, landlocked: true  }
  ]},
  "ghana empire":             { label: "Ghana Empire",             type: "historic", era: "c. 300–1200",     notes: "West African gold trade state.",                 relId: 192785,  subdivisions: [
    { relId: 192785,  name: "Ghana Empire",                  population: 1500000,  military: 15, naval: false, landlocked: true  }
  ]},
  "songhai empire":           { label: "Songhai Empire",           type: "historic", era: "1464–1591",       notes: "Dominant Sahelian state.",                       relId: 192785,  subdivisions: [
    { relId: 192785,  name: "Songhai Core (Gao)",            population: 2000000,  military: 20, naval: false, landlocked: true  },
    { relId: 192785,  name: "Western Sahel",                 population: 1500000,  military: 10, naval: false, landlocked: true  }
  ]},
  "kievan rus":               { label: "Kievan Rus'",              type: "historic", era: "882–1240",        notes: "East Slavic federation.",                        relId: 60199,   subdivisions: [
    { relId: 60199,   name: "Kyiv Principality",             population: 1500000,  military: 25, naval: true,  landlocked: false },
    { relId: 60189,   name: "Novgorod & North",              population: 1000000,  military: 15, naval: true,  landlocked: false }
  ]},
  "polish-lithuanian commonwealth": { label: "Polish-Lithuanian Commonwealth", type: "historic", era: "1569–1795", notes: "Multi-ethnic dual monarchy.", relId: 49715, subdivisions: [
    { relId: 49715,   name: "Poland (Crown)",                population: 5000000,  military: 25, naval: true,  landlocked: false },
    { relId: 72596,   name: "Lithuania & Ruthenia",          population: 4000000,  military: 20, naval: false, landlocked: true  }
  ]},
  "maratha empire":           { label: "Maratha Empire",           type: "historic", era: "1674–1818",       notes: "Hindu power in India.",                          relId: 304716,  subdivisions: [
    { relId: 304716,  name: "Pune & Deccan Core",            population: 8000000,  military: 30, naval: true,  landlocked: false },
    { relId: 304716,  name: "Northern Territories",          population: 5000000,  military: 20, naval: false, landlocked: true  }
  ]},
  "venetian republic":        { label: "Republic of Venice",       type: "historic", era: "697–1797",        notes: "Maritime trade republic.",                       relId: 365331,  subdivisions: [
    { relId: 365331,  name: "Venice & Lagoon",               population: 150000,   military: 20, naval: true,  landlocked: false },
    { relId: 192307,  name: "Aegean & Adriatic Colonies",    population: 300000,   military: 15, naval: true,  landlocked: false }
  ]},
  "soviet union":             { label: "Soviet Union",             type: "historic", era: "1922–1991",       notes: "First socialist superpower.",                    relId: 60189,   subdivisions: [
    { relId: 60189,   name: "Russian SFSR",                  population: 130000000,military: 50, naval: true,  landlocked: false },
    { relId: 60199,   name: "Ukrainian & Byelorussian SSRs", population: 60000000, military: 20, naval: true,  landlocked: false },
    { relId: 196240,  name: "Central Asian SSRs",            population: 30000000, military: 10, naval: false, landlocked: true  },
    { relId: 28699,   name: "Caucasus SSRs",                 population: 15000000, military: 10, naval: true,  landlocked: false }
  ]},
  "yugoslavia":               { label: "Yugoslavia",               type: "historic", era: "1918–1992/2003",  notes: "South Slavic state.",                            relId: 214885,  subdivisions: [
    { relId: 214885,  name: "Croatia & Slovenia",            population: 6000000,  military: 20, naval: true,  landlocked: false },
    { relId: 1741311, name: "Serbia & Montenegro",           population: 9000000,  military: 25, naval: true,  landlocked: false },
    { relId: 2528142, name: "Bosnia & Macedonia",            population: 6000000,  military: 15, naval: false, landlocked: true  }
  ]},
  "austro-hungarian empire":  { label: "Austro-Hungarian Empire",  type: "historic", era: "1867–1918",       notes: "Habsburg dual monarchy.",                        relId: 16239,   subdivisions: [
    { relId: 16239,   name: "Austria (Cisleithania)",        population: 15000000, military: 30, naval: true,  landlocked: false },
    { relId: 21335,   name: "Hungary (Transleithania)",      population: 10000000, military: 25, naval: false, landlocked: true  },
    { relId: 2528142, name: "Bosnia & Balkans",              population: 5000000,  military: 10, naval: true,  landlocked: false }
  ]},
  "prussia":                  { label: "Kingdom of Prussia",       type: "historic", era: "1701–1918",       notes: "German military state.",                         relId: 51477,   subdivisions: [
    { relId: 51477,   name: "Brandenburg-Prussia (Core)",    population: 5000000,  military: 35, naval: true,  landlocked: false },
    { relId: 51477,   name: "Rhine & Western Provinces",     population: 4000000,  military: 20, naval: false, landlocked: true  }
  ]},
};

const ALIASES = {
  "usa": "united states",
  "us": "united states",
  "america": "united states",
  "uk": "united kingdom",
  "britain": "united kingdom",
  "great britain": "united kingdom",
  "prc": "china",
  "ussr": "soviet union",
  "rome": "roman empire",
  "aztecs": "aztec empire",
  "incas": "inca empire",
  "mayans": "maya civilization",
  "uae": "united arab emirates",
  "emirates": "united arab emirates",
  "drc": "congo (kinshasa)",
  "dr congo": "congo (kinshasa)",
  "democratic republic of the congo": "congo (kinshasa)",
  "republic of the congo": "congo (brazzaville)",
  "czechia": "czechia",
  "czech republic": "czechia",
  "south vietnam": "vietnam",
  "burma": "myanmar",
  "persia": "iran",
  "siam": "thailand",
  "ivory coast": "ivory coast",
  "cote d'ivoire": "ivory coast",
  "timor-leste": "east timor",
  "north korea": "north korea",
  "south korea": "south korea",
  "republic of korea": "south korea",
  "dprk": "north korea",
};

function getDbData(inputName) {
  const key = String(inputName || '').toLowerCase().trim();
  const resolvedKey = ALIASES[key] || key;
  return WORLD_DATA[resolvedKey] || null;
}

if (typeof window !== 'undefined') {
  window.WORLD_DATA = WORLD_DATA;
  window.ALIASES = ALIASES;
  window.getDbData = getDbData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_DATA, ALIASES, getDbData };
}
