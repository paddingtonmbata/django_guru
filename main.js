

// // const XLSX = require('xlsx');
// // const fs = require('fs');


// // const workbook = XLSX.readFile('data.xlsx')

// // const degree = workbook.Sheets[workbook.SheetNames[0]];
// // const dg = XLSX.utils.sheet_to_json(degree);

// // fs.writeFile('data.json', JSON.stringify(dg), function (err) {
// //     if (err) throw err;
// //     console.log('JSON data has been saved to json.data')
// // });


// var countryCounts = {
//     "GB":7,
//     "US":8,
//     "CA":4,
//     "NO":3,
//     "DK":1,
//     "ZA":10,
//     "IE":1,
//     "FR":30,
//     "AU":12
// }

// $(function(){
//     $('#world-map').vectorMap({
//         map: 'world_mill',
//         series: {
//             regions: [{
//                 values: countryCounts,
//                 scale: ['#C8EEFF', '#0071A4'],
//                 normalizeFunction: 'polynomial'
//             }]
//         },
//         onRegionTipShow: function(e, el, code){
//             el.html(el.html()+' (Number of Institutions - ' + countryCounts[code]+')');
//         }
//     });
// });

// var countryCountsT = {
//     "GB":4,
//     "US":8,
//     "CA":4,
//     "NO":3,
//     "DK":1,
//     "ZA":1,
//     "IE":1,
//     "FR":20,
//     "AU":12
// }

// $(function(){
//     $('#world-map-training').vectorMap({
//         map: 'world_mill',
//         series: {
//             regions: [{
//                 values: countryCountsT,
//                 scale: ['#C8EEFF', '#0071A4'],
//                 normalizeFunction: 'polynomial'
//             }]
//         },
//         onRegionTipShow: function(e, el, code){
//             el.html(el.html()+' (Number of Institutions - ' + countryCountsT[code]+')');
//         }
//     });
// });



// // const fs = require('fs');

// // fs.readFile('data.json', 'utf8', (err, data) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }

// //   const items = JSON.parse(data);
// //   const countryCounts = {};

// //   items.forEach((item) => {
// //     const country = item['Country of qual'];
// //     if (country) {
// //       if (countryCounts[country]) {
// //         countryCounts[country]++;
// //       } else {
// //         countryCounts[country] = 1;
// //       }
// //     }
// //   });

// //   const output = {
// //     countryCounts
// //   };

// //   fs.writeFile('number_of_degrees_per_country.json', JSON.stringify(output), (err) => {
// //     if (err) {
// //       console.error(err);
// //       return;
// //     }
// //     console.log('Output saved to countryCounts.json');
// //   });
// // });
// Dictionary with country names as keys
var worldMapNames = {
    "Afghanistan": 0,
    "Albania": 0,
    "Algeria": 0,
    "American Samoa": 0,
    "Andorra": 0,
    "Angola": 0,
    "Anguilla": 0,
    "Antarctica": 0,
    "Antigua and Barbuda": 0,
    "Argentina": 0,
    "Armenia": 0,
    "Aruba": 0,
    "Australia": 0,
    "Austria": 0,
    "Azerbaijan": 0,
    "Bahamas": 0,
    "Bahrain": 0,
    "Bangladesh": 0,
    "Barbados": 0,
    "Belarus": 0,
    "Belgium": 0,
    "Belize": 0,
    "Benin": 0,
    "Bermuda": 0,
    "Bhutan": 0,
    "Bolivia": 0,
    "Bosnia and Herzegovina": 0,
    "Botswana": 0,
    "Bouvet Island": 0,
    "Brazil": 0,
    "British Indian Ocean Territory": 0,
    "Brunei Darussalam": 0,
    "Bulgaria": 0,
    "Burkina Faso": 0,
    "Burundi": 0,
    "Cambodia": 0,
    "Cameroon": 0,
    "Canada": 0,
    "Cape Verde": 0,
    "Cayman Islands": 0,
    "Central African Republic": 0,
    "Chad": 0,
    "Chile": 0,
    "China": 0,
    "Christmas Island": 0,
    "Cocos (Keeling) Islands": 0,
    "Colombia": 0,
    "Comoros": 0,
    "Congo": 0,
    "Congo, The Democratic Republic of The": 0,
    "Cook Islands": 0,
    "Costa Rica": 0,
    "Cote D'ivoire": 0,
    "Croatia": 0,
    "Cuba": 0,
    "Cyprus": 0,
    "Czech Republic": 0,
    "Denmark": 0,
    "Djibouti": 0,
    "Dominica": 0,
    "Dominican Republic": 0,
    "Ecuador": 0,
    "Egypt": 0,
    "El Salvador": 0,
    "Equatorial Guinea": 0,
    "Eritrea": 0,
    "Estonia": 0,
    "Ethiopia": 0,
    "Falkland Islands (Malvinas)": 0,
    "Faroe Islands": 0,
    "Fiji": 0,
    "Finland": 0,
    "France": 0,
    "French Guiana": 0,
    "French Polynesia": 0,
    "French Southern Territories": 0,
    "Gabon": 0,
    "Gambia": 0,
    "Georgia": 0,
    "Germany": 0,
    "Ghana":0,
    "Gibraltar": 0,
    "Greece": 0,
    "Greenland": 0,
    "Grenada": 0,
    "Guadeloupe": 0,
    "Guam": 0,
    "Guatemala": 0,
    "Guernsey": 0,
    "Guinea": 0,
    "Guinea-bissau": 0,
    "Guyana": 0,
    "Haiti": 0,
    "Heard Island and Mcdonald Islands": 0,
    "Holy See (Vatican City State)": 0,
    "Honduras": 0,
    "Hong Kong": 0,
    "Hungary": 0,
    "Iceland": 0,
    "India": 0,
    "Indonesia": 0,
    "Iran, Islamic Republic of": 0,
    "Iraq": 0,
    "Ireland": 0,
    "Isle of Man": 0,
    "Israel": 0,
    "Italy": 0,
    "Jamaica": 0,
    "Japan": 0,
    "Jersey": 0,
    "Jordan": 0,
    "Kazakhstan": 0,
    "Kenya": 0,
    "Kiribati": 0,
    "Korea, Democratic People's Republic of": 0,
    "Korea, Republic of": 0,
    "Kuwait": 0,
    "Kyrgyzstan": 0,
    "Lao People's Democratic Republic": 0,
    "Latvia": 0,
    "Lebanon": 0,
    "Lesotho": 0,
    "Liberia": 0,
    "Libyan Arab Jamahiriya": 0,
    "Liechtenstein": 0,
    "Lithuania": 0,
    "Luxembourg": 0,
    "Macao": 0,
    "North Macedonia": 0,
    "Madagascar": 0,
    "Malawi": 0,
    "Malaysia": 0,
    "Maldives": 0,
    "Mali": 0,
    "Malta": 0,
    "Marshall Islands": 0,
    "Martinique": 0,
    "Mauritania": 0,
    "Mauritius": 0,
    "Mayotte": 0,
    "Mexico": 0,
    "Micronesia, Federated States of": 0,
    "Moldova, Republic of": 0,
    "Monaco": 0,
    "Mongolia": 0,
    "Montenegro": 0,
    "Montserrat": 0,
    "Morocco": 0,
    "Mozambique": 0,
    "Myanmar": 0,
    "Namibia": 0,
    "Nauru": 0,
    "Nepal": 0,
    "Netherlands": 0,
    "Netherlands Antilles": 0,
    "New Caledonia": 0,
    "New Zealand": 0,
    "Nicaragua": 0,
    "Niger": 0,
    "Nigeria": 0,
    "Niue": 0,
    "Norfolk Island": 0,
    "Northern Mariana Islands": 0,
    "Norway": 0,
    "Oman": 0,
    "Pakistan": 0,
    "Palau": 0,
    "Palestinian Territory, Occupied": 0,
    "Panama": 0,
    "Papua New Guinea": 0,
    "Paraguay": 0,
    "Peru": 0,
    "Philippines": 0,
    "Pitcairn": 0,
    "Poland": 0,
    "Portugal": 0,
    "Puerto Rico": 0,
    "Qatar": 0,
    "Reunion": 0,
    "Romania": 0,
    "Russian Federation": 0,
    "Rwanda": 0,
    "Saint Helena": 0,
    "Saint Kitts and Nevis": 0,
    "Saint Lucia": 0,
    "Saint Pierre and Miquelon": 0,
    "Saint Vincent and the Grenadines": 0,
    "Samoa": 0,
    "San Marino": 0,
    "Sao Tome and Principe": 0,
    "Saudi Arabia": 0,
    "Senegal": 0,
    "Serbia": 0,
    "Seychelles": 0,
    "Sierra Leone": 0,
    "Singapore": 0,
    "Slovakia": 0,
    "Slovenia": 0,
    "Solomon Islands": 0,
    "Somalia": 0,
    "South Africa": 0,
    "South Georgia and the South Sandwich Islands": 0,
    "Spain": 0,
    "Sri Lanka": 0,
    "Sudan": 0,
    "Suriname": 0,
    "Svalbard and Jan Mayen": 0,
    "Swaziland": 0,
    "Sweden": 0,
    "Switzerland": 0,
    "Syrian Arab Republic": 0,
    "Taiwan, Province of China": 0,
    "Tajikistan": 0,
    "Tanzania, United Republic of": 0,
    "Thailand": 0,
    "Timor-leste": 0,
    "Togo": 0,
    "Tokelau": 0,
    "Tonga": 0,
    "Trinidad and Tobago": 0,
    "Tunisia": 0,
    "Turkey": 0,
    "Turkmenistan": 0,
    "Turks and Caicos Islands": 0,
    "Tuvalu": 0,
    "Uganda": 0,
    "Ukraine": 0,
    "United Arab Emirates": 0,
    "United Kingdom": 0,
    "United States": 0,
    "United States Minor Outlying Islands": 0,
    "Uruguay": 0,
    "Uzbekistan": 0,
    "Vanuatu": 0,
    "Venezuela": 0,
    "Viet Nam": 0,
    "Virgin Islands, British": 0,
    "Virgin Islands, U.S.": 0,
    "Wallis and Futuna": 0,
    "Western Sahara": 0,
    "Yemen": 0,
    "Zambia": 0,
    "Zimbabwe": 0
};

const worldMapCodes = {
    "AF": "Afghanistan",
    "AX": "Aland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Congo, Democratic Republic of the",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D'Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curacao",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "GB-ENG": "England",
"GQ": "Equatorial Guinea",
"ER": "Eritrea",
"EE": "Estonia",
"ET": "Ethiopia",
"FK": "Falkland Islands (Malvinas)",
"FO": "Faroe Islands",
"FJ": "Fiji",
"FI": "Finland",
"FR": "France",
"GF": "French Guiana",
"PF": "French Polynesia",
"TF": "French Southern Territories",
"GA": "Gabon",
"GM": "Gambia",
"GE": "Georgia",
"DE": "Germany",
"GH": "Ghana",
"GI": "Gibraltar",
"GR": "Greece",
"GL": "Greenland",
"GD": "Grenada",
"GP": "Guadeloupe",
"GU": "Guam",
"GT": "Guatemala",
"GG": "Guernsey",
"GN": "Guinea",
"GW": "Guinea-Bissau",
"GY": "Guyana",
"HT": "Haiti",
"HM": "Heard Island and Mcdonald Islands",
"VA": "Holy See (Vatican City State)",
"HN": "Honduras",
"HK": "Hong Kong",
"HU": "Hungary",
"IS": "Iceland",
"IN": "India",
"ID": "Indonesia",
"IR": "Iran, Islamic Republic Of",
"IQ": "Iraq",
"IE": "Ireland",
"IM": "Isle of Man",
"IL": "Israel",
"JM": "Jamaica",
"JP": "Japan",
"JE": "Jersey",
"JO": "Jordan",
"KZ": "Kazakhstan",
"KE": "Kenya",
"KI": "Kiribati",
"KP": "Korea, Democratic People's Republic of",
"KR": "Korea, Republic of",
"KW": "Kuwait",
"KG": "Kyrgyzstan",
"XK": "Kosovo",
"LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia, Federated States of",
    "MD": "Moldova, Republic of",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NE": "Niger",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SI": "Slovenia",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SV": "El Salvador",
    "SY": "Syria",
    "SZ": "Swaziland",
    "TD": "Chad",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TL": "East Timor",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TZ": "Tanzania",
    "UA": "Ukraine",
    "UG": "Uganda",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Vatican City",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WS": "Samoa",
    "YE": "Yemen",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}
  
  
  

degreeCountsInst = {
    "Canada":4,
    "Denmark":1,
    "Ireland":1,
    "Norway":3,
    "United Kingdom":4,
    "United States":8,
    "South Africa":1
}

var worldMapCodes = {
    "Canada": "CA",
    "Denmark": "DK",
    "Ireland": "IE",
    "Norway": "NO",
    "United Kingdom": "GB",
    "United States": "US",
    "South Africa": "ZA"
};

function convertToCodeKeys(data) {
    var newData = {};
    for (var country in data) {
        if (data.hasOwnProperty(country) && worldMapCodes.hasOwnProperty(country)) {
            var code = worldMapCodes[country];
            newData[code] = data[country];
        }
        }
    return newData;
}

var degreeCountsInstByCode = convertToCodeKeys(degreeCountsInst);

$(function() {
    // Initialize the map
    $('#world-map').vectorMap({
      map: 'world_mill',
      backgroundColor: '#ffffff',
      regionStyle: {
        initial: {
          fill: '#c3c1c1'
        }
      },
      onRegionTipShow: (e, el, c) => {
        var map = $('#world-map').vectorMap('get', 'mapObject');
        var name = map.getRegionName(c);
        if (name in degreeCountsInst) {
            el.html(`${name}: ${degreeCountsInst[name]} institutions`)
        } else {
            el.html(`${name}: 0 institutions`)
        }
      },
      series: {
        regions: [{
            values: degreeCountsInstByCode,
            scale: ['#ffffff', '#ff0000'],
            normalizeFunction: 'polynomial'
        }]
      }
    });
  });