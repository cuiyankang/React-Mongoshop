const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/ajax",proxy({
        target:"http://www.mangguozhe.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}