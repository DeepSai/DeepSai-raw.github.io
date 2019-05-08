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


function d3_3() {
    var job_match = [0.81, 0.89, 0.85, 0.86, 0.8, 0.89, 0.49, 0.89, 0.89, 0.89, 0.47,
        0.82, 0.89, 0.84, 0.8, 0.89, 0.89, 0.9, 0.83, 0.89, 0.89, 0.89,
        0.89, 0.81, 0.89, 0.89, 0.89, 0.85, 0.87, 0.89, 0.87, 0.9, 0.86,
        0.89, 0.87, 0.9, 0.87, 0.85, 0.84, 0.89, 0.89, 0.89, 0.9, 0.89,
        0.84, 0.9, 0.9, 0.89, 0.89, 0.89, 0.89, 0.9, 0.89, 0.89, 0.89,
        0.89, 0.47, 0.9, 0.89, 0.57, 0.89, 0.9, 0.86, 0.9, 0.89, 0.86,
        0.65, 0.82, 0.89, 0.89, 0.89, 0.89, 0.57, 0.84, 0.84, 0.57, 0.9,
        0.65, 0.89, 0.85, 0.84, 0.89, 0.9, 0.89, 0.89, 0.89, 0.84, 0.89,
        0.87, 0.89, 0.9, 0.9, 0.89, 0.89, 0.85, 0.89, 0.86, 0.89, 0.89,
        0.89, 0.89, 0.89, 0.87, 0.9, 0.89, 0.89, 0.89, 0.9, 0.9, 0.89,
        0.89, 0.9, 0.89, 0.87, 0.89, 0.85, 0.89, 0.89, 0.49, 0.9, 0.82,
        0.87, 0.84, 0.89, 0.75, 0.89, 0.86, 0.89, 0.86, 0.84, 0.86, 0.45,
        0.9, 0.82, 0.53, 0.42, 0.89, 0.89, 0.84, 0.89, 0.8, 0.89, 0.89,
        0.89, 0.9, 0.89, 0.84, 0.56, 0.84, 0.9, 0.9, 0.89, 0.89, 0.89,
        0.9, 0.89, 0.89, 0.89, 0.89, 0.84, 0.89, 0.89, 0.85, 0.84, 0.76,
        0.89, 0.89, 0.89, 0.9, 0.89, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9,
        0.9, 0.9, 0.89, 0.84, 0.89, 0.9, 0.9, 0.9, 0.89, 0.89, 0.86,
        0.89, 0.87, 0.89, 0.89, 0.86, 0.9, 0.9, 0.89, 0.89, 0.89, 0.84,
        0.89, 0.89, 0.86, 0.84, 0.85, 0.82, 0.86, 0.89, 0.84, 0.86, 0.79,
        0.69, 0.84, 0.89, 0.82, 0.69, 0.81, 0.81, 0.78, 0.83, 0.86, 0.86,
        0.81, 0.81, 0.79, 0.83, 0.79, 0.85, 0.86, 0.83, 0.89, 0.81, 0.89,
        0.89, 0.76, 0.86, 0.89, 0.81, 0.83, 0.9, 0.76, 0.71, 0.78, 0.89,
        0.7, 0.89, 0.81, 0.89, 0.81, 0.89, 0.89, 0.79, 0.91, 0.91, 0.86,
        0.86, 0.86, 0.81, 0.86, 0.86, 0.92, 0.89, 0.7, 0.89, 0.81, 0.89,
        0.81, 0.88, 0.91, 0.89, 0.89, 0.81, 0.81, 0.86, 0.89, 0.89, 0.83,
        0.86, 0.79, 0.89, 0.7, 0.79, 0.89, 0.86, 0.81, 0.81, 0.76, 0.79,
        0.86, 0.83, 0.83, 0.83, 0.86, 0.86, 0.81, 0.91, 0.81, 0.86, 0.86,
        0.79, 0.89, 0.83, 0.89, 0.8, 0.89, 0.81, 0.92, 0.83, 0.83, 0.8,
        0.89, 0.91, 0.89, 0.89, 0.86, 0.89, 0.91, 0.9, 0.89, 0.89, 0.86,
        0.8, 0.83, 0.81, 0.89, 0.79, 0.86, 0.88, 0.83, 0.87, 0.91, 0.81,
        0.88, 0.88, 0.82, 0.88, 0.92, 0.92, 0.88, 0.85, 0.87, 0.85, 0.88,
        0.88, 0.91, 0.86, 0.91, 0.9, 0.9, 0.9, 0.92, 0.88, 0.86, 0.92,
        0.88, 0.88, 0.88, 0.8, 0.92, 0.88, 0.84, 0.87, 0.88, 0.88, 0.84,
        0.91, 0.91, 0.86, 0.86, 0.88, 0.88, 0.87, 0.91, 0.88, 0.9, 0.75,
        0.86, 0.71, 0.81, 0.86, 0.77, 0.86, 0.87, 0.9, 0.87, 0.85, 0.91,
        0.91, 0.87, 0.86, 0.9, 0.91, 0.92, 0.88, 0.86, 0.91, 0.91, 0.87,
        0.87, 0.89, 0.88, 0.9, 0.86, 0.9, 0.87, 0.88, 0.85, 0.88, 0.87,
        0.85, 0.88, 0.86, 0.84, 0.8, 0.85, 0.88, 0.86, 0.9, 0.94, 0.9,
        0.92, 0.87, 0.87, 0.86, 0.87, 0.91, 0.92, 0.88, 0.87, 0.87, 0.8,
        0.81, 0.92, 0.92, 0.85, 0.9, 0.88, 0.9, 0.9, 0.86, 0.9, 0.87,
        0.9, 0.92, 0.91, 0.94, 0.87, 0.82, 0.87, 0.87, 0.9, 0.85, 0.94,
        0.68, 0.92, 0.86, 0.94, 0.8, 0.93, 0.63, 0.9, 0.91, 0.86, 0.9,
        0.82, 0.92, 0.89, 0.86, 0.93, 0.93, 0.91, 0.84, 0.92, 0.92, 0.91,
        0.88, 0.81, 0.85, 0.86, 0.85, 0.83, 0.88, 0.92, 0.86, 0.86, 0.88,
        0.88, 0.87, 0.88, 0.83, 0.88, 0.86, 0.88, 0.88, 0.87, 0.88, 0.85,
        0.91, 0.88, 0.91, 0.87, 0.87, 0.88, 0.9, 0.91, 0.88, 0.92, 0.88,
        0.86, 0.86, 0.88, 0.88, 0.91, 0.86, 0.88, 0.92, 0.87, 0.87, 0.9,
        0.9, 0.88, 0.86, 0.86, 0.81, 0.91, 0.88, 0.89, 0.87, 0.9, 0.89,
        0.85, 0.92, 0.92, 0.86, 0.84, 0.9, 0.9, 0.9, 0.87, 0.9, 0.86,
        0.91, 0.86, 0.87, 0.87, 0.92, 0.88, 0.91, 0.86, 0.92, 0.82, 0.86,
        0.87, 0.91, 0.72, 0.77, 0.92, 0.74, 0.86, 0.81, 0.86, 0.91, 0.8,
        0.86, 0.86];

    var min = Math.min(...job_match),
        max = Math.max(...job_match);

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 30, left: 30 },
        width = 560 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#d3-3")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Read the data and compute summary statistics for each specie
    d3.csv("https://deepsai.github.io/frontend/others/data/match_score.csv", function (data) {

        // Build and Show the Y scale
        var y = d3.scaleLinear()
            // .domain([0.62, 1])          // Note that here the Y scale is set manually
            .domain([min, 1])
            .range([height, 0])
        svg.append("g").call(d3.axisLeft(y))

        // Build and Show the X scale. It is a band scale like for a boxplot: each group has an dedicated RANGE on the axis. This range has a length of x.bandwidth
        var x = d3.scaleBand()
            .range([0, width])
            // .domain(["setosa", "versicolor", "virginica"])
            .domain(['匹配度'])
            .padding(0.05)     // This is important: it is the space between 2 groups. 0 means no padding. 1 is the maximum.
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

        // Features of the histogram
        var histogram = d3.histogram()
            .domain(y.domain())
            .thresholds(y.ticks(20))    // Important: how many bins approx are going to be made? It is the 'resolution' of the violin plot
            .value(d => d)

        // Compute the binning for each group of the dataset
        // var sumstat = d3.nest()  // nest function allows to group the calculation per level of a factor
        //     .key(function (d) { return d.Species; })
        //     .rollup(function (d) {   // For each key..
        //         input = d.map(function (g) { return g.Sepal_Length; })    // Keep the variable called Sepal_Length
        //         bins = histogram(input)   // And compute the binning on it.
        //         // console.log(bins);
        //         return (bins)
        //     })
        //     .entries(data)
        var sumstat = d3.nest()  // nest function allows to group the calculation per level of a factor
            .key(function (d) { return d.Species; })
            .rollup(function (d) {   // For each key..
                input = d.map(function (g) { return g.Sepal_Length; })    // Keep the variable called Sepal_Length
                bins = histogram(input)   // And compute the binning on it.
                density = kernelDensityEstimator(kernelEpanechnikov(7), y.ticks(20))(input);
                // return (bins)
                console.log("===jitter3===")
                console.log("bins.length", bins.length);
                console.log("density.length", density.length);
                for (var i = 0; i < bins.length; i++) {
                    var num = bins[i].length;
                    density[i].push(num);
                };

                return (density)
            })
            .entries(data)

        var density = kernelDensityEstimator(kernelEpanechnikov(7), y.ticks(20))(input);



        // What is the biggest number of value in a bin? We need it cause this value will have a width of 100% of the bandwidth.
        var maxNum = 0
        for (i in sumstat) {
            allBins = sumstat[i].value
            lengths = allBins.map(function (a) { return a.length; })
            longuest = d3.max(lengths)
            if (longuest > maxNum) { maxNum = longuest; }
        }

        // The maximum width of a violin must be x.bandwidth = the width dedicated to a group
        var xNum = d3.scaleLinear()
            .range([0, x.bandwidth()])
            .domain([-maxNum, maxNum])

        // Color scale for dots
        var myColor = d3.scaleSequential()
            .interpolator(d3.interpolateInferno)
            // .domain([3, 9])
            .domain([0.24, 1.16])

        // Add the shape to this svg!
        // svg
        //     .selectAll("myViolin")
        //     .data(sumstat)
        //     .enter()        // So now we are working group per group
        //     .append("g")
        //     .attr("transform", function (d) { return ("translate(" + x(d.key) + " ,0)") }) // Translation on the right to be at the group position
        //     .append("path")
        //     .datum(function (d) { return (d.value) })     // So now we are working bin per bin
        //     .style("stroke", "none")
        //     .style("fill", "steelblue")
        //     .attr("d", d3.area()
        //         .x0(xNum(0))
        //         // .x1(function (d) { return (xNum(d.length)) })
        //         // .y(function (d) { return (y(d.x0)) })
        //         .x1(function (d) { return (xNum(d[1])) })
        //         .y(function (d) { return (y(d[0])); })
        //         .curve(d3.curveCatmullRom)    // This makes the line smoother to give the violin appearance. Try d3.curveStep to see the difference
        //         // .curve(d3.curveStep)
        //     )

        // Compute kernel density estimation
        // var kde = kernelDensityEstimator(kernelEpanechnikov(5), x.ticks(30))
        // var density = kde(data.map(function (d) { return d.price; }))
        // console.log(density);

        // Plot the area
        svg
            // .selectAll("myViolin")
            .append("path")
            .attr("class", "mypath")
            .datum(density)
            .attr("fill", "#69b3a2")
            .attr("opacity", ".8")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("stroke-linejoin", "round")
            .attr("d", d3.area()
                .curve(d3.curveBasis)
                .x0(xNum(0))
                .x1(function (d) { return (xNum(d[1])) })
                .y(function (d) { return (y(d[0])); })
            );

        // Add individual points with jitter
        var jitterWidth = 200;
        svg
            .selectAll("indPoints")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return (x(d.Species) + x.bandwidth() / 2 - Math.random() * jitterWidth) })
            .attr("cy", function (d) { return (y(d.Sepal_Length)) })
            .attr("r", 5)
            .style("fill", function (d) { return (myColor(d.Sepal_Length)) })
            .style("opacity", 0.6)
            .attr("stroke", "white")

    })
};
d3_3();
