console.log('index.js loaded');

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

var chart = d3.select(".container").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr('id', 'chart')
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scale.linear()
    .rangeRound([width, 0]);

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .1);

var color = d3.scale.ordinal()
    .range(["#ff6611", "#bb1111", "#ff1a1a", "#ff5555", "#ffa0a0"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top")
    .tickFormat(d3.format(".2s"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

d3.csv("data.csv", function(err, data) {
    if (err) {
        throw err;
    }

    color.domain(d3.keys(data[0]).filter(function(key) {
        return key !== 'State' && key !== 'Delegates';
    }));

    data.forEach(function(d) {
        var y0 = 0;
        d.unalloc = +d.Delegates - +d.Trump - +d.Cruz - +d.Rubio - +d.Kasich;
        d.candidates = color.domain().map(function(name) {
            return {
                name: name,
                y0 : y0,
                y1 : y0 += +d[name]
            };
        });
        d.candidates.push({
            name : 'unalloc',
            y0 : y0,
            y1 : y0 += d.unalloc
        });
        //console.log(d.State + ',' + d.Delegates);
        //console.log(d.candidates[0].name + ':' + d.candidates[0].y1);
        //console.log(d.candidates[1].name + ':' + d.candidates[1].y1);
        //console.log(d.candidates[2].name + ':' + d.candidates[2].y1);
        //console.log(d.candidates[3].name + ':' + d.candidates[3].y1);
        //console.log(d.candidates[4].name + ':' + d.candidates[4].y1);
    });

  y.domain(data.map(function(d) { return d.State; }));
  x.domain([0, d3.max(data, function(d) { return d.Delegates; })]);

    chart.append("g")
        .attr("class", "x axis")
        .call(xAxis)
        .attr('transform', 'translate(0, 20)')
        .append("text")
        .attr("y", -6)
        .attr("dy", "-0.25em")
        .attr('dx', '4.6em')
        .style("text-anchor", "end")
        .text("Delegates");

    chart.append("g")
        .attr("class", "y axis")
        .call(yAxis);

  var state = chart.selectAll(".state")
       .data(data)
       .enter().append("g")
       .attr("class", "g")
       .attr("transform", function(d) {
           return "translate(0, " + y(d.State) + ")";
       });

  state.selectAll("rect")
      .data(function(d) {
          return d.candidates;
      })
      .enter().append("rect")
      .attr("height", y.rangeBand())
      .attr("x", function(d) {
          return x(d.y1);
      }).attr("width", function(d) {
          return x(d.y0) - x(d.y1);
      }).style("fill", function(d) {
          return color(d.name);
      });
});
