// Function to compute density
function kernelDensityEstimator(kernel, X) {
    return function (V) {
        return X.map(function (x) {
            return [x, d3.mean(V, function (v) { return kernel(x - v); })];
        });
    };
}
function kernelEpanechnikov(k) {
    return function (v) {
        return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
}

function ked() {
    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 30, left: 50 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#wq")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // get the data
    d3.csv("https://deepsai.github.io/frontend/others/data/perform_data.csv", function (data) {
        // add the x Axis
        var x = d3.scaleLinear()
            .domain([45, 114])
            .range([width, 0]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("transform", "rotate(90)")
            .call(d3.axisBottom(x));

        // add the y Axis
        var y = d3.scaleLinear()
            .range([0, height])
            //.domain([0.065,0 ])
            .domain([0.065, -0.065]);
        svg.append("g")
            .call(d3.axisRight(y))
            .attr("transform", "rotate(-90)");

        // Compute kernel density estimation
        var kde = kernelDensityEstimator(kernelEpanechnikov(5), x.ticks(30))
        var density = kde(data.map(function (d) { return d.price; }))

        // Plot the area
        svg.append("path")
            .attr("class", "mypath")
            .datum(density)
            .attr("fill", "#69b3a2")
            .attr("opacity", ".8")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line()
                .curve(d3.curveBasis)
                .y(function (d) { return x(d[0]); })
                .x(function (d) { return y(d[1]); })
            );

    });


    //set the dimensions and margins of the graph
    var margin1 = { top: 30, right: 30, bottom: 30, left: 50 },
        width1 = 460 - margin1.left - margin1.right,
        height1 = 400 - margin1.top - margin1.bottom;

    // append the svg object to the body of the page
    var svg1 = d3.select("#my_dataviz")
        .append("svg1")
        .attr("width1", width1 + margin1.left + margin1.right)
        .attr("height1", height1 + margin1.top + margin1.bottom)
        .append("g1")
        .attr("transform1",
            "translate(" + margin1.left + "," + margin1.top + ")");

    d3.csv("https://deepsai.github.io/frontend/others/data/perform_data.csv", function (data) {

        // add the x Axis
        var x = d3.scaleLinear()
            .domain([45, 114])
            .range([width1, 0]);
        svg.append("g1")
            .attr("transform1", "translate(0," + height1 + ")")
            .attr("transform", "rotate(90)")
            .call(d3.axisBottom(x));

        // add the y Axis
        var y = d3.scaleLinear()
            .range([170, height1])
            .domain([0, 0.065]);
        svg.append("g1")
            .call(d3.axisRight(y))
            .attr("transform", "rotate(-90)");




        // Compute kernel density estimation
        var kde = kernelDensityEstimator(kernelEpanechnikov(5), x.ticks(30))
        var density = kde(data.map(function (d) { return d.price; }))

        // Plot the area
        svg.append("path")
            .attr("class", "mypath")
            .datum(density)
            .attr("fill", "#69b3a2")
            .attr("opacity", ".8")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line()
                .curve(d3.curveBasis)
                .y(function (d) { return x(d[0]); })
                .x(function (d) { return y(d[1]); })
            );

    });

};

ked();




