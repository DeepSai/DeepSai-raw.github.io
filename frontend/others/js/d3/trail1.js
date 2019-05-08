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
    var minVal = Math.min(...job_match),
        maxVal = Math.max(...job_match);

    var svg = d3.select("#trail1 svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        margin = { top: 30, right: 30, bottom: 30, left: 40 };

    var x = d3.scaleLinear()
        .domain([(minVal - 10), 100])
        .range([margin.left, width - margin.right]);

    var n = job_match.length,
        bins = d3.histogram().domain(x.domain()).thresholds(40)(job_match),
        density = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))(job_match);

    // var maxDensity = 0;
    // for (var i = 0; i < density.length; i++) {
    //     if (maxDensity < density[i][1]) {
    //         maxDensity = density[i][1]
    //     }
    // }
    var y0 = d3.scaleLinear()
        .domain([0, 0.1])
        .range([height - margin.bottom, margin.top]);


    var maxBinLen = 0;
    for (var i = 0; i < bins.length; i++) {
        if (maxBinLen < bins[i].length) {
            maxBinLen = bins[i].length
        }
    }
    var y1 = d3.scaleLinear()
        .domain([0, maxBinLen])
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        // .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + (height - margin.bottom) + ")")
        .call(d3.axisBottom(x))

    svg.append("g")
        // .attr("class", "axis axis--y0")
        .attr("transform", "translate(" + margin.left + ",0)")
        .attr("stroke", "rgb(232, 96, 45)")
        .call(d3.axisLeft(y0).ticks(null, "%"));

    svg.append("g")
        // .attr("class", "axis axis--y1")
        .attr("transform", "translate(" + (width - margin.right) + ",0)")
        .attr("stroke", "steelblue")
        .call(d3.axisRight(y1));

    // kde
    svg.append("path")
        .datum(density)
        .attr("fill", "none")
        // .attr("stroke", "rgb(226, 87, 52)")
        .attr("stroke", "rgb(232, 96, 45)")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("d", d3.line()
            .curve(d3.curveBasis)
            .x(function (d) { return x(d[0]); })
            .y(function (d) { return y0(d[1]); }));

    // histogram
    svg.insert("g", "*")
        .attr("fill", "steelblue")
        .attr("opacity", 0.8)
        .selectAll("rect")
        .data(bins)
        .enter().append("rect")
        .attr("x", function (d) { return x(d.x0) + 1; })
        // .attr("y", function (d) { return y1(d.length / n); })
        .attr("y", function (d) { return y1(d.length); })
        .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
        // .attr("height", function (d) { return y1(0) - y1(d.length / n); });
        .attr("height", function (d) { return y1(0) - y1(d.length); });

};

trail1();
