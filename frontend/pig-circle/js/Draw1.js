/*//////////////////////////////////////////////////////////	
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1() {

	/*First disable click event on clicker button*/
	stopClicker();

	/*Show and run the progressBar*/
	runProgressBar(time = 700 * 5);


	changeTopText(newText = "岗位画像本质上 是一个黑盒模型, 无法完全进行可视化展示",
		loc = 4 / 2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "该岗位使用了增强学习算法, 下面将对重要特征 进行可视化展示",
		loc = 4 / 2, delayDisappear = 4, delayAppear = 5, finalText = true);

	// remove bottom text
	changeBottomText(newText = "",
		loc = 1 / 2, delayDisappear = 0, delayAppear = 1);


	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(6 * 700).duration(2100)
		.style("opacity", 0)
		.each("end", function () { d3.selectAll(".arc").remove(); });

};/*Draw1*/

function ShowSkill() {

};/*ShowSkill*/