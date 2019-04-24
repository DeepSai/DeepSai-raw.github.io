/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3() {

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0, 4, 8, 12, 16, 20];

	/*Show and run the progressBar*/
	runProgressBar(time = 700 * (arcDelay[(arcDelay.length - 1)] + 1));

	/*Fill in the other arcs*/
	svg.selectAll("g.group").select("path")
		.transition().delay(function (d, i) { return 700 * arcDelay[i]; }).duration(1000)
		.attrTween("d", function (d) {
			if (d.index != 0) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function (t) {
					d.endAngle = i(t);
					return arc(d);
				}
			}
		});

	/*Make the other strokes black as well*/
	svg.selectAll("g.group")
		.transition().delay(function (d, i) { return 700 * arcDelay[i]; }).duration(700)
		.selectAll("g").selectAll("line").style("stroke", "#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().delay(function (d, i) { return 700 * arcDelay[i]; }).duration(700)
		.selectAll("g").selectAll("text").style("opacity", 1);
	/*And the Names of each Arc*/
	svg.selectAll("g.group")
		.transition().delay(function (d, i) { return 700 * arcDelay[i]; }).duration(700)
		.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	// "素质是驱动员工产生优秀工作绩效的各种个性特征的集合，它反映的是可以通过不同方式表现出来的员工的知识、技能、个性与驱动力等。素质要求是否匹配是判断候选人是否符合岗位要求的核心要素"
	changeTopText(newText = "素质是驱动员工 产生绩效的个性特征的集合",
		loc = 4 / 2, delayDisappear = arcDelay[1] - 2, delayAppear = arcDelay[1] - 1);
	// "性格是个体对待现实世界的独特的、稳定的态度，以及与这种态度相应的行为模式中表现出的个性心理特征。性格对员工的行为方式和思维特点具有深远的影响，企业了解员工的性格特征能够在一定程度上有效预测个体和团队的工作绩效。"
	changeTopText(newText = "性格是员工对待 现实世界的独特的稳定的态度",
		loc = 4 / 2, delayDisappear = arcDelay[2] - 1, delayAppear = arcDelay[2]);
	changeTopText(newText = "成长性是对员工 动力和潜力水平的综合考量",
		loc = 4 / 2, delayDisappear = arcDelay[3] - 1, delayAppear = arcDelay[3]);
	changeTopText(newText = "还有其他三十多个维度 对岗位画像也有一定影响",
		loc = 4 / 2, delayDisappear = arcDelay[4] - 1, delayAppear = arcDelay[4]);
	changeTopText(newText = "100%完成",
		loc = 4 / 2, delayDisappear = arcDelay[5] - 1, delayAppear = arcDelay[5], finalText = true);

	// DrawQuality();
	// DrawCharac();
	// DrawGrowth();

};/*Draw3*/