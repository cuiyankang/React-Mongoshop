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
    app.use("/ajaxlogin", proxy({
        target: "http://39.105.204.151:3000",
        changeOrigin: true,
        pathRewrite: {
            "^/ajaxlogin": ""
        }
    }))
    
}

