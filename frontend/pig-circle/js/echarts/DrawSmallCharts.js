function DrawSkill() {
    var skill = echarts.init(document.getElementById('skill'));
    // 技能（太阳图）
    var option_skill = {
        title: {
            text: '技能'
        },
        angleAxis: {
            type: 'category',
            data: ['养殖专业能力', '阿米巴经营管理知识', '母猪场管理知识',
                '畜牧兽知识', '生物安全管理知识'],
            z: 1
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [84.78, 49.78, 75.87,
                65.43, 81.30],
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
                { name: '有效督导', max: 100 },
                { name: '积极主动', max: 100 },
                { name: '结果达成', max: 100 },
                { name: '坚韧不拔', max: 100 },
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [60, 60, 60, 50.21],
                    name: '母猪厂管理岗'
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
            "value": 177,
            "name": "成就动机",
            "path": "Accessibility"
        },
        {
            "value": 92,
            "name": "目标导向",
            "path": "Accessibility"
        },
        {
            "value": 90,
            "name": "关系维护",
            "path": "Accessibility"
        },
        {
            "value": 85,
            "name": "发掘客户需求",
            "path": "Accessibility"
        },
        {
            "value": 82,
            "name": "成本意识",
            "path": "Accessibility"
        }
    ];
    var weak_data = [
        {
            "value": 109,
            "name": "灵活应变",
            "path": "Accessibility"
        },
        {
            "value": 109,
            "name": "亲和动机",
            "path": "Accessibility"
        },
        {
            "value": 101,
            "name": "外向",
            "path": "Accessibility"
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
                data: [{ value: 2.68, name: '成长动力' }]
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
                data: [{ value: 1.65, name: '成长潜力' }]
            }
        ]
    };
    growth.setOption(option_growth);
};