

// const XLSX = require('xlsx');
// const fs = require('fs');


// const workbook = XLSX.readFile('data.xlsx')

// const degree = workbook.Sheets[workbook.SheetNames[0]];
// const dg = XLSX.utils.sheet_to_json(degree);

// fs.writeFile('data.json', JSON.stringify(dg), function (err) {
//     if (err) throw err;
//     console.log('JSON data has been saved to json.data')
// });


var countryCounts = {
    "GB":7,
    "US":8,
    "CA":4,
    "NO":3,
    "DK":1,
    "ZA":10,
    "IE":1,
    "FR":30,
    "AU":12
}

$(function(){
    $('#world-map').vectorMap({
        map: 'world_mill',
        series: {
            regions: [{
                values: countryCounts,
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (Number of Institutions - ' + countryCounts[code]+')');
        }
    });
});

var countryCountsT = {
    "GB":4,
    "US":8,
    "CA":4,
    "NO":3,
    "DK":1,
    "ZA":1,
    "IE":1,
    "FR":20,
    "AU":12
}

$(function(){
    $('#world-map-training').vectorMap({
        map: 'world_mill',
        series: {
            regions: [{
                values: countryCountsT,
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (Number of Institutions - ' + countryCountsT[code]+')');
        }
    });
});



// const fs = require('fs');

// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const items = JSON.parse(data);
//   const countryCounts = {};

//   items.forEach((item) => {
//     const country = item['Country of qual'];
//     if (country) {
//       if (countryCounts[country]) {
//         countryCounts[country]++;
//       } else {
//         countryCounts[country] = 1;
//       }
//     }
//   });

//   const output = {
//     countryCounts
//   };

//   fs.writeFile('number_of_degrees_per_country.json', JSON.stringify(output), (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Output saved to countryCounts.json');
//   });
// });
