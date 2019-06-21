var pageData = {
    busi:[// 业务
        {
            logo: "",
            sys_name: "综合办公系统",//业务系统
            links: {
                "线上": "",
                "外网": "",
                "测试": "http://192.168.10.97:18099/sys-busi/material",
                "开发": ""
            },
            accounts: [],
            finished:true
        },
        {
            logo: "",
            sys_name: "智能写作系统",
            links: {
                "线上": "",
                "外网": "",
                "测试": "http://192.168.10.97:18099/smart-web/index",
                "开发": ""
            },
            accounts: [],
            finished:true
        },
        
    ],
    basic:[// 基础平台 
        {
            logo: "",
            sys_name: "数据平台",
            links: {
                "线上": "http://192.168.10.97:19080/navi/",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:true
        },
        {
            logo: "",
            sys_name: "日志平台",
            links: {
                "线上": "",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:false
        },
        {
            logo: "",
            sys_name: "搜索引擎系统",
            links: {
                "线上": "http://192.168.10.97:19080/s/",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:true
        },
        {
            logo: "",
            sys_name: "用户认证中心",
            links: {
                "线上": "",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:false
        },
        {
            logo: "dist/img/logo-know.ico",
            sys_name: "国家知识系统",
            links: {
                "线上": "http://192.168.6.192:8188/app2/",
                "外网": "http://124.204.66.253:8189/app2/",
                "测试": "",
                "开发": ""
            },
            accounts: [{username: "kbuser", password: "123456", info: ""}],
            finished:true
        },
        {
            logo: "dist/img/logo-know.ico",
            sys_name: "领域知识系统",
            links: {
                "线上": "http://192.168.6.192:8188/",
                "外网": "http://124.204.66.253:8189/",
                "测试": "",
                "开发": ""
            },
            accounts: [{username: "kbuser", password: "123456", info: ""}],
            finished:true
        },
        
        {
            logo: "",
            sys_name: "业务百科系统",
            links: {
                "线上": "http://192.168.10.99:9000/baike/login1.jsp",
                "外网": "http://124.205.229.232:9000/baike/login1.jsp",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:true
        },

        {
            logo: "",
            sys_name: "智慧大脑",
            links: {
                "线上": "",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:false
        },
        
        
    ],
    other:[ //其他
        {
            logo: "dist/img/logo-ydyl.png",
            sys_name: "一带一路专题",
            links: {
                "线上": "http://192.168.10.159:8099/",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:true
        },
        {
            logo: "",
            sys_name: "预警系统",
            links: {
                "线上": "",
                "外网": "",
                "测试": "http://192.168.10.97:18099/yujing-fe/#/",
                "开发": ""
            },
            accounts: [],
            finished:true
        },
    ],
    noform:[
        
        {
            logo: "",
            sys_name: "数据动态",
            links: {
                "线上": "http://192.168.10.97:19080/navi/",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [],
            finished:true
        },
        {
            logo: "dist/img/logo-sta.png",
            sys_name: "智图·Smart Text Analyzer",
            links: {
                "线上": "http://192.168.6.25:8188/index",
                "外网": "http://124.204.66.253:8188/index",
                "测试": "http://192.168.10.153:8188/index",
                "开发": "http://192.168.10.79:8188/index"
            },
            accounts: [
                {username: "kbuser", password: "123456", info: "管理员"},
                {username: "webdev1", password: "web", info: "测试员"},
                {username: "data_entry", password: "123456", info: "数据录入员"}
                ],
            description:"",
            finished:true
        },
        {
            logo: "dist/img/logo-fb.png",
            sys_name: "Facebook账号分析系统",
            links: {
                "线上": "http://192.168.10.198:8006/sm",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [{username: "webdev1", password: "wd%2016", info: ""}],
            finished:true
        },
        {
            logo: "dist/img/logo-email.png",
            sys_name: "邮件分析系统",
            links: {
                "线上": "http://192.168.6.80:9000",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [{username: "kbuser", password: "kb%2016", info: ""}],
            finished:true
        },
        {
            logo: "dist/img/logo-family.png",
            sys_name: "亲属关系分析系统",
            links: {
                "线上": "http://192.168.10.197:8195/index",
                "外网": "",
                "测试": "",
                "开发": ""
            },
            accounts: [{username: "kbuser", password: "kb%2016", info: ""}],
            finished:true
        },
    ]
};
 

/* var pageData = [
    // 业务系统
    {
        logo: "",
        sys_name: "业务系统",
        links: {
            "线上": "",
            "外网": "",
            "测试": "http://192.168.10.97:18099/sys-busi/material",
            "开发": ""
        },
        accounts: []
    },
    {
        logo: "",
        sys_name: "综合办公系统",
        links: {
            "线上": "",
            "外网": "",
            "测试": "",
            "开发": ""
        },
        accounts: [],
        finished:false  //开发中
    },

    // 基础平台 

    {
        logo: "",
        sys_name: "数据动态",
        links: {
            "线上": "http://192.168.10.97:19080/navi/",
            "外网": "",
            "测试": "",
            "开发": ""
        },
        accounts: []
    },

    {
        logo: "dist/img/logo-sta.png",
        sys_name: "智图·Smart Text Analyzer",
        links: {
            "线上": "http://192.168.6.25:8188/index",
            "外网": "http://124.204.66.253:8188/index",
            "测试": "http://192.168.10.153:8188/index",
            "开发": "http://192.168.10.79:8188/index"
        },
        accounts: [
            {username: "kbuser", password: "123456", info: "管理员"},
            {username: "webdev1", password: "web", info: "测试员"},
            {username: "data_entry", password: "123456", info: "数据录入员"}
            ],
        description:""
    },
    {
        logo: "dist/img/logo-fb.png",
        sys_name: "Facebook账号分析系统",
        links: {
            "线上": "http://192.168.10.198:8006/sm",
            "外网": "",
            "测试": "",
            "开发": ""
        },
        accounts: [{username: "webdev1", password: "wd%2016", info: ""}]
    },
    {
        logo: "dist/img/logo-email.png",
        sys_name: "邮件分析系统",
        links: {
            "线上": "http://192.168.6.80:9000",
            "外网": "",
            "测试": "",
            "开发": ""
        },
        accounts: [{username: "kbuser", password: "kb%2016", info: ""}]
    },
    {
        logo: "dist/img/logo-family.png",
        sys_name: "亲属关系分析系统",
        links: {
            "线上": "http://192.168.10.197:8195/index",
            "外网": "",
            "测试": "",
            "开发": ""
        },
        accounts: [{username: "kbuser", password: "kb%2016", info: ""}]
    },
    {
        logo: "dist/img/logo-know.ico",
        sys_name: "国家知识系统",
        links: {
            "线上": "http://192.168.6.192:8188/app2/",
            "外网": "http://124.204.66.253:8189/app2/",
            "测试": "",
            "开发": ""
        },
        accounts: [{username: "kbuser", password: "123456", info: ""}]
    },
    {
        logo: "dist/img/logo-know.ico",
        sys_name: "领域知识系统",
        links: {
            "线上": "http://192.168.6.192:8188/",
            "外网": "http://124.204.66.253:8189/",
            "测试": "",
            "开发": ""
        },
        accounts: [{username: "kbuser", password: "123456", info: ""}]
    },
    
    {
        logo: "",
        sys_name: "智能写作系统",
        links: {
            "线上": "",
            "外网": "",
            "测试": "http://192.168.10.97:18099/smart-web/index",
            "开发": ""
        },
        accounts: []
    },
    {
        logo: "",
        sys_name: "业务百科系统",
        links: {
            "线上": "http://192.168.10.99:9000/baike/login1.jsp",
            "外网": "http://124.205.229.232:9000/baike/login1.jsp",
            "测试": "",
            "开发": ""
        },
        accounts: []
    },
    
    {
        logo: "",
        sys_name: "搜索引擎系统",
        links: {
            "线上": "http://192.168.10.97:19080/s/",
            "外网": "",
            "测试": "",
            "开发": ""
        },
        accounts: []
    },

    {
        logo: "dist/img/logo-ydyl.png",
        sys_name: "一带一路专题",
        links: {
            "线上": "http://192.168.10.97:8099/#/",
            "外网": "",
            "测试": "",
            "开发": ""
        },
        accounts: []
    },
    {
        logo: "",
        sys_name: "预警系统",
        links: {
            "线上": "",
            "外网": "",
            "测试": "http://192.168.10.97:18099/yujing-fe/#/",
            "开发": ""
        },
        accounts: []
    },
    
] */