/*//////////////////////////////////////////////////////////
////////////////// Set up the Data /////////////////////////
//////////////////////////////////////////////////////////*/

// var NameProvider = ["Apple", "HTC", "Huawei", "LG", "Nokia", "Samsung", "Sony", "Other"];
var NameProvider = ["技能", "素质", "性格", "成长性", "其他"];

// var matrix = [
// 	[9.6899, 0.8859, 0.0554, 0.443, 2.5471, 2.4363, 0.5537, 2.5471], /*Apple 19.1584*/
// 	[0.1107, 1.8272, 0, 0.4983, 1.1074, 1.052, 0.2215, 0.4983], /*HTC 5.3154*/
// 	[0.0554, 0.2769, 0.2215, 0.2215, 0.3876, 0.8306, 0.0554, 0.3322], /*Huawei 2.3811*/
// 	[0.0554, 0.1107, 0.0554, 1.2182, 1.1628, 0.6645, 0.4983, 1.052], /*LG 4.8173*/
// 	[0.2215, 0.443, 0, 0.2769, 10.4097, 1.2182, 0.4983, 2.8239], /*Nokia 15.8915*/
// 	[1.1628, 2.6024, 0, 1.3843, 8.7486, 16.8328, 1.7165, 5.5925], /*Samsung 38.0399*/
// 	[0.0554, 0.4983, 0, 0.3322, 0.443, 0.8859, 1.7719, 0.443], /*Sony 4.4297*/
// 	[0.2215, 0.7198, 0, 0.3322, 1.6611, 1.495, 0.1107, 5.4264] /*Other 9.9667*/
// ];
/*Sums up to exactly 100*/
var matrix = [
	[1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.1], /*技能 15*/
	[1.0, 1.0, 4.0, 4.0, 4.0, 4.0, 5.0, 5.1], /*素质 28*/
	[1.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 7.1], /*性格 32*/
	[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.1], /*成长性 10*/
	[1.0, 1.0, 2.0, 2.0, 2.0, 2.0, 2.0, 3.1] /*其他 15*/
];
/*Sums up to exactly 100*/


var colors = ["#C4C4C4", "#69B40F", "#EC1D25", "#C8125C", "#008FC8", "#10218B", "#134B24", "#737373"];

/*Initiate the color scale*/
var fill = d3.scale.ordinal()
	.domain(d3.range(NameProvider.length))
	.range(colors);

/*//////////////////////////////////////////////////////////
/////////////// Initiate Chord Diagram /////////////////////
//////////////////////////////////////////////////////////*/

var margin = { top: 20, right: 25, bottom: 20, left: 25 },
	width = 700 - margin.left - margin.right,
	height = 650 - margin.top - margin.bottom,
	innerRadius = Math.min(width, height) * .39,
	outerRadius = innerRadius * 1.04;

/*Initiate the SVG*/
var svg = d3.select("#chart").append("svg:svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("svg:g")
	.attr("transform", "translate(" + (margin.left + width / 2) + "," + (margin.top + height / 2) + ")");


var chord = d3.layout.chord()
	.padding(.04)
	.sortSubgroups(d3.descending) /*sort the chords inside an arc from high to low*/
	.sortChords(d3.descending) /*which chord should be shown on top when chords cross. Now the biggest chord is at the bottom*/
	.matrix(matrix);


/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/

var arc = d3.svg.arc()
	.innerRadius(innerRadius)
	.outerRadius(outerRadius);

var g = svg.selectAll("g.group")
	.data(chord.groups)
	.enter().append("svg:g")
	.attr("class", function (d) { return "group " + NameProvider[d.index]; });

g.append("svg:path")
	.attr("class", "arc")
	.style("stroke", function (d) { return fill(d.index); })
	.style("fill", function (d) { return fill(d.index); })
	.attr("d", arc)
	.style("opacity", 0)
	.transition().duration(1000)
	.style("opacity", 0.4);

/*//////////////////////////////////////////////////////////
////////////////// Initiate Ticks //////////////////////////
//////////////////////////////////////////////////////////*/

var ticks = svg.selectAll("g.group").append("svg:g")
	.attr("class", function (d) { return "ticks " + NameProvider[d.index]; })
	.selectAll("g.ticks")
	.attr("class", "ticks")
	.data(groupTicks)
	.enter().append("svg:g")
	.attr("transform", function (d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
			+ "translate(" + outerRadius + 40 + ",0)";
	});

/*Append the tick around the arcs*/
ticks.append("svg:line")
	.attr("x1", 1)
	.attr("y1", 0)
	.attr("x2", 5)
	.attr("y2", 0)
	.attr("class", "ticks")
	.style("stroke", "#FFF");

/*Add the labels for the %'s*/
ticks.append("svg:text")
	.attr("x", 8)
	.attr("dy", ".35em")
	.attr("class", "tickLabels")
	.attr("transform", function (d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
	.style("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
	.text(function (d) { return d.label; })
	.attr('opacity', 0);

/*//////////////////////////////////////////////////////////
////////////////// Initiate Names //////////////////////////
//////////////////////////////////////////////////////////*/

g.append("svg:text")
	.each(function (d) { d.angle = (d.startAngle + d.endAngle) / 2; })
	.attr("dy", ".35em")
	.attr("class", "titles")
	.attr("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
	.attr("transform", function (d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
			+ "translate(" + (innerRadius + 55) + ")"
			+ (d.angle > Math.PI ? "rotate(180)" : "");
	})
	.attr('opacity', 0)
	.text(function (d, i) { return NameProvider[i]; });

/*//////////////////////////////////////////////////////////
//////////////// Initiate inner chords /////////////////////
//////////////////////////////////////////////////////////*/

var chords = svg.selectAll("path.chord")
	.data(chord.chords)
	.enter().append("svg:path")
	.attr("class", "chord")
	.style("stroke", function (d) { return d3.rgb(fill(d.source.index)).darker(); })
	.style("fill", function (d) { return fill(d.source.index); })
	.attr("d", d3.svg.chord().radius(innerRadius))
	.attr('opacity', 0);

/*//////////////////////////////////////////////////////////	
///////////// Initiate Progress Bar ////////////////////////
//////////////////////////////////////////////////////////*/
/*Initiate variables for bar*/
var progressColor = ["#D1D1D1", "#949494"],
	progressClass = ["prgsBehind", "prgsFront"],
	prgsWidth = 0.4 * 650,
	prgsHeight = 3;
/*Create SVG to visualize bar in*/
var progressBar = d3.select("#progress").append("svg")
	.attr("width", prgsWidth)
	.attr("height", 3 * prgsHeight);
/*Create two bars of which one has a width of zero*/
progressBar.selectAll("rect")
	.data([prgsWidth, 0])
	.enter()
	.append("rect")
	.attr("class", function (d, i) { return progressClass[i]; })
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", function (d) { return d; })
	.attr("height", prgsHeight)
	.attr("fill", function (d, i) { return progressColor[i]; });

/*//////////////////////////////////////////////////////////	
/////////// Initiate the Center Texts //////////////////////
//////////////////////////////////////////////////////////*/
/*Create wrapper for center text*/
var textCenter = svg.append("g")
	.attr("class", "explanationWrapper");

/*Starting text middle top*/
// var note = "收集饲料疫苗营销岗位 的人员基础信息, 并由此产生二级维度, 三级维度信息";
// var note = "饲料疫苗营销岗包括天邦旗下的 饲料板块, 生物制品板块, 生鲜食品板块 负责相关产品的营销及技术服务支持。";
var note = "饲料疫苗营销岗分属于饲料板块, 生物制品板块, 生鲜食品板块, 负责相关产品的营销及技术服务支持。"
var middleTextTop = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", -24 * 10 / 2 + "px")
	.attr("dy", "1em")
	.attr("opacity", 1)
	.text(note)
	.call(wrap, 350);

/*Starting text middle bottom*/
// var note = "收集该岗位人员的基础信息, 并构造新的二级维度, 三级维度; 根据以上信息, 通过1)数据清洗, 2)相关性验证, 3)模型训练等, 最终得到岗位画像";
var note = "采集员工的基础信息, 对这些特征进行相关性验证, 然后进行筛选、重构和编码, 最终得到符合业务逻辑的特征矩阵, 并用于机器学习";

var middleTextBottom = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", 24 * 1 / 2 + "px")
	.attr("dy", "1em")
	.attr('opacity', 1)
	.text(note)
	.call(wrap, 350);


/*//////////////////////////////////////////////////////////
//////////////// Storyboarding Steps ///////////////////////
//////////////////////////////////////////////////////////*/

var counter = 1,
	buttonTexts = ["开始展示", "继续", "展示完毕"],
	opacityValueBase = 0.8,
	opacityValue = 0.4;

/*Order of steps when clicking button*/
d3.select("#clicker")
	.on("click", function (e) {

		//Introduction
		if (counter == 1) { Draw1(); }
		//Show Arc of Apple
		else if (counter == 2) { Draw2(); }
		//Draw the other arcs as well
		else if (counter == 3) { Draw3(); }

		console.log(counter);
		console.log(buttonTexts[counter - 1]);

		counter = counter + 1;

	});

