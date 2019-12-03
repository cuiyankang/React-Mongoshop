import Loadable from "react-loadable";
import Loading from "common/loading";

export const Home = Loadable({
    loader: () => import("./home"),
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

export const SampleSale = Loadable({
    loader: () => import("./sampleSale"),
    loading: Loading
})

export const Details = Loadable({
    loader: () => import("./details"),
    loading: Loading
})