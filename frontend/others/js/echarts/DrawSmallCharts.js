function DrawGroupCharacter() {
    var tmp = echarts.init(document.getElementById('groupCharacter'));
    tmp.showLoading();
    // console.log()
    // $.getJSON('./tmp.json', function (json) {
    tmp.hideLoading();
    tmp.setOption(option = {
        title: {
            text: '人群素质'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                // layout: 'force',
                // force: {
                //     gravity: 0.01
                // },
                layout: 'circular',
                data: json.nodes.map(function (node) {
                    var size = node.size;
                    if (size >= 200) {
                        size = 200;
                    }
                    if (size < 20) {
                        size = 20;
                    }
                    return {
                        // x: node.x,
                        // y: node.y,
                        id: node.id,
                        name: node.label,
                        // symbolSize: node.size,
                        symbolSize: size,
                        // itemStyle: {
                        //     normal: {
                        //         color: node.color
                        //     }
                        // }
                    };
                }),
                edges: json.edges.map(function (edge) {
                    return {
                        source: edge.sourceID,
                        target: edge.targetID
                    };
                }),
                itemStyle: {
                    opacity: 0.7
                },
                lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                },
                label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    },
                    // normal: {
                    //     show: true
                    // }
                },
                roam: false,
                focusNodeAdjacency: true,


            }
        ]
    }, true);
    // });

};
function DrawGroupCharacter2() {
    var tmp = echarts.init(document.getElementById('groupCharacter2'));
    tmp.showLoading();
    // console.log()
    // $.getJSON('./tmp.json', function (json) {
    tmp.hideLoading();
    tmp.setOption({
        title: {
            text: 'NPM Dependencies'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                // progressiveThreshold: 700,
                data: data_quality.nodes.map(function (node) {
                    return {
                        x: node.x,
                        y: node.y,
                        id: node.id,
                        name: node.label,
                        symbolSize: node.size,
                        itemStyle: {
                            normal: {
                                color: node.color
                            }
                        }
                    };
                }),
                edges: data_quality.edges.map(function (edge) {
                    return {
                        source: edge.sourceID,
                        target: edge.targetID
                    };
                }),
                label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    }
                },
                // roam: true,
                focusNodeAdjacency: true,
                lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                }
            }
        ]
    }, true);
    // });

};
function DrawGroupCharacter3() {
    var tmp = echarts.init(document.getElementById('groupCharacter3'));
    tmp.showLoading();
    // console.log()
    // $.getJSON('./tmp.json', function (json) {
    tmp.hideLoading();
    tmp.setOption(option = {
        title: {
            text: '人群素质'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                // layout: 'force',
                // force: {
                //     gravity: 0.01
                // },
                layout: 'circular',
                data: json.nodes.map(function (node) {
                    var size = node.size;
                    if (size >= 200) {
                        size = 200;
                    }
                    if (size < 20) {
                        size = 20;
                    }
                    return {
                        // x: node.x,
                        // y: node.y,
                        id: node.id,
                        name: node.label,
                        // symbolSize: node.size,
                        symbolSize: size,
                        // itemStyle: {
                        //     normal: {
                        //         color: node.color
                        //     }
                        // }
                    };
                }),
                edges: json.edges.map(function (edge) {
                    return {
                        source: edge.sourceID,
                        target: edge.targetID
                    };
                }),
                itemStyle: {
                    opacity: 0.7
                },
                lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                },
                label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    },
                    // normal: {
                    //     show: true
                    // }
                },
                roam: false,
                focusNodeAdjacency: true,


            }
        ]
    }, true);
    // });

};

// 金字塔图
function DrawGroupScore() {
    var bins = ecStat.histogram(job_match, 'sturges');
    // console.log(bins);
    var total = job_match.length
    var arr = [];
    for (var i = 0; i < bins.customData.length; i++) {
        arr.push((bins.customData[i][2] / total) * 100)
    }
    // console.log(arr)
    var option = {
        title: {
            text: '匹配度结构',
            // subtext: '纯属虚构',
            left: 'left',
            // top: 'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        calculable: true,
        series: [
            {
                name: '金字塔',
                type: 'funnel',
                width: '80%',
                height: '80%',
                left: '5%',
                top: '5%',
                sort: 'none',
                data: arr
                // data: [10, 20, 30, 40]
                // data: [
                //     { value: 60, name: '访问' },
                //     { value: 30, name: '咨询' },
                //     { value: 10, name: '订单' },
                //     { value: 80, name: '点击' },
                //     { value: 100, name: '展现' }
                // ]
            }
        ]
    };
    var structer = echarts.init(document.getElementById('structer'));
    structer.setOption(option);
};

// histogram1
function DrawTest1() {
    // var girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];
    // var bins1 = ecStat.histogram(work_personality, 'scott');
    var bins1 = ecStat.histogram(work_personality);
    var bins2 = ecStat.histogram(job_ability);
    var bins3 = ecStat.histogram(social_motivation);
    var option = {
        title: {
            text: '综合得分',
            left: 'left',
            // top: 20
        },
        // color: ['rgb(25, 183, 207)'],
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            name: '得分',
            nameLocation: 'center',
            scale: true, //这个一定要设，不然barWidth和bins对应不上
        }],
        yAxis: [{
            type: 'value',
            name: '人数',
            nameLocation: 'center'
        }],
        legend: {
            data: ['工作个性', '工作能力', '社会动机']
        },
        series: [{
            name: '社会动机',
            // type: 'line',
            type: 'bar',
            itemStyle: {
                // color: "#EC1D25"
                color: 'pink',
                opacity: .9
            },
            barWidth: '93%',
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideTop',
            //         formatter: function (params) {
            //             return params.value[1];
            //         }
            //     }
            // },
            smooth: true,
            data: bins3.data
        }, {
            name: '工作个性',
            // type: 'line',
            type: 'bar',
            itemStyle: {
                color: '#29b7cd',
                opacity: .9
            },
            barWidth: '93%',
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideTop',
            //         formatter: function (params) {
            //             return params.value[1];
            //         }
            //     }
            // },
            smooth: true,
            data: bins1.data
        }, {
            name: '工作能力',
            // type: 'line',
            type: 'bar',
            itemStyle: {
                color: 'steelblue',
                opacity: .9
            },
            barWidth: '93%',
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideTop',
            //         formatter: function (params) {
            //             return params.value[1];
            //         }
            //     }
            // },
            smooth: true,
            data: bins2.data
        }]
    };
    var test1 = echarts.init(document.getElementById('test1'));
    test1.setOption(option);
};

// histogram2
function DrawTest2() {
    // var girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];
    // var bins1 = ecStat.histogram(work_personality, 'scott');
    var bins1 = ecStat.histogram(work_personality);
    var bins2 = ecStat.histogram(job_ability);
    var bins3 = ecStat.histogram(social_motivation);
    var option = {
        title: {
            text: '综合得分',
            left: 'left',
            // top: 20
        },
        // color: ['rgb(25, 183, 207)'],
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            name: '得分',
            nameLocation: 'center',
            scale: true, //这个一定要设，不然barWidth和bins对应不上
        }],
        yAxis: [{
            type: 'value',
            name: '人数',
            nameLocation: 'center'
        }],
        legend: {
            data: ['工作个性', '工作能力', '社会动机']
        },
        series: [{
            name: '社会动机',
            type: 'line',
            // type: 'bar',
            itemStyle: {
                // color: "#EC1D25"
                color: 'pink',
                opacity: 1
            },
            barWidth: '93%',
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideTop',
            //         formatter: function (params) {
            //             return params.value[1];
            //         }
            //     }
            // },
            smooth: true,
            data: bins3.data
        }, {
            name: '工作个性',
            type: 'line',
            // type: 'bar',
            itemStyle: {
                color: '#29b7cd',
                opacity: 1
            },
            barWidth: '93%',
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideTop',
            //         formatter: function (params) {
            //             return params.value[1];
            //         }
            //     }
            // },
            smooth: true,
            data: bins1.data
        }, {
            name: '工作能力',
            type: 'line',
            // type: 'bar',
            itemStyle: {
                color: 'steelblue',
                opacity: 1
            },
            barWidth: '93%',
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideTop',
            //         formatter: function (params) {
            //             return params.value[1];
            //         }
            //     }
            // },
            smooth: true,
            data: bins2.data
        }]
    };
    var test2 = echarts.init(document.getElementById('test2'));
    test2.setOption(option);
};

DrawGroupCharacter();
DrawGroupCharacter2();
DrawGroupCharacter3();
DrawGroupScore();
DrawTest1();
DrawTest2();