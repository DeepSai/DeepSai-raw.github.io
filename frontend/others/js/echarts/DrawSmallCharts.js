function DrawSkill() {
    var skill = echarts.init(document.getElementById('skill'));
    // 技能（太阳图）
    var option_skill = {
        title: {
            text: '技能'
        },
        angleAxis: {
            type: 'category',
            data: ['养殖专业能力', '市场拓展', '家庭农场管理',
                '阿米巴经营管理知识', '生物安全管理知识'],
            z: 1
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [82.4, 64.8, 80,
                65.6, 74.4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
        }]
    };
    skill.setOption(option_skill);
};

function DrawQuality() {
    var quality = echarts.init(document.getElementById('quality'));
    // 素质（雷达图）
    var option_quality = {
        title: {
            text: '素质'
        },
        tooltip: {},
        // legend: {
        //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#333',
                    // backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '积极主动', max: 100 },
                { name: '人际影响', max: 100 },
                { name: '客户导向', max: 100 },
                { name: '坚韧不拔', max: 100 },
                { name: '结果达成', max: 100 },
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [60, 70, 60, 52, 60],
                    name: '饲料疫苗营销岗'
                }
            ]
        }]
    };
    quality.setOption(option_quality);

};

function DrawCharac() {
    var charac_strong = echarts.init(document.getElementById('characStrong'));
    var charac_weak = echarts.init(document.getElementById('characWeak'));
    // 性格（矩形树图）



    var strong_data = [
        {
            "value": 92,
            "name": "成就动机",
        },
        {
            "value": 50,
            "name": "关系维护",
        },
        {
            "value": 47,
            "name": "发掘客户需求",
        },
        {
            "value": 45,
            "name": "进取心",
        },
        {
            "value": 44,
            "name": "成本意识",
        }
    ];
    var weak_data = [
        {
            "value": 58,
            "name": "权利动机",
        },
        {
            "value": 51,
            "name": "灵活应变",
        },
        {
            "value": 50,
            "name": "外向",
        }
    ];

    var option_charac_strong = {
        title: {
            text: '强需要性格',
        },
        series: [
            {
                name: '性格',
                type: 'treemap',
                roam: false,
                breadcrumb: false,
                // visibleMin: 300,
                itemStyle: {
                    normal: {
                        borderColor: '#fff'
                    }
                },
                data: strong_data
            }
        ]
    };
    var option_charac_weak = {
        title: {
            text: '弱需要性格',
        },
        series: [
            {
                name: '性格',
                type: 'treemap',
                roam: false,
                breadcrumb: false,
                height: '40%',
                // visibleMin: 300,
                itemStyle: {
                    normal: {
                        borderColor: '#fff'
                    }
                },
                data: weak_data
            }
        ]
    }

    charac_strong.setOption(option_charac_strong);
    charac_weak.setOption(option_charac_weak);
};



function DrawGrowth() {
    var growth = echarts.init(document.getElementById('growth'));
    // 成长性(仪表盘)
    var option_growth = {
        title: {
            text: '成长性'
        },
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            show: true,
            feature: {
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: '成长动力',
                type: 'gauge',
                center: ['25%', '55%'],    // 默认全局居中
                radius: '50%',
                min: 0,
                max: 5,
                startAngle: 180,
                endAngle: 0,
                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                },
                data: [{ value: 2.56, name: '成长动力' }]
            },
            {
                name: '成长潜力',
                type: 'gauge',
                center: ['75%', '55%'],    // 默认全局居中
                radius: '50%',
                min: 0,
                max: 5,
                startAngle: 180,
                endAngle: 0,
                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                },
                data: [{ value: 1.92, name: '成长潜力' }]
            }
        ]
    };
    growth.setOption(option_growth);
};


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
                // layout: 'none',
                layout: 'circular',
                // progressiveThreshold: 700,
                data: json.nodes.map(function (node) {
                    return {
                        // x: node.x,
                        // y: node.y,
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
                edges: json.edges.map(function (edge) {
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
                roam: false,
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

function DrawGroupScore() {
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
    var groupScore = echarts.init(document.getElementById('groupScore'));
    groupScore.setOption(option);
};

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