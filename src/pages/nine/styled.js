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
    .main{
        height:3.8rem;
        width:100%;
        background: rgb(245, 245, 245)
    }
    .main1{
        height:1.8rem;
        width:100%;
        display:flex;justify-content:center;align-items:center;
        
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
        height:4rem;width:100%;border-bottom:1px solid #ccc;
        ul{
            height:3.2rem;width:100%;    overflow: auto;
    display: flex;
    li{
            height:3.2rem;width:2.1rem;display:flex;flex-direction:column;
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



`
