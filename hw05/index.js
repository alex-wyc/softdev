console.log('index.js loaded');

var state = function(name, delegate_count, allocated) {
    this.name = name;
    this.delegate_count = delegate_count;
    this.allocated = allocated;
}

var states = {"Iowa": 30, "New Hampshire": 23, "South Carolina": 50, "Nevada": 30, "Alabama": 50, "Alaska": 28, "Arkansas": 40, "Colorado": 37, "Georgia": 76, "Massachusetts": 42, "Minnesota": 38, "Oklahoma": 43, "Tennessee": 58, "Texas": 155, "Vermont": 16, "Virginia": 49, "Wyoming": 29, "Kansas": 40, "Kentucky": 46, "Louisiana": 46, "Maine": 23, "Hawaii": 19, "Idaho": 32, "Michigan": 59, "Mississippi": 40, "Wyoming": 29, "Guam": 9, "District of Columbia": 19, "Florida": 99, "Illinois": 69, "Missouri": 52, "Northern Marianas": 9, "North Carolina": 72, "Ohio": 66, "Virgin Islands": 9, "Arizona": 58, "Utah": 40, "American Samoa": 9, "North Dakota": 28, "Wisconsin": 42, "New York": 95, "Connecticut": 28, "Delaware": 16, "Maryland": 38, "Pennsylvania": 71, "Rhode Island": 19, "Indiana": 57, "Nebraska": 36, "West Virginia": 34, "Oregon": 28, "Washington": 44, "California": 172, "Montana": 27, "New Jersey": 51, "New Mexico": 24, "South Dakota": 29}; 

var allocated = ['Iowa', 'New Hampshire', 'South Carolina', 'Nevada', 'Alabama', 'Alaska', 'Arkansas', 'Colorado', 'Georgia', 'Massachusetts', 'Minnesota', 'Oklahoma', 'Tennessee', 'Texas', 'Vermont', 'Virginia', 'Wyoming', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Hawaii', 'Idaho', 'Michigan', 'Mississippi', 'Wyoming', 'Guam', 'District of Columbia', 'Florida', 'Illinois', 'Missouri', 'Northern Marianas', 'North Carolina', 'Ohio']

var names = d3.keys(states);
var count = d3.values(states);

var foo = d3.scale.linear()
    .domain([0, 200])
    .range([0, 1200]);

d3.select("#chart")
    .selectAll('div')
    .data(names)
    .enter().append('div')
    .style("width", function(d) {
        return foo(states[d]) + 'px';
    }).text(function(d) {
        return d + " (" + states[d] + ")";
    }).attr('class', function(d) {
        if (allocated.indexOf(d) === -1) { // not allocated
            return "unallocated";
        }
        else {
            return "allocated";
        }
    });
