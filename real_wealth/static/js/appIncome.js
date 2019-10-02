// // The code for the chart is wrapped inside a function that
// // automatically resizes the chart.
// function makeResponsive() {
//     // if the SVG area isn't empty when the browser loads,
//     // remove it and replace it with a resized version of the chart.
//     var svgArea = d3.select("body").select("svg");

//     // Clear SVG if not empty.
//     if (!svgArea.empty()) {
//         svgArea.remove();
//     }

//     // SVG Wrapper dimensions are determined by the current width and height of the browser window.
//     var svgWidth = window.innerWidth;
//     var svgHeight = window.innerHeight;
// // // // Set up chart area.
// // var svgWidth = 960;
// // var svgHeight = 660;

// // Define chart margins.
// var chartMargin = {
//     top: 80,
//     right: 80,
//     bottom: 80,
//     left: 80
// };

// // Define dimensions of the chart area.
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set its dimensions.
// var svg = d3.select("body")
//     .append("svg")
//     .attr("height", svgHeight)
//     .attr("width", svgWidth);

// var chartGroup = svg.append("g")
//     .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Initialize Tooltip
// var toolTip = d3.select("body").append("div").attr("class", "toolTip");

// // Configure a parseTime function which will return a new Date object from a string.
// var parseTime = d3.timeParse("%y");

// // Load data from "medianIncome.csv".
// d3.csv("../data/medianIncome.csv", function(error, incomeData) {
//     if (error) throw error;
    
//     console.log(incomeData);

//     // Cast all columns to numbers.
//     incomeData.forEach(function(d) {
//         d.medianIncome = +d.medianIncome;
//     });

//     // Create band scale for x axis.
//     var xBandScale = d3.scaleBand()
//         .domain(incomeData.map(d => d.region))
//         .range([0, chartWidth])
//         .padding(0.1);

//     // Create linear scale for y axis.
//     var yLinearScale = d3.scaleLinear()
//         .domain([0, d3.max(incomeData, d => d.medianIncome)])
//         .range([chartHeight, 0]);

//     // Pass in scales as arguments to create chart axes.
//     var bottomAxis = d3.axisBottom(xBandScale);
//     var leftAxis = d3.axisLeft(yLinearScale);

//     // Append two SVG group elements to the chartGroup area,
//     // and create the bottom and left axes inside of them.
//     chartGroup.append("g")
//         .attr("class", "axis")
//         .call(leftAxis);

//     chartGroup.append("g")
//         .attr("transform", `translate(0, ${chartHeight})`)
//         .attr("class", "axis")
//         .call(bottomAxis);

//     chartGroup.selectAll(".bar")
//         .data(incomeData)
//         .enter()
//         .append("rect")
//         .filter(d => d.year == 2017)
//         .attr("class", "bar")
//         .attr("x", d => xBandScale(d.region))
//         .attr("y", d => yLinearScale(d.medianIncome))
//         .attr("width", xBandScale.bandwidth())
//         .attr("height", d => chartHeight - yLinearScale(d.medianIncome))
//         .on("mousemove", function(d){
//             toolTip
//             .style("left", d3.event.pageX - 50 + "px")
//             .style("top", d3.event.pageY - 70 + "px")
//             .style("display", "inline-block")
//             .html(`<strong>${d.year}<strong><hr>${d.region}<br>Median Income: $${d.medianIncome}`);
//         })
//         .on("mouseout", function(d){
//             toolTip.hide(d);
//         });

//     // Create group for x- axis label.
//     var labelsGroup = chartGroup.append("g")
//         .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 25})`);

//     var regionLabel = labelsGroup.append("text")
//         .attr("x", -100)
//         .attr("y", -680)
//         .style("font-size", "20px")
//         .text("Median Income($) By Region");

// });

// };

// // When the browser loads, makeResponsive() is called.
// makeResponsive();

// // When the browser window is resized, makeResponsive() is called.
// d3.select(window).on("resize", makeResponsive);

// // set the dimensions and margins of the graph
// var margin = {top: 100, right: 100, bottom: 100, left: 140},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// // set the ranges
// var y = d3.scaleBand()
//           .range([height, 0])
//           .padding(0.1);

// var x = d3.scaleLinear()
//           .range([0, width]);
          
// // append the svg object to the body of the page
// // append a 'group' element to 'svg'
// // moves the 'group' element to the top left margin
// var svg = d3.select("#chart1").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
// var chartGroup = svg.append("g")
//     .attr("transform", 
//           "translate(" + margin.left + "," + margin.top + ")");

// // Initialize Tooltip
// var toolTip = d3.select("#chart1")
//   .append("g")
//   .attr("class", "toolTip");

// // Load data from "medianIncome.csv".
// d3.csv("../../data/medianIncome.csv", function(error, incomeData) {
//     if (error) throw error;
    
//     console.log(incomeData);

//   // format the data
//   incomeData.forEach(function(d) {
//     d.medianIncome = +d.medianIncome;
//   });

//   // Scale the range of the data in the domains
//   x.domain([0, d3.max(incomeData, function(d){ return d.medianIncome; })])
//   y.domain(incomeData.map(function(d) { return d.region; }));
//   //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

//   // append the rectangles for the bar chart
//   chartGroup.selectAll(".bar")
//       .data(incomeData)
//     .enter().append("rect")
//     .filter(d => d.year == 2017)
//       .attr("class", "bar")
//       .attr("width", function(d) {return x(d.medianIncome); } )
//       .attr("y", function(d) { return y(d.region); })
//       .attr("height", y.bandwidth())
//         .on("mouseover", function(d){
//           toolTip
//             .style("display", "inline-block")
//             .html(`<strong>${d.year}<strong><hr>${d.region}<br>Median Income: $${d.medianIncome}`)
//             .style("left", (d3.event.pageX) + "px")
//             .style("top", (d3.event.pageY + 70) + "px");
//         })
//         // .on("mouseout", function(d){ toolTip.hide(d);});
//         .on("mouseout", function(d){return toolTip.style("display", "none");});

//   // add the x Axis
//   chartGroup.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       // .style("fill", "white")
//       // .style("font-color", "white")
//       .style("font-size", "15px")
//       .call(d3.axisBottom(x));

//   // add the y Axis
//   chartGroup.append("g")
//   // .style("fill", "white")
//   .style("font-size", "15px")
//       .call(d3.axisLeft(y));

// });

d3.json("/income").then((data) => {
  data = data.slice(0, 3)
  // console.log(data);

  var trace5 = {
    x: data.map(row => row.medianincome),
    y: data.map(row => row.region),
    text: data.map(row => row.region),
    name: "Median Income",
    type: "bar",
    orientation: "h",
    marker:{
      color: ['blue', 'orange', 'red']
    }
  };

  var layout3 = {
    title: "Median Income by Region: 2017",
    margin: {
      l: 250,
      r: 100,
      t: 100,
      b: 100
    },
    xaxis: {title: "Median Income ($ in thousands)"},
    yaxis: {title: "Region"},
    width: 1650
  };
  

  var incometrace = [trace5]

  Plotly.newPlot('chart3', incometrace, layout3)
  
})