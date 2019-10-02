// // Set up chart area.
// var svgWidth = 1500;
// var svgHeight = 500;

// var margin = {
//     top: 80,
//     right: 80,
//     bottom: 80,
//     left: 80
// };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// // Create an SVG wrapper,
// // append an SVG group that will hold our chart,
// // and shift the latter by left and top margins.
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

// var chartGroup = svg.append("g")
//     .attr("transform", `translate(${margin.left}, ${margin.top})`);

// var parseTime = d3.timeParse("%Y-%m");

// // function dateFilter(value) {
// //     return value.date > 2010-11;
// //   }
  

// // Import data from the home_rentalPrice.csv file.
// d3.csv("../data/home_rentalPrice.csv", function(error, valueData) {
//     if (error) throw error;
//     valueData = valueData.filter(function(row) {
//         return row["date"] >= "2010-11" && row["date"] <= "2019-06"
//     })
//     console.log(valueData);

//     valueData.forEach(function(data) {
//         data.medianRentalPriceLA = +data.medianRentalPriceLA;
//         data.medianRentalPriceUS = +data.medianRentalPriceUS;
//         data.date = parseTime(data.date);
//     });

//     // Create scales for the chart.
//     var xTimeScale = d3.scaleTime()
//         .domain(d3.extent(valueData, d => d.date))
//         .range([0, width]);

//     // Set up the y axis domain.
//     var yLinearScale = d3.scaleLinear()
//         .range([height, 0]);

//     // Set up the y axis domain and determine the max y value for LA and US median Home Value.
//     var laMax = d3.max(valueData, d => d.medianRentalPriceLA);
//     var usMax = d3.max(valueData, d => d.medianRentalPriceUS);

//     var yMax = laMax > usMax ? laMax : usMax;

//     yLinearScale.domain([0, yMax]);

//     // Create Axes.
//     var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%Y-%m")).ticks(20);
//     var leftAxis = d3.axisLeft(yLinearScale);

//     // Append the axes to the chartGroup.
//     // Add x-axis.
//     chartGroup.append("g")
//         .attr("transform", `translate(0, ${height})`)
//         .classed("axis", true)
//         .call(bottomAxis)
//         .selectAll("text")
//             .style("text-anchor", "end")
//             .attr("dx", "-.8em")
//             .attr("dy", ".15em")
//             .attr("transform", "rotate(-60)");
//     chartGroup.append('text').html('US vs LA County Median Rental Price').attr('x', 300).classed("axis", true).style("font-size", "20px");


//     // Add y-axis.
//     chartGroup.append("g").classed("axis", true).call(leftAxis);

//     // Line generator for LA data.
//     var line1 = d3.line()
//         .x(d => xTimeScale(d.date))
//         .y(d => yLinearScale(d.medianRentalPriceLA));

//     // Line generator for US data.
//     var line2 = d3.line()
//         .x(d => xTimeScale(d.date))
//         .y(d => yLinearScale(d.medianRentalPriceUS));

//     chartGroup
//         .data([valueData])
//         .append("path")
//         .attr("d", line1)
//         .classed("line green", true)

//     chartGroup
//         .data([valueData])
//         .append("path")
//         .attr("d", line2)
//         .classed("line red", true)

//     svg.append("circle").attr("cx",100).attr("cy",100).attr("r", 6).style("fill", "green")
//     svg.append("circle").attr("cx",100).attr("cy",120).attr("r", 6).style("fill", "red")
//     svg.append("text").attr("x", 120).attr("y", 100).text("LA County Median Rent").style("font-size", "15px").attr("alignment-baseline","middle")
//     svg.append("text").attr("x", 120).attr("y", 120).text("US Median Rent").style("font-size", "15px").attr("alignment-baseline","middle")

// });

// // set the dimensions and margins of the graph
// var margin = {
//     top: 20,
//     right: 60,
//     bottom: 30,
//     left: 60
// },
// width = 1650 - margin.left - margin.right,
// height = 500 - margin.top - margin.bottom;

// // set the ranges
// var x = d3.scaleTime().range([0, width]);
// var y = d3.scaleLinear().range([height, 0]);

// // define the line  
// function basicy() {
//     var ret = d3.line()
//         .x(function (d) {
//             return x(d.date);
//         })
//     return ret;
// }
// var valueRentline = basicy()
//     .y(function (d) {
//         return y(d.medianRentalPriceLA);
//     });
// var valueRentline2 = basicy()
//     .y(function (d) {
//         return y(d.medianRentalPriceUS);
//     });
// var div = d3.select("#chart2").append("div")
//     .attr("class", "tooltip")
//     .style("opacity", 0);

// // append the svg obgect to the body of the page
// // appends a 'group' element to 'svg'
// // moves the 'group' element to the top left margin
// var svg2 = d3.select("#chart2").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform",
//         "translate(" + margin.left + "," + margin.top + ")");

// function make_x_axis() {        
//     return d3.axisBottom(x)
//         .ticks(11)
// }

// function make_y_axis() {        
//     return d3.axisLeft(y)
//         .ticks(11)
// }

// var parseTime = d3.timeParse("%Y-%m");

// // Get the data
// var datalist = [];
// d3.csv("../../data/home_rentalPrice.csv", function (error, data) {
//     if (error) throw error;

//     data = data.filter(function(row) {
//         return row["date"] >= "2010-11" && row["date"] <= "2019-06"
//     })

//     console.log(data);

//     data.forEach(function(data) {
//         data.medianRentalPriceLA = +data.medianRentalPriceLA;
//         data.medianRentalPriceUS = +data.medianRentalPriceUS;
//         data.date = parseTime(data.date);
//     });

//     // scale the range of the data
//     x.domain(d3.extent(data, function (d) {
//         return d.date;
//     }));
//     y.domain([0, d3.max(data, function (d) {
//         return Math.max(d.medianRentalPriceLA, d.medianRentalPriceUS);
//     })]);

//     // add the valueline path.
//     var dataArray = [{
//         "name": "LA County Median Rental Price",
//         "x": 100,
//         "y": 50,
//         "class": "line-text",
//         "class2": "line",
//         "dataline": valueRentline
//     }, {
//         "name": "US Median Rental Price",
//         "x": 100,
//         "y": 70,
//         "class": "line2-text",
//         "class2": "line2",
//         "dataline": valueRentline2
//     }]
//     for (var i = 0; i < dataArray.length; i++) {
//         svg2.append("text").text(dataArray[i].name)
//             .attr("x", dataArray[i].x)
//             .attr("y", dataArray[i].y);
//         svg2.append("rect")
//             .attr("x", dataArray[i].x - 70)
//             .attr("y", dataArray[i].y - 11)
//             .attr("width", 50)
//             .attr('height', 10)
//             .attr('class', dataArray[i].class)
//         svg2.append("path")
//             .data([data])
//             .attr("class", dataArray[i].class2)
//             .attr("d", dataArray[i].dataline) 
//     }

//     // add the dots with tooltips
//     var fixeddot = svg2.selectAll("dot")
//         .data(data)
//         .enter().append("circle")
//         .attr("r", 4)
//         .style("opacity", .5)
//     var fixeddot2 = svg2.selectAll("dot")
//         .data(data)
//         .enter().append("circle")
//         .attr("r", 4)
//         .style("opacity", .5)

//     fixeddot.attr("cx", function (d) {
//             return x(d.date);
//         })
//         .attr("cy", function (d) {
//             return y(d.medianRentalPriceLA);
//         })
//         .on("mouseover", function (d) {
//             div.transition()
//                 .duration(200)
//                 .style("opacity", .75);
//             div.html("<p>Date: " + d.date + "</p><hr><p>Median Rental Price: $" + d.medianRentalPriceLA + "</p>")
//                 .style("left", (d3.event.pageX) + "px")
//                 .style("top", (d3.event.pageY - 700) + "px");
//         })
//         .on('mouseout', function() {
//             div.transition()
//               .delay(100)
//               .duration(600)
//               .style("opacity",0)
//               .style('pointer-events', 'none')
//             });

//     fixeddot2.attr("cx", function (d) {
//             return x(d.date);
//         })
//         .attr("cy", function (d) {
//             return y(d.medianRentalPriceUS);
//         })
//         .on("mouseover", function (d) {
//             div.transition()
//                 .duration(200)
//                 .style("opacity", .75);
//             div.html("<p>Date: " + d.date + "</p><hr><p>Median Rental Price: $" + d.medianRentalPriceUS + "</p>")
//                 .style("left", (d3.event.pageX) + "px")
//                 .style("top", (d3.event.pageY - 700) + "px");
//         })
//         .on('mouseout', function() {
//             div.transition()
//               .delay(100)
//               .duration(600)
//               .style("opacity",0)
//               .style('pointer-events', 'none')
//             });

//     // add the X Axis
//     svg2.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .classed("axis", true)
//         .call(d3.axisBottom(x));

//     // add the Y Axis
//     svg2.append("g")
//         .classed("axis", true)
//         .call(d3.axisLeft(y));

//     // Add x axis grid lines.
//     svg2.append("g")         
//         .attr("class", "grid")
//         .attr("transform", "translate(0," + height + ")")
//         .style("stroke-dasharray",("3,3"))
//         .call(make_x_axis()
//             .tickSize(-height, 0, 0)
//             .tickFormat("")
//         )

//     // Add y axis gridlines.
//     svg2.append("g")         
//         .attr("class", "grid")
//         .style("stroke-dasharray",("3,3"))
//         .call(make_y_axis()
//             .tickSize(-width, 0, 0)
//             .tickFormat("")
//         )

// });

d3.json("/housing_trends").then((data) => {
    data = data.filter(function(row) {
        return row["date"] >= "2010-11" && row["date"] <= "2019-06"
    })

    // console.log(data);
    
        let medrentpricela = [];
        let medrentpriceus = [];
        let dates = [];
        data.forEach(i => {
            i.medianRentalPriceLA = +i.medianRentalPriceLA
            i.medianRentalPriceUS = +i.medianRentalPriceUS
            medrentpricela.push(i.medianRentalPriceLA)
            medrentpriceus.push(i.medianRentalPriceUS)
            dates.push(i.date)
        });
    
        var trace3 = {
            x: dates,
            y: medrentpricela,
            mode: 'lines+markers',
            text: "Median Rent Price LA",
            name: "LA County"
        };
    
        var trace4 = {
            x: dates,
            y: medrentpriceus,
            mode: 'lines+markers',
            text: "Median Rent Price US",
            name: "United States"
        }
    
        var layout2 = {
            xaxis: {
                title: "Date"
            },
            yaxis: {
                title: "Median Rent Price"
            },
            grid: true,
            width: 1650,
            height: 700,
            title: {text: "Los Angeles County vs United States Median Rental Price per Month"}
        };
    
        var rptrace = [trace3, trace4]
    
        Plotly.newPlot('chart2', rptrace, layout2)
    })