import styled from "styled-components"

export const Container = styled.div`
    height:100%;width:100%;
    .freeShipping{
        height:100%;
        width:100%;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:.8rem;
        width:100%;
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        position:fixed;
        top:0;
        left:0;
        color:#fff;
        font-size:.4rem;
        img{
            height:.52rem;width:1.3rem;
        }
    }
    .icon{
        margin-left:.3rem;font-size:.4rem;
    }
    .right{
        margin-right:.3rem;font-size:.4rem;
    }
    
    .mainLeft{
        width:50%;height:1.8rem;box-sizing:border-box;
        border:1px solid #ccc;background:url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01gWYbBE2JJhyUJ0W7v_!!2053469401.png") no-repeat center;
        background-size:100%;
    }
    .mainRight{
        width:25%;height:1.8rem;box-sizing:border-box;border:1px solid #ccc;background:url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Wvghmy2JJhxmqU2XI_!!2053469401.png") no-repeat center;
        background-size:100%;
    }
    .mainLeftT{
        font-size:.3rem;color:#ff1493;margin-left:.2rem;line-height:.5rem;
    }
    .mainCenter{  
        font-size:.24rem;color:#888;margin-left:.2rem;line-height:.3rem;
    }
    .mainRightT{
        font-size:.3rem;color:#1889ff;margin-left:.2rem;line-height:.5rem;
    }
    .mainRightC{
        font-size:.24rem;color:#888;margin-left:.2rem;line-height:.3rem;
    }
    .nav{
        height:1.08rem;border-bottom:1px solid #ccc;white-space: nowrap;
    overflow: auto;
    }
    a{
        line-height:1.08rem;margin:0 .3rem;font-size:.28rem;font-weight:900;
    }

    .slider{
        height:3.2rem;width:100%;border-bottom:1px solid #ccc;overflow-x:auto;
        ul{
            height:3.2rem;width:250%;
            li{
                height:3.2rem;width:2.1rem;display:flex;flex-direction:column;float:left;
                justify-content:center;align-items:center;float:left;    flex-shrink: 0;
                img{
                    height:1.8rem;width:1.8rem;display:block;
                }
            }
        } 
    }
    .more{
        height:3.1rem;width:2rem;background:#FFF3F3;display:flex;flex-direction:column;justify-content:center; align-items:center;
        img{
            height:.8rem;width:.8rem;margin:0 0.6rem;
        }
    }
    .allShop{
        font-size:.24rem;color:#fc7d7d;padding:.2rem 0
    }
    .tiaozhuan{
        font-size:.24rem;height:.3rem;width:.3rem;text-align:center;line-height:.3rem;border-radius:50%;background:#f00;color:#fff;
    }
    

    .sliderTitle{
        height:.8rem;width:100%;text-align:center;
        display:flex;justify-content:center;align-items:center;
        img{
            width:.5rem;
        }
        p{
            margin:0 .2rem;font-size:.3rem;color:#FC436D;
        }
    }
    .saleNumber{
        color:#fc4d52;border:1px solid #ffbdbf;width:1.8rem;text-align:center;font-size:.2rem;height:.28rem;line-height:.28rem;background: #FFF3F3;
    }
    .priceSpeed{
        font-size: .22rem;;
        padding: .1rem .1rem 0;
        margin-bottom: .1rem;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: #666;
    }
    .saleMoney{
        color:#FF2B22;font-size:.28rem;overflow:hidden;
        width:1.8rem;
    }
    .footer{
        height:1rem;width:100%;position:fixed;left:0;bottom:0;background:#f00;color:#fff;font-size:.5rem;line-height:1rem;text-align:center
    }

    .centerAll{
        position:absolute;
        left:0;
        top:.8rem;
        bottom:1rem;
        right:0;
        overflow:auto;
        div:nth-child(1){
            z-index:10
        }
    }
    .recommend{
        width:100%;
        ul{
            width:100%;background: rgb(245, 245, 245);overflow:hidden;
        }
        li{
            width:50%;height:5.8rem;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;
            padding:.15rem;float:left; 
        }
    }
    .recommendTopImg{
        display:block; height:3.45rem;width:3.45rem;border-radius:.1rem .1rem 0 0;
    }
    .recommendTitle{
        width:100%;height:.8rem;display:flex;justify-content:center;align-items:center;
        img{
            display:block;width:.5rem;
        }
        p{
            margin:0 .2rem;font-size:.3rem;color:#FC436D;
        }
    }
    .recommendBottom{
        height:2.2rem;width:100%;background:#fff; border-radius: 0 0 .1rem .1rem;
    }
    .recommendBottomT{
        height:.36rem;display:flex;margin-left:.15rem;margin-right:.15rem;margin-top:.3rem;
        img{
            display:block;width:.46rem;height:.26rem;line-height:.36rem;font-size:.26rem;
            background:#0f0;
        }
        .details{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .recommendBottomP{
        margin-left:.15rem;margin-right:.15rem;
        span:nth-of-type(1){
            font-size:.2rem;color:#333;
        }
        span:nth-of-type(2){
            font-size:.2rem;color:#ff2b22;
        }
        span:nth-of-type(3){
            font-size:.4rem;color:#ff2b22;
        }
    }
    .coupon{
        display:inline-block;margin:.15rem;border-radius:2px;
        height:.24rem; padding:0 .1rem; background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);font-size:.2rem;color:#fff;
        span{
            background:#fff;color: #FE3A33;font-size:.2rem;border-radius:2px;margin-right:.08rem;
        }
    }
    .comment{
        margin-left:.15rem;
        span{
            font-size:.2rem;color:#888;
        }
        span:nth-of-type(2){
            margin-left:.15rem;margin-right:.15rem;
        }
        
    }
    .main{
        
        overflow:auto;
        background:#eee;
        z-index:0;
        background-size:100%;
        ul{
        width:100%;margin-bottom:.2rem;
        }
        li{
            margin-left:.15rem;margin-right:.15rem;
            border-radius:.05rem;
        }
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



`
