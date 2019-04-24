/*//////////////////////////////////////////////////////////	
//Show Arc of Apple
//////////////////////////////////////////////////////////*/
function Draw2() {

	/*First disable click event on clicker button*/
	stopClicker();

	/*Show and run the progressBar*/
	runProgressBar(time = 700 * 2);

	/*Initiate all arcs but only show the Apple arc (d.index = 0)*/
	g.append("svg:path")
		.style("stroke", function (d) { console.log(d.index); return fill(d.index); })
		.style("fill", function (d) { return fill(d.index); })
		.transition().duration(700)
		.attr("d", arc)
		.attrTween("d", function (d) {
			if (d.index == 0) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function (t) {
					d.endAngle = i(t);
					return arc(d);
				}
			}
		});

	/*Show the tick around the Apple arc*/
	d3.selectAll("g.group").selectAll("line")
		.transition().delay(700).duration(1000)
		.style("stroke", function (d, i, j) { return j ? 0 : "#000"; });

	/*Add the labels for the %'s at Apple*/
	d3.selectAll("g.group").selectAll(".tickLabels")
		.transition().delay(700).duration(2000)
		.attr("opacity", function (d, i, j) { return j ? 0 : 1; });

	/*Show the Apple name*/
	d3.selectAll(".titles")
		.transition().duration(2000)
		.attr("opacity", function (d, i) { return d.index ? 0 : 1; });

	/*Switch  text*/
	// "该岗位需要十项技能 各项技能的适配分值如下图"
	changeTopText(newText = "技能是 该岗位所需的专门技术和能力",
		loc = 4 / 2, delayDisappear = 0, delayAppear = 1, finalText = true);

	changeBottomText(newText = "",
		loc = 0 / 2, delayDisappear = 0, delayAppear = 1);

	// DrawSkill();

};/*Draw2*/

