function DrawSkill() {
    var skill = echarts.init(document.getElementById('skill'));
    // 技能（太阳图）
    var option_skill = {
        title: {
            text: '技能'
        },
        angleAxis: {
            type: 'category',
            data: ['沟通协作能力', '水产品类知识', '饲料产品知识',
                '法规知识', '营销知识', '财务知识',
                '技术服务知识', '市场拓展', '谈判技能', '市场营销'],
            z: 1
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [70, 72, 74,
                65, 72, 52,
                69, 46, 70, 72],
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
                { name: '坚忍不拔', max: 100 },
                { name: '积极主动', max: 100 },
                { name: '结果达成', max: 100 },
                { name: '客户导向', max: 100 },
                { name: '业务视角', max: 100 },
                { name: '团队领导力', max: 100 }
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [44.67, 67, 60, 67, 67, 70],
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
            "value": 122,
            "name": "成就动机",
            "path": "Accessibility"
        },
        {
            "value": 74,
            "name": "进取心",
            "path": "Accessibility"
        },
        {
            "value": 69,
            "name": "发掘客户需求",
            "path": "Accessibility"
        },
        {
            "value": 49,
            "name": "目标导向",
            "path": "Accessibility"
        },
        {
            "value": 48,
            "name": "关系建立",
            "path": "Accessibility"
        }
    ];
    var weak_data = [
        {
            "value": 75,
            "name": "学习意识",
            "path": "Accessibility"
        },
        {
            "value": 71,
            "name": "坚韧不拔",
            "path": "Accessibility"
        },
        {
            "value": 64,
            "name": "权利动机",
            "path": "Accessibility"
        }
    ];
    var option_charac_strong = {
        title: {
            text: '强需要性格',
        },
        series: [
            {
                name: 'remove',
                type: 'treemap',
                roam: false,
                visibleMin: 300,
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
                name: 'remove',
                type: 'treemap',
                roam: false,
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
                data: [{ value: 1.5, name: '成长动力' }]
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
                data: [{ value: 2.14, name: '成长潜力' }]
            }
        ]
    };
    growth.setOption(option_growth);
};