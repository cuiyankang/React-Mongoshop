const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/ajax",proxy({
        target:"http://www.mangguozhe.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
    app.use("/ajaxone",proxy({
        target:"http://cmsjapi.ffquan.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/ajaxone":""
        }
    }))
}