var job_match = [81., 89., 85., 86., 80., 89., 49., 89., 89., 89., 47., 82., 89.,
    84., 80., 89., 89., 90., 83., 89., 89., 89., 89., 81., 89., 89.,
    89., 85., 87., 89., 87., 90., 86., 89., 87., 90., 87., 85., 84.,
    89., 89., 89., 90., 89., 84., 90., 90., 89., 89., 89., 89., 90.,
    89., 89., 89., 89., 47., 90., 89., 57., 89., 90., 86., 90., 89.,
    86., 65., 82., 89., 89., 89., 89., 57., 84., 84., 57., 90., 65.,
    89., 85., 84., 89., 90., 89., 89., 89., 84., 89., 87., 89., 90.,
    90., 89., 89., 85., 89., 86., 89., 89., 89., 89., 89., 87., 90.,
    89., 89., 89., 90., 90., 89., 89., 90., 89., 87., 89., 85., 89.,
    89., 49., 90., 82., 87., 84., 89., 75., 89., 86., 89., 86., 84.,
    86., 45., 90., 82., 53., 42., 89., 89., 84., 89., 80., 89., 89.,
    89., 90., 89., 84., 56., 84., 90., 90., 89., 89., 89., 90., 89.,
    89., 89., 89., 84., 89., 89., 85., 84., 76., 89., 89., 89., 90.,
    89., 90., 90., 90., 90., 90., 90., 90., 90., 89., 84., 89., 90.,
    90., 90., 89., 89., 86., 89., 87., 89., 89., 86., 90., 90., 89.,
    89., 89., 84., 89., 89., 86., 84., 85., 82., 86., 89., 84., 86.,
    79., 69., 84., 89., 82., 69., 81., 81., 78., 83., 86., 86., 81.,
    81., 79., 83., 79., 85., 86., 83., 89., 81., 89., 89., 76., 86.,
    89., 81., 83., 90., 76., 71., 78., 89., 70., 89., 81., 89., 81.,
    89., 89., 79., 91., 91., 86., 86., 86., 81., 86., 86., 92., 89.,
    70., 89., 81., 89., 81., 88., 91., 89., 89., 81., 81., 86., 89.,
    89., 83., 86., 79., 89., 70., 79., 89., 86., 81., 81., 76., 79.,
    86., 83., 83., 83., 86., 86., 81., 91., 81., 86., 86., 79., 89.,
    83., 89., 80., 89., 81., 92., 83., 83., 80., 89., 91., 89., 89.,
    86., 89., 91., 90., 89., 89., 86., 80., 83., 81., 89., 79., 86.,
    88., 83., 87., 91., 81., 88., 88., 82., 88., 92., 92., 88., 85.,
    87., 85., 88., 88., 91., 86., 91., 90., 90., 90., 92., 88., 86.,
    92., 88., 88., 88., 80., 92., 88., 84., 87., 88., 88., 84., 91.,
    91., 86., 86., 88., 88., 87., 91., 88., 90., 75., 86., 71., 81.,
    86., 77., 86., 87., 90., 87., 85., 91., 91., 87., 86., 90., 91.,
    92., 88., 86., 91., 91., 87., 87., 89., 88., 90., 86., 90., 87.,
    88., 85., 88., 87., 85., 88., 86., 84., 80., 85., 88., 86., 90.,
    94., 90., 92., 87., 87., 86., 87., 91., 92., 88., 87., 87., 80.,
    81., 92., 92., 85., 90., 88., 90., 90., 86., 90., 87., 90., 92.,
    91., 94., 87., 82., 87., 87., 90., 85., 94., 68., 92., 86., 94.,
    80., 93., 63., 90., 91., 86., 90., 82., 92., 89., 86., 93., 93.,
    91., 84., 92., 92., 91., 88., 81., 85., 86., 85., 83., 88., 92.,
    86., 86., 88., 88., 87., 88., 83., 88., 86., 88., 88., 87., 88.,
    85., 91., 88., 91., 87., 87., 88., 90., 91., 88., 92., 88., 86.,
    86., 88., 88., 91., 86., 88., 92., 87., 87., 90., 90., 88., 86.,
    86., 81., 91., 88., 89., 87., 90., 89., 85., 92., 92., 86., 84.,
    90., 90., 90., 87., 90., 86., 91., 86., 87., 87., 92., 88., 91.,
    86., 92., 82., 86., 87., 91., 72., 77., 92., 74., 86., 81., 86.,
    91., 80., 86., 86.];

// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 30, left: 30 },
    width = 560 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#d3-1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

var min = Math.min(...job_match),
    max = Math.max(...job_match);
console.log(min, max);
// Read the data and compute summary statistics for each specie
d3.csv("https://deepsai.github.io/frontend/others/data/test.csv", function (data) {
    console.log(data);

    // Build and Show the Y scale
    var y = d3.scaleLinear()
        .domain([3.5, 80])          // Note that here the Y scale is set manually
        // .domain(min, max)
        .range([height, 0])
    svg.append("g").call(d3.axisLeft(y))

    // Build and Show the X scale. It is a band scale like for a boxplot: each group has an dedicated RANGE on the axis. This range has a length of x.bandwidth
    var x = d3.scaleBand()
        .range([0, width])
        .domain(["setosa", "versicolor", "virginica"])
        // .domain(['匹配度'])
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
    var sumstat = d3.nest()  // nest function allows to group the calculation per level of a factor
        .key(function (d) { return d.Species; })
        .rollup(function (d) {   // For each key..
            input = d.map(function (g) { return g.Sepal_Length; })    // Keep the variable called Sepal_Length
            bins = histogram(input)   // And compute the binning on it.
            return (bins)
        })
        .entries(data)

    // What is the biggest number of value in a bin? We need it cause this value will have a width of 100% of the bandwidth.
    var maxNum = 0
    for (i in sumstat) {
        allBins = sumstat[i].value
        lengths = allBins.map(function (a) { return a.length; })
        longuest = d3.max(lengths)
        if (longuest > maxNum) { maxNum = longuest }
    }

    // The maximum width of a violin must be x.bandwidth = the width dedicated to a group
    var xNum = d3.scaleLinear()
        .range([0, x.bandwidth()])
        .domain([-maxNum, maxNum])

    // Color scale for dots
    var myColor = d3.scaleSequential()
        .interpolator(d3.interpolateInferno)
        .domain([3, 9])

    // Add the shape to this svg!
    svg
        .selectAll("myViolin")
        .data(sumstat)
        .enter()        // So now we are working group per group
        .append("g")
        .attr("transform", function (d) { return ("translate(" + x(d.key) + " ,0)") }) // Translation on the right to be at the group position
        .append("path")
        .datum(function (d) { return (d.value) })     // So now we are working bin per bin
        .style("stroke", "none")
        .style("fill", "grey")
        .attr("d", d3.area()
            .x0(xNum(0))
            .x1(function (d) { return (xNum(d.length)) })
            .y(function (d) { return (y(d.x0)) })
            .curve(d3.curveCatmullRom)    // This makes the line smoother to give the violin appearance. Try d3.curveStep to see the difference
        )

    // Add individual points with jitter
    var jitterWidth = 40
    svg
        .selectAll("indPoints")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return (x(d.Species) + x.bandwidth() / 2 - Math.random() * jitterWidth) })
        .attr("cy", function (d) { return (y(d.Sepal_Length)) })
        .attr("r", 5)
        .style("fill", function (d) { return (myColor(d.Sepal_Length)) })
        .attr("stroke", "white")

})