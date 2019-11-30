// const proxy = require("http-proxy-middleware");

// module.exports = (app)=>{
//     app.use("/ajax",proxy({
//         target:"https://api.ricebook.com",
//         changeOrigin:true,
//         pathRewrite:{
//             "^/ajax":""
//         }
//     }))
// }


const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/ajax",proxy({
        target:"http://www.mangguozhe.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}