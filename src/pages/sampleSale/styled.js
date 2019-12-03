import styled from "styled-components";

export const SampleSaleCSS = styled.div`
    height:100%;
    .sampleSale{
        height:100%;width:100%;font-family: PingFangSC;background:#eee;
    }
    .headerAll{
        background: url("https://img.alicdn.com/imgextra/i3/2053469401/O1CN01p3C4Lj2JJhz3YaJEa_!!2053469401.png") no-repeat top center;
        background-size:100%;
        height:1.7rem;width:100%;
        position:sticky;
        top:0;
        left:0;
        z-index:20;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:.8rem;
        width:100%;
        
        color:#fff;
        font-size:.4rem;
        font-weight:bold;
    }
    .icon{
        margin-left:.15rem;font-size:.3rem;
    }
    .kong{
        margin-right:.15rem;
    }
    .nav{
        height:.9rem;width:100%;white-space:nowrap;overflow:auto;
        >div{
            width:290%;
        }
        span{
            line-height:.8rem;color:rgba(255,255,255,0.6);font-size:.28rem;padding:0 .34rem; float:left;
        }
    }
    .main{
        position:absolute;
        top:0;
        bottom:0;left:0;right:0;
        padding-top:1.7rem;
        overflow:auto;
        background:url("https://img.alicdn.com/imgextra/i3/2053469401/O1CN01p3C4Lj2JJhz3YaJEa_!!2053469401.png") no-repeat top center;
        z-index:0;
        background-size:100%;
    }
    .mainTitle{
        height:1.28rem;width:100%;text-align:center;color:#fff;
        h2{
            font-size:.4rem;padding:.2rem 0 .04rem;
        }
        p{
            font-size:.24rem;
        }
    }
    ul{
        width:100%;margin-bottom:.2rem;
    }
    li{
        margin-left:.15rem;margin-right:.15rem;
        border-radius:.05rem;
    }
    .liTopL{
        display:flex;justify-content:center;align-items:center;
    }
    .liTop{
        height:1.1rem;width:100%;background:#fff;border-radius:.2rem .2rem 0 0;
        display:flex;justify-content:space-between;align-items:center;
    }
    .logo{
        height:.8rem;width:.8rem;margin-left:.15rem;background:#fff;
        img{
            height:.4rem;width:.8rem;margin-top:.2rem;
        }
    }
    .details{
        font-size:.32rem;margin-left:.2rem;
        span{
            font-size:.2rem;color:#fff;background:#f00;padding:0 .1rem;margin-left:.15rem;
        }
    }
    .liTopR{
        display:flex;justify-content:center;align-items:center;margin-right:.15rem;
    }
    .timeDetails{
        font-size:.2rem;
    }
    .time{
        font-size:.2rem;color:#f44;background:orange;
    }
    .liCenter{
        width:100%;background:#fff;
    }
    .bj{
        margin:0 .2rem;background:url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01ftQhJX2JJhzLGaW0k_!!2053469401.jpg") no-repeat center;
        background-size:100%;border-radius:.1rem; height:2rem;overflow:hidden;
        position:relative;
    }
    .center{
        margin:.2rem .25rem;height:1.56rem;border-radius:.1rem;overflow:hidden;
        div:nth-of-type(1){
            font-size:.32rem;color:#fff;margin-bottom:.16rem;margin-top:.1rem;
        }
        div:nth-of-type(2){
            font-size:.24rem;color:#fff;margin-bottom:.16rem;
        }
        div:nth-of-type(3){
            font-size:.24rem;color:#fff;
        }
    }
    .position{
        position:absolute;right:0;bottom:0;background: linear-gradient(276deg,#ff1e2f 0,#e51698 100%);
        height:.38rem;padding:0 .16rem;border-radius:.1rem;
    }
    .liBottom{
        height:4.64rem;width:100%;background:#fff;
        border-radius:0 0 .2rem .2rem;
        
    }
    .center1{
        padding:.2rem .2rem 0;
        height:4.34rem;display:flex;justify-content:space-between;align-items:center;overflow:auto;
        >div{
            width:200%;display:flex;justify-content:center;align-items:center;
        }
    }
    .li{
        width:2.3rem;height:100%;display:flex;flex-direction:column; justify-content:center;align-items:center;padding:0 .2rem 0;overflow:hidden;
        img{
            height:2.02rem;width:2.02rem;
        }
    }
    .price{
        margin-bottom:.08rem;width:100%;margin-top:.2rem;
    }
    .newPrice{
        color:#ff3b32;font-size:.32rem;margin-right:.18rem;margin-left:.1rem;
    }
    .oldPrice{
        color:#aaa;font-size:.22rem;text-decoration:line-through;
    }
    .tag{
        width:100%;margin-left:.1rem;
        img{
            height:.26rem;width:.26rem;margin-right:.08rem;display:inline-block;
        }
        span{
            font-size:.18rem; border:1px solid #fe3a33;color:#fe3a33;padding:0 .1rem; border-radius:.06rem;
        }
    }
    .saleNumber{
        width:100%; font-size:.2rem;color:#666;line-height:.28rem;margin-top:.08rem;
    }
    .discount{
        width:100%;margin-top:.12rem;margin-bottom:.1rem;
        span{
            color:#f57523;font-size:.22rem;background: rgba(245,166,35,.2);height:.3rem;padding:0 .12rem;white-space:nowrap;width:100%;overflow:hidden;
            text-overflow: ellipsis;
        }
    }
    .active{
        color:rgba(255,255,255,1) !important;border-bottom:2px solid #fff;font-weight:900;
    }
    


    



`