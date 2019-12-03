import {
    Home,
    Nine,
    Sort,
    Collect,
    Mine,
    Login,
    SampleSale,
    Details,
} from "pages"


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        
        icon:"\ue606",
        text:"首页"
    },
    {
        path:"/nine",
        component:Nine,
        meta:{
            flag:true
        },
        icon:"\ue610",
        text:"9.9包邮"
    },
    {
        path:"/sort",
        component:Sort,
        meta:{
            flag:true
        },
        icon:"\ue6a1",
        text:"分类"
    },
    {
        path:"/collect",
        component:Collect,
        meta:{
            flag:true
        },
        icon:"\ue600",
        text:"收藏"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue62f",
        text:"我的"
    },
    
];


export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
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
            flag:true,
            // requiredAuth:true
        },
    },
];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);