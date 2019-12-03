const proxy = require("http-proxy-middleware");


module.exports = (app) => {
    app.use("/ajaxone", proxy({
        target: "http://cmsjapi.ffquan.cn",
        changeOrigin: true,
        pathRewrite: {
            "^/ajaxone": ""
        }
    }))
    app.use("/ajax", proxy({
        target: "http://www.mangguozhe.com",
        changeOrigin: true,
        pathRewrite: {
            "^/ajax": ""
        }
    }))
    app.use("/api", proxy({
    target: "http://39.97.33.178",//  城市接口url地址: /api/cityList
        changeOrigin: true,
    }))
}

