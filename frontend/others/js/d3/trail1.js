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

function trail1() {
    var faithful = [79, 54, 74, 62, 85, 55, 88, 85, 51, 85, 54, 84, 78, 47, 83, 52, 62, 84, 52, 79, 51, 47, 78, 69, 74, 83, 55, 76, 78, 79, 73, 77, 66, 80, 74, 52, 48, 80, 59, 90, 80, 58, 84, 58, 73, 83, 64, 53, 82, 59, 75, 90, 54, 80, 54, 83, 71, 64, 77, 81, 59, 84, 48, 82, 60, 92, 78, 78, 65, 73, 82, 56, 79, 71, 62, 76, 60, 78, 76, 83, 75, 82, 70, 65, 73, 88, 76, 80, 48, 86, 60, 90, 50, 78, 63, 72, 84, 75, 51, 82, 62, 88, 49, 83, 81, 47, 84, 52, 86, 81, 75, 59, 89, 79, 59, 81, 50, 85, 59, 87, 53, 69, 77, 56, 88, 81, 45, 82, 55, 90, 45, 83, 56, 89, 46, 82, 51, 86, 53, 79, 81, 60, 82, 77, 76, 59, 80, 49, 96, 53, 77, 77, 65, 81, 71, 70, 81, 93, 53, 89, 45, 86, 58, 78, 66, 76, 63, 88, 52, 93, 49, 57, 77, 68, 81, 81, 73, 50, 85, 74, 55, 77, 83, 83, 51, 78, 84, 46, 83, 55, 81, 57, 76, 84, 77, 81, 87, 77, 51, 78, 60, 82, 91, 53, 78, 46, 77, 84, 49, 83, 71, 80, 49, 75, 64, 76, 53, 94, 55, 76, 50, 82, 54, 75, 78, 79, 78, 78, 70, 79, 70, 54, 86, 50, 90, 54, 54, 77, 79, 64, 75, 47, 86, 63, 85, 82, 57, 82, 67, 74, 54, 83, 73, 73, 88, 80, 71, 83, 56, 79, 78, 84, 58, 83, 43, 60, 75, 81, 46, 90, 46, 74];

    var svg = d3.select("#trail1 svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        margin = { top: 20, right: 30, bottom: 30, left: 40 };


    // var svg = d3.select("#trail-1"),
    //     width = +svg.attr("width"),
    //     height = +svg.attr("height"),
    //     margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // svg.append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom);

    var x = d3.scaleLinear()
        .domain([30, 110])
        .range([margin.left, width - margin.right]);

    var y = d3.scaleLinear()
        .domain([0, 0.1])
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + (height - margin.bottom) + ")")
        .call(d3.axisBottom(x))
        .append("text")
        .attr("x", width - margin.right)
        .attr("y", -6)
        .attr("fill", "#000")
        .attr("text-anchor", "end")
        .attr("font-weight", "bold")
        .text("Time between eruptions (min.)");

    svg.append("g")
        .attr("class", "axis axis--y")
        .attr("transform", "translate(" + margin.left + ",0)")
        .call(d3.axisLeft(y).ticks(null, "%"));

    // d3.json("https://deepsai.github.io/frontend/others/data/faithful.json", function (error, faithful) {
    // if (error) throw error;

    var n = faithful.length,
        bins = d3.histogram().domain(x.domain()).thresholds(40)(faithful),
        density = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))(faithful);

    // histogram
    svg.insert("g", "*")
        .attr("fill", "#bbb")
        .selectAll("rect")
        .data(bins)
        .enter().append("rect")
        .attr("x", function (d) { return x(d.x0) + 1; })
        .attr("y", function (d) { return y(d.length / n); })
        // .attr("width", function (d) { return 3 })
        // .attr("height", function (d) { return 20 });
        .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
        .attr("height", function (d) { return y(0) - y(d.length / n); });

    // kde
    svg.append("path")
        .datum(density)
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("d", d3.line()
            .curve(d3.curveBasis)
            .x(function (d) { return x(d[0]); })
            .y(function (d) { return y(d[1]); }));
    // });


};

trail1();
