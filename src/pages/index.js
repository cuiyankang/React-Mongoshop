import Loadable from "react-loadable";
import Loading from "common/loading";

export const Home = Loadable({
    loader: () => import("./home"),
    loading: Loading
})

//疯抢排行
export const Rankings = Loadable({
    loader: () => import("./Rankings"),
    loading: Loading
})

//折上折
export const Foldup = Loadable({
    loader: () => import("./foldup"),
    loading: Loading
})

//每日半价
export const Halfprice = Loadable({
    loader: () => import("./halfprice"),
    loading: Loading
})

export const Nine = Loadable({
    loader: () => import("./nine"),
    loading: Loading
})

export const Sort = Loadable({
    loader: () => import("./sort"),
    loading: Loading
})

export const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})

export const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})

export const Collect = Loadable({
    loader: () => import("./collect"),
    loading: Loading
})

export const Search = Loadable({
    loader: () => import("./search"),
    loading: Loading
})

export const List = Loadable({
    loader: () => import("./list"),
    loading: Loading
})
export const SampleSale = Loadable({
    loader: () => import("./sampleSale"),
    loading: Loading
})

export const Details = Loadable({
    loader: () => import("./details"),
    loading: Loading
})

export const City = Loadable({
    loader: () => import("./city"),
    loading: Loading
})

