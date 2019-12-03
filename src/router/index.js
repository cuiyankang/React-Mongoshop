import {
    Home,
    Rankings,//疯抢
    Foldup,//折上折
    Halfprice,//每日半价
    Nine,
    Sort,
    Collect,
    Mine,
    Login,
    Search,
    List,
    SampleSale,
    Details,
    City,
    SortList,
    Register,
} from "pages"


export const TabBarRoute = [
    {
        path: "/home",
        component: Home,
        meta: {
            flag: true
        },
        
        icon:"\ue606",
        text:"首页"
    },
    {
        path: "/nine",
        component: Nine,
        meta: {
            flag: true
        },
        icon: "\ue610",
        text: "9.9包邮"
    },
    {
        path: "/sort",
        component: Sort,
        meta: {
            flag: true
        },
        icon: "\ue6a1",
        text: "分类"
    },
    {
        path: "/collect",
        component: Collect,
        meta: {
            flag: true
        },
        icon: "\ue600",
        text: "收藏"
    },
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: true,
            requiredAuth: true
        },
        icon: "\ue62f",
        text: "我的"
    }
];


export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/register",
        component:Register,
        meta:{}
    },
    {
        path:"/search",
        component:Search,
        meta:{}
    },
    {
        path:"/list",
        component:List,
        meta:{}
    },
    {
        path:"/samplesale",
        component:SampleSale,
        meta:{
            flag:true
        },
    },
    {
        path:"/details",
        component:Details,
        meta:{
            flag:false,
            // requiredAuth:true
        },
    },
    {
        path: "/rankings",
        component: Rankings,
        meta: {
        }
    },
    {
        path: "/foldup",
        component: Foldup,
        meta: {
        }
    },
    
   {
        path: "/halfprice",
        component: Halfprice,
        meta: {
        }
    },
    {
        path: "/sortList",
        component: SortList,
        meta: {
        }
    },

    {
        path: "/city",
        component: City,
        meta: {
        }
    },

];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);