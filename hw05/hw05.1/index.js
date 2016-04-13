console.log('index.js loaded');

var rstates = {
    "Iowa": 30,
    "New Hampshire": 23,
    "S. Carolina": 50,
    "Nevada": 30,
    "Alabama": 50,
    "Alaska": 28,
    "Arkansas": 40,
    "Colorado": 37,
    "Georgia": 76,
    "Massachusetts": 42,
    "Minnesota": 38,
    "Oklahoma": 43,
    "Tennessee": 58,
    "Texas": 155,
    "Vermont": 16,
    "Virginia": 49,
    "Wyoming": 29,
    "Kansas": 40,
    "Kentucky": 46,
    "Louisiana": 46,
    "Maine": 23,
    "Hawaii": 19,
    "Idaho": 32,
    "Michigan": 59,
    "Mississippi": 40,
    "Wyoming": 29,
    "Florida": 99,
    "Illinois": 69,
    "Missouri": 52,
    "N. Carolina": 72,
    "Ohio": 66,
    "Arizona": 58,
    "Utah": 40,
    "N. Dakota": 28,
    "Wisconsin": 42,
    "New York": 95,
    "Connecticut": 28,
    "Delaware": 16,
    "Maryland": 38,
    "Pennsylvania": 71,
    "Rhode Island": 19,
    "Indiana": 57,
    "Nebraska": 36,
    "West Virginia": 34,
    "Oregon": 28,
    "Washington": 44,
    "California": 172,
    "Montana": 27,
    "New Jersey": 51,
    "New Mexico": 24,
    "S. Dakota": 29
};

var rallocated = ['Iowa', 'New Hampshire', 'S. Carolina', 'Nevada', 'Alabama', 'Alaska', 'Arkansas', 'Colorado', 'Georgia', 'Massachusetts', 'Minnesota', 'Oklahoma', 'Tennessee', 'Texas', 'Vermont', 'Virginia', 'Wyoming', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Hawaii', 'Idaho', 'Michigan', 'Mississippi', 'Wyoming', 'Florida', 'Illinois', 'Missouri', 'N. Carolina', 'Ohio'];

var dstates = {
    'Iowa': 44,
    'New Hampshire': 24,
    'Nevada': 35,
    'South Carolina': 53,
    'Alabama': 53,
    'Arkansas': 32,
    'Colorado': 66,
    'Georgia': 102,
    'Massachusetts': 91,
    'Minnesota': 77,
    'Oklahoma': 38,
    'Tennessee': 67,
    'Texas': 222,
    'Vermont': 16,
    'Virginia': 95,
    'Kansas': 33,
    'Louisiana': 51,
    'Nebraska': 25,
    'Maine': 25,
    'Michigan': 127,
    'Mississippi': 34,
    'Florida': 198,
    'Illinois': 135,
    'Missouri': 64,
    'North Carolina': 104,
    'Ohio': 141,
    'Arizona': 85,
    'Idaho': 27,
    'Utah': 37,
    'Alaska': 20,
    'Hawaii': 34,
    'Washington': 118,
    'Wisconsin': 96,
    'Wyoming': 18,
    'New York': 291,
    'Connecticut': 70,
    'Delaware': 31,
    'Maryland': 118,
    'Pennsylvania': 210,
    'Rhode Island': 33,
    'Indiana': 92,
    'West Virginia': 37,
    'Kentucky': 61,
    'Oregon': 74,
    'California': 546,
    'Montana': 27,
    'New Jersey': 142,
    'New Mexico': 43,
    'North Dakota': 23,
    'South Dakota': 25,
};

var dallocated = [
    'Iowa',
	'New Hampshire',
	'Nevada',
	'South Carolina',
	'Alabama',
	'Arkansas',
	'Colorado',
	'Georgia',
	'Massachusetts',
	'Minnesota',
	'Oklahoma',
	'Tennessee',
	'Texas',
	'Vermont',
	'Virginia',
	'Kansas',
	'Louisiana',
	'Nebraska',
	'Maine',
	'Michigan',
	'Mississippi',
	'Florida',
	'Illinois',
	'Missouri',
	'North Carolina',
	'Ohio'
];

var names = d3.keys(rstates).sort();

var foo = d3.scale.linear()
    .domain([0, 200])
    .range([0, 100]);

var boo = d3.scale.linear()
    .domain([0, 550])
    .range([0, 100]);

d3.select("#dchart")
    .selectAll('div')
    .data(names)
    .enter()
    .append('div').transition()
    .duration(750).delay(function(d, i) {return 1000 - i * 10;})
    .style("width", function(d) {
        return boo(dstates[d]) + '%';
    }).text(function(d) {
        return d + " (" + dstates[d] + ")";
    }).attr('class', function(d) {
        if (dallocated.indexOf(d) === -1) { // not allocated
            return "bar dunallocated";
        }
        else {
            return "bar dallocated";
        }
    });

d3.select("#rchart")
    .selectAll('div')
    .data(names)
    .enter()
    .append('div').transition()
    .duration(750).delay(function(d, i) {return 1000 - i * 10;})
    .style("width", function(d) {
        return foo(rstates[d]) + '%';
    }).text(function(d) {
        return d + " (" + rstates[d] + ")";
    }).attr('class', function(d) {
        if (rallocated.indexOf(d) === -1) { // not allocated
            return "bar runallocated";
        }
        else {
            return "bar rallocated";
        }
    });
