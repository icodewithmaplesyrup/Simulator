// world_data_master.js
const WORLD_DATA = {
  "united states": {
    "iso": "USA",
    "label": "United States",
    "type": "modern",
    "status": "Federal republic",
    "subdivisions": [
      {
        "name": "Northeast",
        "population": 57000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Midwest",
        "population": 69000000,
        "military": 15,
        "naval": false,
        "landlocked": true
      },
      {
        "name": "South",
        "population": 127000000,
        "military": 40,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "West",
        "population": 78000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Territories & Outlying",
        "population": 4000000,
        "military": 5,
        "naval": true,
        "landlocked": false
      }
    ]
  },
  "afghanistan": {
    "iso": "AFG",
    "label": "Afghanistan",
    "type": "modern",
    "status": "Islamic Emirate"
  },
  "albania": {
    "iso": "ALB",
    "label": "Albania",
    "type": "modern",
    "status": "Republic"
  },
  "algeria": {
    "iso": "DZA",
    "label": "Algeria",
    "type": "modern",
    "status": "Republic"
  },
  "andorra": {
    "iso": "AND",
    "label": "Andorra",
    "type": "modern",
    "status": "Principality"
  },
  "angola": {
    "iso": "AGO",
    "label": "Angola",
    "type": "modern",
    "status": "Republic"
  },
  "antigua and barbuda": {
    "iso": "ATG",
    "label": "Antigua and Barbuda",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "argentina": {
    "iso": "ARG",
    "label": "Argentina",
    "type": "modern",
    "status": "Federal republic"
  },
  "armenia": {
    "iso": "ARM",
    "label": "Armenia",
    "type": "modern",
    "status": "Republic"
  },
  "australia": {
    "iso": "AUS",
    "label": "Australia",
    "type": "modern",
    "status": "Federal constitutional monarchy"
  },
  "austria": {
    "iso": "AUT",
    "label": "Austria",
    "type": "modern",
    "status": "Federal republic"
  },
  "azerbaijan": {
    "iso": "AZE",
    "label": "Azerbaijan",
    "type": "modern",
    "status": "Republic"
  },
  "bahamas": {
    "iso": "BHS",
    "label": "Bahamas",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "bahrain": {
    "iso": "BHR",
    "label": "Bahrain",
    "type": "modern",
    "status": "Monarchy"
  },
  "bangladesh": {
    "iso": "BGD",
    "label": "Bangladesh",
    "type": "modern",
    "status": "Republic"
  },
  "barbados": {
    "iso": "BRB",
    "label": "Barbados",
    "type": "modern",
    "status": "Republic"
  },
  "belarus": {
    "iso": "BLR",
    "label": "Belarus",
    "type": "modern",
    "status": "Republic"
  },
  "belgium": {
    "iso": "BEL",
    "label": "Belgium",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "belize": {
    "iso": "BLZ",
    "label": "Belize",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "benin": {
    "iso": "BEN",
    "label": "Benin",
    "type": "modern",
    "status": "Republic"
  },
  "bhutan": {
    "iso": "BTN",
    "label": "Bhutan",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "bolivia": {
    "iso": "BOL",
    "label": "Bolivia",
    "type": "modern",
    "status": "Republic"
  },
  "bosnia and herzegovina": {
    "iso": "BIH",
    "label": "Bosnia and Herzegovina",
    "type": "modern",
    "status": "Federal republic"
  },
  "botswana": {
    "iso": "BWA",
    "label": "Botswana",
    "type": "modern",
    "status": "Republic"
  },
  "brazil": {
    "iso": "BRA",
    "label": "Brazil",
    "type": "modern",
    "status": "Federal republic",
    "subdivisions": [
      {
        "name": "Southeast",
        "population": 89000000,
        "military": 40,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Northeast",
        "population": 57000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "South",
        "population": 30000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "North",
        "population": 18000000,
        "military": 10,
        "naval": false,
        "landlocked": true
      },
      {
        "name": "Central-West",
        "population": 16000000,
        "military": 10,
        "naval": false,
        "landlocked": true
      }
    ]
  },
  "brunei": {
    "iso": "BRN",
    "label": "Brunei",
    "type": "modern",
    "status": "Absolute monarchy"
  },
  "bulgaria": {
    "iso": "BGR",
    "label": "Bulgaria",
    "type": "modern",
    "status": "Republic"
  },
  "burkina faso": {
    "iso": "BFA",
    "label": "Burkina Faso",
    "type": "modern",
    "status": "Republic"
  },
  "burundi": {
    "iso": "BDI",
    "label": "Burundi",
    "type": "modern",
    "status": "Republic"
  },
  "cambodia": {
    "iso": "KHM",
    "label": "Cambodia",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "cameroon": {
    "iso": "CMR",
    "label": "Cameroon",
    "type": "modern",
    "status": "Republic"
  },
  "canada": {
    "iso": "CAN",
    "label": "Canada",
    "type": "modern",
    "status": "Federal democracy",
    "subdivisions": [
      {
        "name": "Ontario",
        "population": 14000000,
        "military": 30,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Quebec",
        "population": 8500000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Western Canada",
        "population": 11000000,
        "military": 30,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Atlantic & Territories",
        "population": 3000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      }
    ]
  },
  "cape verde": {
    "iso": "CPV",
    "label": "Cape Verde",
    "type": "modern",
    "status": "Republic"
  },
  "central african republic": {
    "iso": "CAF",
    "label": "Central African Republic",
    "type": "modern",
    "status": "Republic"
  },
  "chad": {
    "iso": "TCD",
    "label": "Chad",
    "type": "modern",
    "status": "Republic"
  },
  "chile": {
    "iso": "CHL",
    "label": "Chile",
    "type": "modern",
    "status": "Republic"
  },
  "china": {
    "iso": "CHN",
    "label": "China",
    "type": "modern",
    "status": "People's Republic",
    "subdivisions": [
      {
        "name": "East Coast",
        "population": 400000000,
        "military": 40,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Central",
        "population": 400000000,
        "military": 20,
        "naval": false,
        "landlocked": true
      },
      {
        "name": "South",
        "population": 250000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "North/Northeast",
        "population": 200000000,
        "military": 10,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "West/Autonomous",
        "population": 150000000,
        "military": 10,
        "naval": false,
        "landlocked": true
      }
    ]
  },
  "colombia": {
    "iso": "COL",
    "label": "Colombia",
    "type": "modern",
    "status": "Republic"
  },
  "comoros": {
    "iso": "COM",
    "label": "Comoros",
    "type": "modern",
    "status": "Republic"
  },
  "congo (brazzaville)": {
    "iso": "COG",
    "label": "Congo",
    "type": "modern",
    "status": "Republic"
  },
  "congo (kinshasa)": {
    "iso": "COD",
    "label": "Democratic Republic of the Congo",
    "type": "modern",
    "status": "Republic"
  },
  "costa rica": {
    "iso": "CRI",
    "label": "Costa Rica",
    "type": "modern",
    "status": "Republic"
  },
  "croatia": {
    "iso": "HRV",
    "label": "Croatia",
    "type": "modern",
    "status": "Republic"
  },
  "cuba": {
    "iso": "CUB",
    "label": "Cuba",
    "type": "modern",
    "status": "Socialist republic"
  },
  "cyprus": {
    "iso": "CYP",
    "label": "Cyprus",
    "type": "modern",
    "status": "Republic"
  },
  "czechia": {
    "iso": "CZE",
    "label": "Czechia",
    "type": "modern",
    "status": "Republic"
  },
  "denmark": {
    "iso": "DNK",
    "label": "Denmark",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "djibouti": {
    "iso": "DJI",
    "label": "Djibouti",
    "type": "modern",
    "status": "Republic"
  },
  "dominica": {
    "iso": "DMA",
    "label": "Dominica",
    "type": "modern",
    "status": "Republic"
  },
  "dominican republic": {
    "iso": "DOM",
    "label": "Dominican Republic",
    "type": "modern",
    "status": "Republic"
  },
  "east timor": {
    "iso": "TLS",
    "label": "East Timor",
    "type": "modern",
    "status": "Republic"
  },
  "ecuador": {
    "iso": "ECU",
    "label": "Ecuador",
    "type": "modern",
    "status": "Republic"
  },
  "egypt": {
    "iso": "EGY",
    "label": "Egypt",
    "type": "modern",
    "status": "Republic"
  },
  "el salvador": {
    "iso": "SLV",
    "label": "El Salvador",
    "type": "modern",
    "status": "Republic"
  },
  "equatorial guinea": {
    "iso": "GNQ",
    "label": "Equatorial Guinea",
    "type": "modern",
    "status": "Republic"
  },
  "eritrea": {
    "iso": "ERI",
    "label": "Eritrea",
    "type": "modern",
    "status": "Republic"
  },
  "estonia": {
    "iso": "EST",
    "label": "Estonia",
    "type": "modern",
    "status": "Republic"
  },
  "eswatini": {
    "iso": "SWZ",
    "label": "Eswatini",
    "type": "modern",
    "status": "Monarchy"
  },
  "ethiopia": {
    "iso": "ETH",
    "label": "Ethiopia",
    "type": "modern",
    "status": "Federal republic"
  },
  "fiji": {
    "iso": "FJI",
    "label": "Fiji",
    "type": "modern",
    "status": "Republic"
  },
  "finland": {
    "iso": "FIN",
    "label": "Finland",
    "type": "modern",
    "status": "Republic"
  },
  "france": {
    "iso": "FRA",
    "label": "France",
    "type": "modern",
    "status": "Unitary republic",
    "subdivisions": [
      {
        "name": "Metropolitan Regions",
        "population": 65000000,
        "military": 90,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Overseas Regions",
        "population": 3000000,
        "military": 10,
        "naval": true,
        "landlocked": false
      }
    ]
  },
  "gabon": {
    "iso": "GAB",
    "label": "Gabon",
    "type": "modern",
    "status": "Republic"
  },
  "gambia": {
    "iso": "GMB",
    "label": "Gambia",
    "type": "modern",
    "status": "Republic"
  },
  "georgia": {
    "iso": "GEO",
    "label": "Georgia",
    "type": "modern",
    "status": "Republic"
  },
  "germany": {
    "iso": "DEU",
    "label": "Germany",
    "type": "modern",
    "status": "Federal republic",
    "subdivisions": [
      {
        "name": "Western States",
        "population": 45000000,
        "military": 40,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Southern States",
        "population": 25000000,
        "military": 30,
        "naval": false,
        "landlocked": true
      },
      {
        "name": "Eastern States & Berlin",
        "population": 13000000,
        "military": 30,
        "naval": true,
        "landlocked": false
      }
    ]
  },
  "ghana": {
    "iso": "GHA",
    "label": "Ghana",
    "type": "modern",
    "status": "Republic"
  },
  "greece": {
    "iso": "GRC",
    "label": "Greece",
    "type": "modern",
    "status": "Republic"
  },
  "grenada": {
    "iso": "GRD",
    "label": "Grenada",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "guatemala": {
    "iso": "GTM",
    "label": "Guatemala",
    "type": "modern",
    "status": "Republic"
  },
  "guinea": {
    "iso": "GIN",
    "label": "Guinea",
    "type": "modern",
    "status": "Republic"
  },
  "guinea-bissau": {
    "iso": "GNB",
    "label": "Guinea-Bissau",
    "type": "modern",
    "status": "Republic"
  },
  "guyana": {
    "iso": "GUY",
    "label": "Guyana",
    "type": "modern",
    "status": "Republic"
  },
  "haiti": {
    "iso": "HTI",
    "label": "Haiti",
    "type": "modern",
    "status": "Republic"
  },
  "honduras": {
    "iso": "HND",
    "label": "Honduras",
    "type": "modern",
    "status": "Republic"
  },
  "hungary": {
    "iso": "HUN",
    "label": "Hungary",
    "type": "modern",
    "status": "Republic"
  },
  "iceland": {
    "iso": "ISL",
    "label": "Iceland",
    "type": "modern",
    "status": "Republic"
  },
  "india": {
    "iso": "IND",
    "label": "India",
    "type": "modern",
    "status": "Federal republic",
    "subdivisions": [
      {
        "name": "North",
        "population": 380000000,
        "military": 30,
        "naval": false,
        "landlocked": true
      },
      {
        "name": "South",
        "population": 260000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "East",
        "population": 270000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "West",
        "population": 180000000,
        "military": 15,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Central & Northeast",
        "population": 150000000,
        "military": 15,
        "naval": false,
        "landlocked": true
      }
    ]
  },
  "indonesia": {
    "iso": "IDN",
    "label": "Indonesia",
    "type": "modern",
    "status": "Republic"
  },
  "iran": {
    "iso": "IRN",
    "label": "Iran",
    "type": "modern",
    "status": "Islamic republic"
  },
  "iraq": {
    "iso": "IRQ",
    "label": "Iraq",
    "type": "modern",
    "status": "Republic"
  },
  "ireland": {
    "iso": "IRL",
    "label": "Ireland",
    "type": "modern",
    "status": "Republic"
  },
  "israel": {
    "iso": "ISR",
    "label": "Israel",
    "type": "modern",
    "status": "Parliamentary democracy"
  },
  "italy": {
    "iso": "ITA",
    "label": "Italy",
    "type": "modern",
    "status": "Republic"
  },
  "ivory coast": {
    "iso": "CIV",
    "label": "Ivory Coast",
    "type": "modern",
    "status": "Republic"
  },
  "jamaica": {
    "iso": "JAM",
    "label": "Jamaica",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "japan": {
    "iso": "JPN",
    "label": "Japan",
    "type": "modern",
    "status": "Constitutional monarchy",
    "subdivisions": [
      {
        "name": "Honshu",
        "population": 104000000,
        "military": 70,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Kyushu & Shikoku",
        "population": 17000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Hokkaido",
        "population": 5000000,
        "military": 10,
        "naval": true,
        "landlocked": false
      }
    ]
  },
  "jordan": {
    "iso": "JOR",
    "label": "Jordan",
    "type": "modern",
    "status": "Monarchy"
  },
  "kazakhstan": {
    "iso": "KAZ",
    "label": "Kazakhstan",
    "type": "modern",
    "status": "Republic"
  },
  "kenya": {
    "iso": "KEN",
    "label": "Kenya",
    "type": "modern",
    "status": "Republic"
  },
  "kiribati": {
    "iso": "KIR",
    "label": "Kiribati",
    "type": "modern",
    "status": "Republic"
  },
  "kuwait": {
    "iso": "KWT",
    "label": "Kuwait",
    "type": "modern",
    "status": "Monarchy"
  },
  "kyrgyzstan": {
    "iso": "KGZ",
    "label": "Kyrgyzstan",
    "type": "modern",
    "status": "Republic"
  },
  "laos": {
    "iso": "LAO",
    "label": "Laos",
    "type": "modern",
    "status": "Socialist republic"
  },
  "latvia": {
    "iso": "LVA",
    "label": "Latvia",
    "type": "modern",
    "status": "Republic"
  },
  "lebanon": {
    "iso": "LBN",
    "label": "Lebanon",
    "type": "modern",
    "status": "Republic"
  },
  "lesotho": {
    "iso": "LSO",
    "label": "Lesotho",
    "type": "modern",
    "status": "Monarchy"
  },
  "liberia": {
    "iso": "LBR",
    "label": "Liberia",
    "type": "modern",
    "status": "Republic"
  },
  "libya": {
    "iso": "LBY",
    "label": "Libya",
    "type": "modern",
    "status": "Republic"
  },
  "liechtenstein": {
    "iso": "LIE",
    "label": "Liechtenstein",
    "type": "modern",
    "status": "Principality"
  },
  "lithuania": {
    "iso": "LTU",
    "label": "Lithuania",
    "type": "modern",
    "status": "Republic"
  },
  "luxembourg": {
    "iso": "LUX",
    "label": "Luxembourg",
    "type": "modern",
    "status": "Grand duchy"
  },
  "madagascar": {
    "iso": "MDG",
    "label": "Madagascar",
    "type": "modern",
    "status": "Republic"
  },
  "malawi": {
    "iso": "MWI",
    "label": "Malawi",
    "type": "modern",
    "status": "Republic"
  },
  "malaysia": {
    "iso": "MYS",
    "label": "Malaysia",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "maldives": {
    "iso": "MDV",
    "label": "Maldives",
    "type": "modern",
    "status": "Republic"
  },
  "mali": {
    "iso": "MLI",
    "label": "Mali",
    "type": "modern",
    "status": "Republic"
  },
  "malta": {
    "iso": "MLT",
    "label": "Malta",
    "type": "modern",
    "status": "Republic"
  },
  "marshall islands": {
    "iso": "MHL",
    "label": "Marshall Islands",
    "type": "modern",
    "status": "Republic"
  },
  "mauritania": {
    "iso": "MRT",
    "label": "Mauritania",
    "type": "modern",
    "status": "Republic"
  },
  "mauritius": {
    "iso": "MUS",
    "label": "Mauritius",
    "type": "modern",
    "status": "Republic"
  },
  "mexico": {
    "iso": "MEX",
    "label": "Mexico",
    "type": "modern",
    "status": "Federal republic"
  },
  "micronesia": {
    "iso": "FSM",
    "label": "Micronesia",
    "type": "modern",
    "status": "Federal republic"
  },
  "moldova": {
    "iso": "MDA",
    "label": "Moldova",
    "type": "modern",
    "status": "Republic"
  },
  "monaco": {
    "iso": "MCO",
    "label": "Monaco",
    "type": "modern",
    "status": "Principality"
  },
  "mongolia": {
    "iso": "MNG",
    "label": "Mongolia",
    "type": "modern",
    "status": "Republic"
  },
  "montenegro": {
    "iso": "MNE",
    "label": "Montenegro",
    "type": "modern",
    "status": "Republic"
  },
  "morocco": {
    "iso": "MAR",
    "label": "Morocco",
    "type": "modern",
    "status": "Monarchy"
  },
  "mozambique": {
    "iso": "MOZ",
    "label": "Mozambique",
    "type": "modern",
    "status": "Republic"
  },
  "myanmar": {
    "iso": "MMR",
    "label": "Myanmar",
    "type": "modern",
    "status": "Military junta"
  },
  "namibia": {
    "iso": "NAM",
    "label": "Namibia",
    "type": "modern",
    "status": "Republic"
  },
  "nauru": {
    "iso": "NRU",
    "label": "Nauru",
    "type": "modern",
    "status": "Republic"
  },
  "nepal": {
    "iso": "NPL",
    "label": "Nepal",
    "type": "modern",
    "status": "Federal republic"
  },
  "netherlands": {
    "iso": "NLD",
    "label": "Netherlands",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "new zealand": {
    "iso": "NZL",
    "label": "New Zealand",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "nicaragua": {
    "iso": "NIC",
    "label": "Nicaragua",
    "type": "modern",
    "status": "Republic"
  },
  "niger": {
    "iso": "NER",
    "label": "Niger",
    "type": "modern",
    "status": "Republic"
  },
  "nigeria": {
    "iso": "NGA",
    "label": "Nigeria",
    "type": "modern",
    "status": "Federal republic"
  },
  "north korea": {
    "iso": "PRK",
    "label": "North Korea",
    "type": "modern",
    "status": "Socialist republic"
  },
  "north macedonia": {
    "iso": "MKD",
    "label": "North Macedonia",
    "type": "modern",
    "status": "Republic"
  },
  "norway": {
    "iso": "NOR",
    "label": "Norway",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "oman": {
    "iso": "OMN",
    "label": "Oman",
    "type": "modern",
    "status": "Absolute monarchy"
  },
  "pakistan": {
    "iso": "PAK",
    "label": "Pakistan",
    "type": "modern",
    "status": "Federal republic"
  },
  "palau": {
    "iso": "PLW",
    "label": "Palau",
    "type": "modern",
    "status": "Republic"
  },
  "palestine": {
    "iso": "PSE",
    "label": "Palestine",
    "type": "modern",
    "status": "Observer state"
  },
  "panama": {
    "iso": "PAN",
    "label": "Panama",
    "type": "modern",
    "status": "Republic"
  },
  "papua new guinea": {
    "iso": "PNG",
    "label": "Papua New Guinea",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "paraguay": {
    "iso": "PRY",
    "label": "Paraguay",
    "type": "modern",
    "status": "Republic"
  },
  "peru": {
    "iso": "PER",
    "label": "Peru",
    "type": "modern",
    "status": "Republic"
  },
  "philippines": {
    "iso": "PHL",
    "label": "Philippines",
    "type": "modern",
    "status": "Republic"
  },
  "poland": {
    "iso": "POL",
    "label": "Poland",
    "type": "modern",
    "status": "Republic"
  },
  "portugal": {
    "iso": "PRT",
    "label": "Portugal",
    "type": "modern",
    "status": "Republic"
  },
  "qatar": {
    "iso": "QAT",
    "label": "Qatar",
    "type": "modern",
    "status": "Monarchy"
  },
  "romania": {
    "iso": "ROU",
    "label": "Romania",
    "type": "modern",
    "status": "Republic"
  },
  "russia": {
    "iso": "RUS",
    "label": "Russia",
    "type": "modern",
    "status": "Federal republic",
    "subdivisions": [
      {
        "name": "Central District",
        "population": 39000000,
        "military": 30,
        "naval": false,
        "landlocked": true
      },
      {
        "name": "Southern/Caucasian Districts",
        "population": 26000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Northwestern District",
        "population": 14000000,
        "military": 15,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Volga District",
        "population": 29000000,
        "military": 15,
        "naval": false,
        "landlocked": true
      },
      {
        "name": "Siberian/Far East Districts",
        "population": 25000000,
        "military": 20,
        "naval": true,
        "landlocked": false
      }
    ]
  },
  "rwanda": {
    "iso": "RWA",
    "label": "Rwanda",
    "type": "modern",
    "status": "Republic"
  },
  "saint kitts and nevis": {
    "iso": "KNA",
    "label": "Saint Kitts and Nevis",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "saint lucia": {
    "iso": "LCA",
    "label": "Saint Lucia",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "saint vincent and the grenadines": {
    "iso": "VCT",
    "label": "Saint Vincent and the Grenadines",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "samoa": {
    "iso": "WSM",
    "label": "Samoa",
    "type": "modern",
    "status": "Republic"
  },
  "san marino": {
    "iso": "SMR",
    "label": "San Marino",
    "type": "modern",
    "status": "Republic"
  },
  "sao tome and principe": {
    "iso": "STP",
    "label": "Sao Tome and Principe",
    "type": "modern",
    "status": "Republic"
  },
  "saudi arabia": {
    "iso": "SAU",
    "label": "Saudi Arabia",
    "type": "modern",
    "status": "Absolute monarchy"
  },
  "senegal": {
    "iso": "SEN",
    "label": "Senegal",
    "type": "modern",
    "status": "Republic"
  },
  "serbia": {
    "iso": "SRB",
    "label": "Serbia",
    "type": "modern",
    "status": "Republic"
  },
  "seychelles": {
    "iso": "SYC",
    "label": "Seychelles",
    "type": "modern",
    "status": "Republic"
  },
  "sierra leone": {
    "iso": "SLE",
    "label": "Sierra Leone",
    "type": "modern",
    "status": "Republic"
  },
  "singapore": {
    "iso": "SGP",
    "label": "Singapore",
    "type": "modern",
    "status": "Republic"
  },
  "slovakia": {
    "iso": "SVK",
    "label": "Slovakia",
    "type": "modern",
    "status": "Republic"
  },
  "slovenia": {
    "iso": "SVN",
    "label": "Slovenia",
    "type": "modern",
    "status": "Republic"
  },
  "solomon islands": {
    "iso": "SLB",
    "label": "Solomon Islands",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "somalia": {
    "iso": "SOM",
    "label": "Somalia",
    "type": "modern",
    "status": "Federal republic"
  },
  "south africa": {
    "iso": "ZAF",
    "label": "South Africa",
    "type": "modern",
    "status": "Republic"
  },
  "south korea": {
    "iso": "KOR",
    "label": "South Korea",
    "type": "modern",
    "status": "Republic"
  },
  "south sudan": {
    "iso": "SSD",
    "label": "South Sudan",
    "type": "modern",
    "status": "Republic"
  },
  "spain": {
    "iso": "ESP",
    "label": "Spain",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "sri lanka": {
    "iso": "LKA",
    "label": "Sri Lanka",
    "type": "modern",
    "status": "Republic"
  },
  "sudan": {
    "iso": "SDN",
    "label": "Sudan",
    "type": "modern",
    "status": "Republic"
  },
  "suriname": {
    "iso": "SUR",
    "label": "Suriname",
    "type": "modern",
    "status": "Republic"
  },
  "sweden": {
    "iso": "SWE",
    "label": "Sweden",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "switzerland": {
    "iso": "CHE",
    "label": "Switzerland",
    "type": "modern",
    "status": "Federal republic"
  },
  "syria": {
    "iso": "SYR",
    "label": "Syria",
    "type": "modern",
    "status": "Republic"
  },
  "taiwan": {
    "iso": "TWN",
    "label": "Taiwan",
    "type": "modern",
    "status": "Disputed republic"
  },
  "tajikistan": {
    "iso": "TJK",
    "label": "Tajikistan",
    "type": "modern",
    "status": "Republic"
  },
  "tanzania": {
    "iso": "TZA",
    "label": "Tanzania",
    "type": "modern",
    "status": "Republic"
  },
  "thailand": {
    "iso": "THA",
    "label": "Thailand",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "togo": {
    "iso": "TGO",
    "label": "Togo",
    "type": "modern",
    "status": "Republic"
  },
  "tonga": {
    "iso": "TON",
    "label": "Tonga",
    "type": "modern",
    "status": "Monarchy"
  },
  "trinidad and tobago": {
    "iso": "TTO",
    "label": "Trinidad and Tobago",
    "type": "modern",
    "status": "Republic"
  },
  "tunisia": {
    "iso": "TUN",
    "label": "Tunisia",
    "type": "modern",
    "status": "Republic"
  },
  "turkey": {
    "iso": "TUR",
    "label": "Turkey",
    "type": "modern",
    "status": "Republic"
  },
  "turkmenistan": {
    "iso": "TKM",
    "label": "Turkmenistan",
    "type": "modern",
    "status": "Republic"
  },
  "tuvalu": {
    "iso": "TUV",
    "label": "Tuvalu",
    "type": "modern",
    "status": "Constitutional monarchy"
  },
  "uganda": {
    "iso": "UGA",
    "label": "Uganda",
    "type": "modern",
    "status": "Republic"
  },
  "ukraine": {
    "iso": "UKR",
    "label": "Ukraine",
    "type": "modern",
    "status": "Republic"
  },
  "united arab emirates": {
    "iso": "ARE",
    "label": "United Arab Emirates",
    "type": "modern",
    "status": "Federation of monarchies"
  },
  "united kingdom": {
    "iso": "GBR",
    "label": "United Kingdom",
    "type": "modern",
    "status": "Constitutional monarchy",
    "subdivisions": [
      {
        "name": "England",
        "population": 56000000,
        "military": 70,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Scotland",
        "population": 5500000,
        "military": 10,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Wales",
        "population": 3000000,
        "military": 5,
        "naval": true,
        "landlocked": false
      },
      {
        "name": "Northern Ireland",
        "population": 2000000,
        "military": 5,
        "naval": true,
        "landlocked": false
      }
    ]
  },
  "uruguay": {
    "iso": "URY",
    "label": "Uruguay",
    "type": "modern",
    "status": "Republic"
  },
  "uzbekistan": {
    "iso": "UZB",
    "label": "Uzbekistan",
    "type": "modern",
    "status": "Republic"
  },
  "vanuatu": {
    "iso": "VUT",
    "label": "Vanuatu",
    "type": "modern",
    "status": "Republic"
  },
  "vatican city": {
    "iso": "VAT",
    "label": "Vatican City",
    "type": "modern",
    "status": "Ecclesiastical"
  },
  "venezuela": {
    "iso": "VEN",
    "label": "Venezuela",
    "type": "modern",
    "status": "Republic"
  },
  "vietnam": {
    "iso": "VNM",
    "label": "Vietnam",
    "type": "modern",
    "status": "Socialist republic"
  },
  "yemen": {
    "iso": "YEM",
    "label": "Yemen",
    "type": "modern",
    "status": "Republic"
  },
  "zambia": {
    "iso": "ZMB",
    "label": "Zambia",
    "type": "modern",
    "status": "Republic"
  },
  "zimbabwe": {
    "iso": "ZWE",
    "label": "Zimbabwe",
    "type": "modern",
    "status": "Republic"
  },
  "sumer": {
    "label": "Sumer",
    "type": "historic",
    "era": "c. 4500\u20131900 BC",
    "notes": "Earliest civilization in Mesopotamia."
  },
  "akkadian empire": {
    "label": "Akkadian Empire",
    "type": "historic",
    "era": "c. 2334\u20132154 BC",
    "notes": "First empire of Mesopotamia."
  },
  "old babylonian empire": {
    "label": "Old Babylonian Empire",
    "type": "historic",
    "era": "c. 1894\u20131595 BC",
    "notes": "Reign of Hammurabi."
  },
  "neo-assyrian empire": {
    "label": "Neo-Assyrian Empire",
    "type": "historic",
    "era": "911\u2013609 BC",
    "notes": "Iron Age military power."
  },
  "neo-babylonian empire": {
    "label": "Neo-Babylonian Empire",
    "type": "historic",
    "era": "626\u2013539 BC",
    "notes": "Nebuchadnezzar II."
  },
  "ancient egypt": {
    "label": "Ancient Egypt",
    "type": "historic",
    "era": "3100\u201330 BC",
    "notes": "Pharaonic dynasties of the Nile."
  },
  "hittite empire": {
    "label": "Hittite Empire",
    "type": "historic",
    "era": "1600\u20131178 BC",
    "notes": "Anatolian power."
  },
  "phoenicia": {
    "label": "Phoenicia",
    "type": "historic",
    "era": "1500\u2013300 BC",
    "notes": "Maritime trading culture."
  },
  "athens": {
    "label": "Athens",
    "type": "historic",
    "era": "508\u2013322 BC",
    "notes": "Classical Greek city-state."
  },
  "sparta": {
    "label": "Sparta",
    "type": "historic",
    "era": "900\u2013192 BC",
    "notes": "Military-focused Greek state."
  },
  "macedon": {
    "label": "Macedon",
    "type": "historic",
    "era": "808\u2013168 BC",
    "notes": "Empire of Alexander the Great."
  },
  "roman republic": {
    "label": "Roman Republic",
    "type": "historic",
    "era": "509\u201327 BC",
    "notes": "Pre-imperial Roman state."
  },
  "roman empire": {
    "label": "Roman Empire",
    "type": "historic",
    "era": "27 BC\u2013476 AD",
    "notes": "Mediterranean hegemony."
  },
  "byzantine empire": {
    "label": "Byzantine Empire",
    "type": "historic",
    "era": "330\u20131453",
    "notes": "Eastern Roman Empire."
  },
  "carthage": {
    "label": "Carthage",
    "type": "historic",
    "era": "814\u2013146 BC",
    "notes": "North African maritime power."
  },
  "achaemenid empire": {
    "label": "Achaemenid Empire",
    "type": "historic",
    "era": "550\u2013330 BC",
    "notes": "First Persian Empire."
  },
  "parthian empire": {
    "label": "Parthian Empire",
    "type": "historic",
    "era": "247 BC\u2013224 AD",
    "notes": "Iranian power."
  },
  "sassanid empire": {
    "label": "Sassanid Empire",
    "type": "historic",
    "era": "224\u2013651 AD",
    "notes": "Last pre-Islamic Persian empire."
  },
  "mongol empire": {
    "label": "Mongol Empire",
    "type": "historic",
    "era": "1206\u20131368",
    "notes": "Largest contiguous land empire."
  },
  "qin dynasty": {
    "label": "Qin Dynasty",
    "type": "historic",
    "era": "221\u2013206 BC",
    "notes": "First unified Chinese empire."
  },
  "han dynasty": {
    "label": "Han Dynasty",
    "type": "historic",
    "era": "202 BC\u2013220 AD",
    "notes": "Golden age of China."
  },
  "tang dynasty": {
    "label": "Tang Dynasty",
    "type": "historic",
    "era": "618\u2013907",
    "notes": "Cultural peak of imperial China."
  },
  "song dynasty": {
    "label": "Song Dynasty",
    "type": "historic",
    "era": "960\u20131279",
    "notes": "Economic and naval innovation."
  },
  "yuan dynasty": {
    "label": "Yuan Dynasty",
    "type": "historic",
    "era": "1271\u20131368",
    "notes": "Mongol rule of China."
  },
  "ming dynasty": {
    "label": "Ming Dynasty",
    "type": "historic",
    "era": "1368\u20131644",
    "notes": "Zheng He voyages."
  },
  "qing dynasty": {
    "label": "Qing Dynasty",
    "type": "historic",
    "era": "1636\u20131912",
    "notes": "Last imperial dynasty."
  },
  "maurya empire": {
    "label": "Maurya Empire",
    "type": "historic",
    "era": "322\u2013185 BC",
    "notes": "Unified ancient India."
  },
  "gupta empire": {
    "label": "Gupta Empire",
    "type": "historic",
    "era": "319\u2013543 AD",
    "notes": "Classical Indian golden age."
  },
  "mughal empire": {
    "label": "Mughal Empire",
    "type": "historic",
    "era": "1526\u20131857",
    "notes": "Persianate rule in India."
  },
  "khmer empire": {
    "label": "Khmer Empire",
    "type": "historic",
    "era": "802\u20131431",
    "notes": "Angkor Wat builders."
  },
  "mali empire": {
    "label": "Mali Empire",
    "type": "historic",
    "era": "1230\u20131670",
    "notes": "Mansa Musa's wealth."
  },
  "holy roman empire": {
    "label": "Holy Roman Empire",
    "type": "historic",
    "era": "962\u20131806",
    "notes": "Central European elective monarchy."
  },
  "ottoman empire": {
    "label": "Ottoman Empire",
    "type": "historic",
    "era": "1299\u20131922",
    "notes": "Caliphate based in Istanbul."
  },
  "aztec empire": {
    "label": "Aztec Empire",
    "type": "historic",
    "era": "1428\u20131521",
    "notes": "Central Mexican hegemony."
  },
  "inca empire": {
    "label": "Inca Empire",
    "type": "historic",
    "era": "1438\u20131533",
    "notes": "Andean administrative empire."
  },
  "maya civilization": {
    "label": "Maya Civilization",
    "type": "historic",
    "era": "2000 BC\u20131697 AD",
    "notes": "Mesoamerican city-states."
  },
  "ghana empire": {
    "label": "Ghana Empire",
    "type": "historic",
    "era": "c. 300\u20131200",
    "notes": "West African gold trade state."
  },
  "songhai empire": {
    "label": "Songhai Empire",
    "type": "historic",
    "era": "1464\u20131591",
    "notes": "Dominant Sahelian state."
  },
  "kievan rus": {
    "label": "Kievan Rus'",
    "type": "historic",
    "era": "882\u20131240",
    "notes": "East Slavic federation."
  },
  "polish-lithuanian commonwealth": {
    "label": "Polish-Lithuanian Commonwealth",
    "type": "historic",
    "era": "1569\u20131795",
    "notes": "Multi-ethnic dual monarchy."
  },
  "maratha empire": {
    "label": "Maratha Empire",
    "type": "historic",
    "era": "1674\u20131818",
    "notes": "Hindu power in India."
  },
  "venetian republic": {
    "label": "Republic of Venice",
    "type": "historic",
    "era": "697\u20131797",
    "notes": "Maritime trade republic."
  },
  "soviet union": {
    "label": "Soviet Union",
    "type": "historic",
    "era": "1922\u20131991",
    "notes": "First socialist superpower."
  },
  "yugoslavia": {
    "label": "Yugoslavia",
    "type": "historic",
    "era": "1918\u20131992/2003",
    "notes": "South Slavic state."
  },
  "austro-hungarian empire": {
    "label": "Austro-Hungarian Empire",
    "type": "historic",
    "era": "1867\u20131918",
    "notes": "Habsburg dual monarchy."
  },
  "prussia": {
    "label": "Kingdom of Prussia",
    "type": "historic",
    "era": "1701\u20131918",
    "notes": "German military state."
  }
};

const ALIASES = {
  "usa": "united states",
  "america": "united states",
  "prc": "china",
  "uk": "united kingdom",
  "britain": "united kingdom",
  "ussr": "soviet union",
  "rome": "roman empire",
  "aztecs": "aztec empire",
  "incas": "inca empire",
  "mayans": "maya civilization"
};

function getDbData(inputName) {
  const key = inputName.toLowerCase().trim();
  const resolvedKey = ALIASES[key] || key;
  return WORLD_DATA[resolvedKey] || null;
}

module.exports = { WORLD_DATA, ALIASES, getDbData };
