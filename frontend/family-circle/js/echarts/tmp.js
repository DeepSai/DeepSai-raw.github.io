var json = {
    "nodes": [{
        "label": "求实进取",
        "id": "求实进取",
        "size": 40
    }, {
        "label": "危机处理",
        "id": "危机处理",
        "size": 5
    }, {
        "label": "推动变革",
        "id": "推动变革",
        "size": 5
    }
    ],
    "edges": [
        {
            "sourceID": "危机处理",
            "targetID": "求实进取",
            // "size": 20
        },
        {
            "sourceID": "推动变革",
            "targetID": "求实进取",
            // "size": 20
        }
    ]
};

var work_personality = [5.11, 5.89, 4.44, 4.89, 5.44, 4.33, 4., 4.78, 5.89, 4.11, 5.44,
    5.56, 4.11, 5., 6., 3.56, 4.11, 4.89, 5., 5.22, 5.22, 4.33,
    3.78, 4.22, 5.89, 3.89, 4.44, 5.22, 4.89, 3.89, 4.56, 4.89, 5.33,
    3.78, 4., 4.67, 5.67, 4.89, 4.11, 4.67, 4.67, 6.44, 3.33, 5.33,
    4.44, 4.67, 4.89, 5., 3.78, 4.89, 5.44, 5.11, 4.33, 3.78, 4.44,
    4.67, 5.33, 4.11, 5.56, 4.44, 3.44, 5.44, 5.22, 4.33, 5.44, 4.44,
    4.78, 4.89, 5.33, 3.78, 5.56, 3.67, 6.11, 4.78, 4.44, 4.89, 6.89,
    5.44, 4.56, 5., 5.33, 6., 4.67, 4.78, 3.56, 3.89, 5.67, 3.78,
    4.67, 4.22, 7., 4.33, 4.56, 5., 5.56, 4.11, 4.44, 4., 2.33,
    4.22, 5.22, 5.33, 6.33, 4.22, 5.44, 4.33, 7., 5.44, 5.67, 4.67,
    5.67, 3.44, 5.89, 3.22, 7.11, 4.89, 4.33, 5.11, 4.22, 2.22, 5.89,
    4.33, 3.89, 4.78, 3.78, 4.89, 6.78, 4.56, 5.11, 5.89, 3.22, 4.33,
    4.89, 5.44, 5.11, 5.11, 3.67, 5.67, 5., 4.67, 4.78, 4.89, 5.89,
    3.78, 4.67, 5.56, 5.44, 4.33, 4.56, 5., 5.22, 4.78, 5., 5.89,
    4.44, 5.67, 4.89, 6.22, 5.56, 4.22, 3.67, 4.78, 4.89, 5.22, 5.22,
    4.89, 4.11, 5., 4.11, 5.33, 5.56, 4.56, 5.33, 4.67, 4.22, 4.44,
    5.78, 4.11, 4.67, 4.22, 5.33, 4.67, 1.78, 6.44, 4.33, 4.78, 3.67,
    4.22, 4.44, 5.78, 5.67, 6.22, 4.56, 4., 4.44, 5.11, 4.44, 6.56,
    6.11, 5.22, 6.22, 4.56, 3.33, 4.44, 5.11, 4.67, 4.11, 4.67, 3.44,
    4.44, 3.89, 4.33, 5.56, 6.67, 4.22, 5., 4.33, 5.22, 4.67, 2.67,
    3.33, 4.22, 5.33, 4.33, 5.78, 5.33, 5., 6.22, 4.22, 5.44,
    5.33, 4., 5.89, 5.22, 5., 4.33, 3.56, 4.56, 4.89, 4.22, 5.56,
    5.67, 5.11, 4.11, 5.89, 3.67, 3.33, 3.78, 4.56, 3.22, 4.56, 3.44,
    6.11, 4.78, 3.44, 3.89, 4.22, 3.78, 5., 5.44, 4.33, 5., 6.78,
    4.44, 5.44, 5.78, 6.22, 3.89, 4.44, 3.78, 5.33, 5.11, 4.89, 5.89,
    4.44, 4.22, 4.33, 5.89, 6.89, 4.56, 5.11, 4.56, 4.11, 5.44, 5.11,
    4., 4.56, 6.33, 4.67, 4.56, 6.33, 4.44, 4.78, 3.89, 4.56, 3.89,
    5.56, 3.89, 6.11, 6., 3.78, 4.44, 4.33, 4.11, 4.56, 6.11,
    2.78, 5.56, 4., 4.78, 4.89, 3.89, 2.78, 5.33, 3.33, 6.33, 4.22,
    5., 3.22, 4.89, 3.44, 3.56, 5.33, 4., 4.67, 4.33, 4.89, 4.89,
    5.22, 4.11, 5.67, 6.22, 5.11, 5.78, 4.44, 6., 2.89, 4.33, 3.89,
    4.67, 5.67, 6.11, 4.11, 4.22, 4.56, 5.33, 3.67, 4.44, 4.89, 6.56,
    5., 5.56, 5., 4.89, 3.33, 3.33, 4.22, 5., 4.89, 6.67, 5.33,
    4.33, 4.56, 6.11, 4.56, 3.67, 3.89, 5.33, 4.78, 4.44, 3.78, 5.78,
    4.11, 4., 4., 5.78, 3.67, 4.44, 4.89, 4.33, 5.11, 4.67, 4.11,
    4.22, 4.67, 4.11, 4.78, 5.11, 5.33, 6., 4.78, 4.56, 4.44, 5.11,
    5.89, 3.67, 5.33, 4.11, 6.78, 4.44, 1., 4.22, 3.56, 3.78, 3.67,
    4.89, 3.44, 3.89, 7.22, 5., 5.89, 6., 4., 5., 4.22,
    3.33, 5., 4.44, 4., 5., 3.67, 4.44, 5., 6.56, 5.11,
    5.22, 6.56, 3.44, 3.78, 3.78, 3.78, 4.56, 4.78, 5.44, 5.33, 4.11,
    5.33, 5.22, 4.11, 4.33, 5.67, 3.67, 5., 5.78, 5.11, 5.89, 4.22,
    4.89, 6.44, 5.11, 6.33, 4.67, 5.78, 6.56, 6.89, 4.56, 5.22, 4.89,
    4.56, 3.78, 5.11, 4.33, 6.67, 4., 5.44, 4.56, 4.11, 4.44, 5.33,
    5.67, 4.67, 4.22, 5.67, 5.33, 4., 4., 5.56, 5.89, 4.89, 5.56,
    4.33, 5.89, 3.33, 4.78, 6.56, 5.78, 4.56, 4.78, 4.67, 4.11, 5.56,
    3.33, 4.89, 3.33, 4.56, 4.44, 7., 4.89, 5.78, 5.33, 4.22, 5.33,
    4.89, 4.44, 6.44, 7.11, 4.22, 6.89, 5.56, 4.33, 5., 5., 6.33,
    1.44, 6.89, 5.11, 5.44, 4.78, 4.33, 5.11, 4.22, 3.56, 5.11, 5.22,
    4.67, 4.56, 4.33, 3.67, 5.67, 4.22, 4.67, 3.89, 5.67, 5.56, 4.33,
    3.89, 6.22, 5.33, 5.33, 4.11, 5.78, 4.67, 4., 4.56, 3.67, 4.89,
    7.22, 5.56, 6.33, 5.67, 4.89, 6.11, 4.44, 5.56, 5.11, 4.56, 4.56,
    1., 5., 4.33, 4.67, 4.44, 5.22, 5.67, 4.78, 5., 5.44, 4.33,
    4.89, 5.56, 5., 4., 4., 4.33, 5.22, 6.33, 4.22, 4.78,
    5.11, 6.78];

var job_ability = [6., 6.6, 6.2, 6., 4.8, 5.4, 5.6, 6.2, 6.6, 5.4, 6.6, 6.2, 5.6,
    5.8, 6.4, 4.6, 5.4, 6., 5.6, 5.4, 5.4, 6., 5.2, 5.8, 5.6, 5.4,
    5.8, 5.6, 5.4, 5.8, 5.4, 6.4, 6., 5.8, 5.8, 5.6, 5.8, 6.2, 5.8,
    5.6, 6., 7.2, 5.4, 6.4, 5.6, 5.6, 6.4, 6., 5., 5.6, 5.6, 5.6,
    5.8, 5.6, 5.8, 6., 6.4, 6.6, 6.6, 6., 5., 6.4, 6.2, 5.2, 6.2,
    5.6, 6., 6.2, 6.4, 5.4, 5.6, 6.2, 5.8, 6.2, 6., 5.8, 6.4, 6.,
    5.6, 6.2, 6.2, 6.4, 6.2, 6.6, 5.8, 5.8, 6.8, 5.6, 5.8, 5.2, 6.,
    6.2, 6., 5.6, 5.4, 6., 6., 5.6, 3.8, 6.6, 5.8, 6.2, 6.2, 5.8,
    6.2, 5.6, 6.8, 6.8, 6., 6., 6.6, 4.8, 6.6, 4.2, 7., 5.6, 5.6,
    6.4, 6.2, 5.8, 5.8, 6.2, 5.4, 6., 5.4, 5.4, 6.6, 4.8, 5.8, 6.4,
    5.6, 5.6, 5.6, 6., 6., 5.4, 5.2, 6., 5.4, 6.2, 6., 5.6, 6.4,
    5.6, 5.8, 5.8, 6.2, 5.8, 6., 4.8, 5.8, 6.2, 6.2, 5.8, 6., 6.2,
    5.6, 7.2, 6.6, 6.2, 5.8, 6.4, 6.2, 6., 6.6, 5.4, 5.6, 5.6, 5.6,
    5.8, 6., 5.8, 5.8, 6., 5.2, 5.4, 6.2, 5.4, 6.6, 5.6, 6., 5.8,
    5.2, 6.2, 6., 6., 5., 5.2, 5.8, 6.4, 5.8, 6.8, 5.6, 5.6, 6.,
    6.2, 6., 6.6, 6., 6., 5.4, 6.2, 5.2, 5.4, 5.6, 5.6, 6., 6.,
    6., 5.8, 5.4, 5.6, 5.8, 6.2, 5.4, 5.8, 6.2, 6., 5.6, 4.8, 3.8, 5.8, 6.2, 5.6, 6.2, 6.4, 6.8, 6.8, 6.6, 5.6, 5.6, 7.,
    6.4, 6., 6.2, 5.2, 5.8, 5.4, 5.6, 5.8, 6.4, 6.6, 5.8, 6.6, 7.2,
    4.4, 5., 5.4, 5.4, 6.2, 5., 6., 5.6, 5.4, 6., 6., 5.4, 5.6,
    5.8, 5.8, 6., 7., 5.8, 5.8, 5.8, 6.2, 5.4, 5.2, 5.6, 5.4, 5.6,
    6., 6., 5.4, 6.4, 6.2, 6.2, 6.6, 5.8, 6.2, 6., 6.2, 6., 6.2,
    5.2, 5.8, 6.2, 6.2, 5.2, 6.4, 6.2, 5., 5.6, 4.4, 5.6, 6.2, 6.,
    6.2, 6.4, 5.6, 5., 6.6, 6., 5.4, 6.4, 5., 5.8, 5.2, 5.4,
    5.8, 6.8, 4.4, 6.4, 5., 5.4, 5.8, 6.2, 4.4, 5.8, 5.2, 5.8, 6.2,
    5.8, 5.2, 6., 6.2, 6.4, 6.4, 5.6, 5.8, 6.4, 5.8, 5.8, 5.2, 6.4,
    4.4, 5.4, 4.2, 5.6, 6.6, 6.4, 5.8, 6.2, 6.2, 6.2, 3.6, 5.6, 6.2,
    6.2, 5.6, 6.8, 5.8, 5.8, 4.6, 5.4, 5.8, 6., 6.4, 6., 6., 5.6,
    6.4, 6., 5.4, 5., 4.4, 6.2, 4.4, 5.8, 6., 6.4, 4.2, 5.8, 5.2,
    5.8, 5.2, 6., 5.6, 5., 6.2, 6.2, 5.8, 5., 6.2, 5.2, 5.8, 5.8,
    6., 6., 5.4, 5.8, 4.8, 5.8, 5.2, 5.2, 6., 5.2, 6.6, 5.8, 3.,
    5.4, 6., 6., 6., 5.8, 4.2, 5.8, 6.2, 5.4, 6.8, 6.4, 5.8,
    5.8, 5.4, 5.2, 5.4, 5.8, 6., 6., 5.2, 5.4, 6.4, 6., 5.6,
    6.2, 6.4, 6.4, 4.6, 4.4, 6., 5.8, 5.6, 6.2, 5.6, 5.2, 6.2, 5.2,
    5., 4.8, 6., 6., 6., 5.8, 6.2, 6.2, 5.6, 6.4, 6., 6.8, 6.8,
    5.4, 6.4, 6.2, 6., 5.4, 6., 6.8, 6.2, 5.8, 5.6, 4.2, 6.8, 5.6,
    6.2, 6.8, 5.8, 6., 6.2, 7., 6.2, 6.4, 5.8, 6.4, 4.8, 6.2, 5.8,
    6., 5.4, 6., 5.8, 6.6, 5.2, 5.4, 6.4, 6.2, 6., 5.8, 5.6, 5.6,
    6.2, 5.8, 6., 5.2, 5.2, 5.4, 7.6, 5.8, 6.4, 5.2, 5.4, 6.2, 6.6,
    6., 5.8, 6.6, 5.8, 6., 6.6, 6., 5.6, 6.6, 6.6, 4., 5.6, 6.2,
    6.6, 6., 6., 5.4, 5.2, 3.8, 7., 5.6, 5.4, 5.8, 6.6, 4.4, 5.8,
    5.8, 5.6, 6.2, 6.2, 6.2, 5.8, 6.2, 7., 6.6, 6., 5., 6.4, 6.2,
    6., 6., 5.6, 6.4, 7.2, 6., 7., 6.2, 5.8, 5.8, 6.2, 7., 6.2,
    5.8, 6., 2.8, 6., 5.8, 5.8, 5.4, 5.6, 6.2, 6., 5.6, 5.4, 5.8,
    5.6, 6., 5.2, 5.6, 6., 5.4, 6.4, 6.6, 5.2, 6., 6., 6.4];

var social_motivation = [7.67, 7., 5., 5., 3.67, 4., 3.67, 4., 6.67, 3.33, 4.67,
    5.33, 3., 4.33, 7.67, 3.33, 6.67, 5.67, 6.33, 4.67, 4., 5.,
    3.67, 3.67, 5.33, 3.67, 5.33, 5.33, 6.67, 4., 3.67, 4.67, 3.67,
    3.67, 5., 5.67, 4., 6.67, 3.33, 4.33, 6.33, 7., 4.33, 5.33,
    5.67, 5.67, 3.33, 5.67, 4.67, 5.33, 6.33, 6., 4.33, 4., 3.,
    5., 6.67, 6., 5.67, 5.67, 4.67, 6.33, 5., 5.33, 5.33, 3.33,
    4.33, 2.33, 7., 6., 6.33, 4.33, 5., 4., 5.67, 5.33, 6.,
    4.67, 5.67, 5., 5., 6., 4.67, 5.33, 3.67, 5.67, 6.33, 3.67,
    4.67, 5., 6.67, 6.33, 2.67, 7.67, 5.33, 5., 3.67, 4.67, 2.33,
    4.67, 4., 5., 6.67, 4.33, 5.33, 4.67, 5.67, 5.67, 8.67, 5.33,
    7., 4.67, 4.33, 3., 6.33, 6., 5.33, 5.33, 2.33, 1.33, 6.33,
    3., 4., 4.67, 3.67, 4., 7.33, 3.33, 7., 7., 5.67, 4.,
    6.67, 4.33, 7.67, 4.67, 5., 5.67, 5.33, 5., 4.67, 6.67, 6.33,
    4.33, 4., 5., 6.33, 3.33, 3., 3.33, 4.67, 5., 6.67, 6.33,
    4.33, 6.33, 4.67, 6.67, 5.67, 4.33, 3., 4.33, 5., 4.33, 5.33,
    4.67, 4., 6., 2.67, 6.67, 6.33, 5.33, 5.67, 6.33, 5., 3.67,
    6.67, 3.67, 6.33, 5., 5.33, 6., 3., 7.33, 4., 4.33, 4.67,
    4., 4.67, 6., 5.67, 6.67, 5.67, 5.33, 3.33, 6.33, 5., 6.,
    8.33, 6.33, 8.33, 4.67, 2.67, 4.67, 7.67, 5.67, 6., 5., 5.,
    5.33, 4., 4.67, 7.33, 6.67, 4.33, 5.33, 4., 5.33, 3.33, 2.,
    2.33, 3., 7.67, 4.33, 5.33, 6., 5., 7.67, 4.67, 6.67,
    6., 4.67, 7., 6., 7.67, 6.67, 2.67, 7.33, 6., 5., 7.67,
    5., 6., 4.33, 7., 2., 2., 5., 3.33, 4.67, 4.67, 3.,
    5.33, 4., 2.67, 3.67, 5.67, 3.67, 5.67, 5., 4.67, 4., 6.67,
    5., 6.33, 7., 7.33, 2.67, 4.33, 4.33, 5.67, 5.67, 5.67, 5.67,
    5., 3.67, 4., 7.33, 6.67, 4.67, 3.67, 5.67, 5.67, 6., 6.33,
    3., 5.67, 6.67, 6., 6.33, 6.33, 4.33, 5.33, 5.33, 4.67, 3.33,
    6.33, 4., 7.33, 6., 5., 5.67, 2.67, 4.33, 6.33, 7.,
    4., 7.33, 8.33, 6., 6.67, 5.67, 6.67, 6., 3.67, 6., 2.67,
    6., 4., 5.33, 3.33, 4., 7., 3.67, 5., 3.33, 4., 5.33,
    6.67, 4.67, 6., 5.67, 5.67, 3.67, 5.67, 7.67, 4., 4.33, 4.,
    8.33, 6., 5., 4.33, 5.33, 4.67, 5., 6., 3.67, 6.67, 7.,
    5., 6.33, 5.33, 5., 4.67, 6.67, 4., 4.33, 3.67, 5., 5.67,
    5., 2.67, 4.67, 4., 5.33, 3.33, 6.33, 8., 4.67, 2.67, 7.,
    2.67, 4.33, 4.33, 6.67, 4.67, 4., 6., 5.33, 5.33, 6.67, 4.,
    6.33, 6.33, 5.33, 5., 5.67, 6.67, 5.67, 4., 5.33, 3.67, 6.33,
    6.67, 2.33, 4.33, 4.67, 5., 3.33, 1., 4., 6.33, 3.67, 3.33,
    5., 2., 4., 7.67, 4.33, 6.33, 4.67, 5.33, 6.33, 5.67,
    3.67, 7.33, 3.33, 3.67, 8., 3.33, 5.33, 5.33, 6., 7.33,
    4.33, 9., 4.67, 4.33, 3., 3., 4., 6.33, 5.33, 7., 6.,
    5., 5.33, 5.67, 4.33, 6.67, 4., 6.33, 6., 4.67, 6.67, 5.,
    3.67, 5.67, 4.33, 7.33, 6., 6.33, 7.33, 7.67, 4.67, 7.33, 4.67,
    5.67, 4., 8., 3.33, 5.67, 3.33, 6., 4.67, 6.67, 5.67, 5.67,
    6., 5.67, 5., 6.33, 5., 5.67, 7.33, 4.67, 6., 5., 6.67,
    5., 5.67, 5., 5., 6.67, 5.33, 3., 3.33, 3.33, 4.33, 7.,
    4., 5.33, 3.33, 4., 4.67, 5.67, 6.67, 8.67, 3., 2.33, 4.67,
    5.67, 4.67, 6., 6., 3.33, 7.33, 6.67, 4.33, 5., 6.33, 8.33,
    2.33, 4.67, 4.33, 4.67, 4.33, 6.33, 7., 4., 2., 4.67, 6.33,
    4.33, 5., 5.33, 3., 4.67, 4.67, 6.67, 3.33, 7., 4.33, 2.67,
    4., 7.67, 4.67, 5., 5., 6.67, 6.33, 5.67, 4.33, 2., 6.,
    6.33, 7.33, 6., 5.33, 5.33, 6.67, 5.33, 7., 6., 5.67, 6.,
    1., 5., 4.33, 5.67, 3.67, 5.33, 4.67, 4.33, 3.33, 5.33, 3.67,
    4.33, 6.67, 5., 4., 4.67, 5.67, 6.33, 5.33, 4., 6.,
    7.67, 6.]
