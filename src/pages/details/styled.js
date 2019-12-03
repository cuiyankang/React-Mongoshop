import styled from "styled-components";

export const DetailsCSS = styled.div`
    height:100%;width:100%;
    .topImg{
        width:100%;
    }
    .iconL{
        position:absolute;color:#fff;font-size:.4rem;
        left:.2rem;background:rgba(25,25,25,.5);border-radius:50%;
        top:.2rem;height:.6rem;width:.6rem;text-align:center;line-height:.6rem;
    }
    .iconR{
        position:absolute;color:#fff;font-size:.4rem;
        right:.2rem;background:rgba(25,25,25,.5);border-radius:50%;
        top:.2rem;height:.6rem;width:.6rem;text-align:center;line-height:.6rem;
    }
    .hot{
        height:1rem;width:100%;border-bottom:1px solid #ccc;display:flex;align-items:center;
        img{
            height:1rem;width:1.54rem;margin:0 .22rem;
        }
    }
    .text{
        font-size:.24rem;flex:1;
    }
    .time{
        height:1rem;width:2.2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;
        div{
            color:#e61514;font-size:.28rem;
        }
    }
    .title{
        height:.85rem;margin-left:.28rem;margin-right:.28rem;padding-top:.28rem;font-size:.3rem;
        span{
            border:1px solid #fc3f78;color:#fc3f78;font-size:.22rem;
        }
    }
    .moneyNum{
        height:.56rem;width:100%;display:flex;justify-content:center;align-items:center;
        div{
            width:50%;height:100%;color:#FC4D52;font-size:.22rem;text-align:left;margin-left:.3rem;
            span{
                font-size:.42rem;
            }
        }
        p{
            width:50%;height:100%;font-size:.22rem;line-height:.56rem;text-align:right;margin-right:.3rem;
            span{
                color:#fc4d52;
            }
        }
    }
    .originPrice{
        height:.56rem;width:100%;display:flex;justify-content:center;align-items:center;
        .price{
            width:50%;height:100%;color:#888;font-size:.22rem;text-align:left;line-height:.56rem;margin-left:.3rem;
        }

    }
    .right{
        width:50%;height:100%;font-size:.22rem;color:#888;line-height:.56rem;text-align:right;margin-right:.3rem;
        span{
            color:#fc4d52;border-radius:50%;border:1px solid #fc4d52;padding:.04rem;margin:0 .1rem;
        }
    }
    .discount{
        display:block; height:1.8rem;width:100%;background:url("https://cmsstatic.ffquan.cn//wap_new/main/images/goods_quan.png?v=201911291924") no-repeat center;
        display:flex;justify-content:center;align-items:center;
    }
    .discountL{
        height:1.2rem;width:5rem;
    }
    .discountLT{
        font-size:.28rem;color:#fff;text-align:center;margin-top:.3rem;
    }
    .discountLB{
        font-size:.22rem;color:#fff;text-align:center;
    }
    .discountR{
        font-size:.28rem;color:#fff;text-align:center;line-height:1.2rem;width:2rem;border-left:2px dashed #fff;
    }
    





    .footer{
        height:1.12rem;width:100%;border-top:1px solid #ccc;
        position:fixed;left:0;bottom:0;
        display:flex;align-items:center;justify-content:center;
    }
    .share{
        width:1.25rem;height:.9rem;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
    }
    .iconS{
        font-size:.4rem;text-align:center;margin-bottom:.1rem;
    }
    .share1{
        font-size:.22rem;
    }
    .passwordBuy{
        height:.82rem;width:2.02rem;color:#fe9f69;border:1px solid #fe9f69;
        line-height:.82rem;text-align:center;font-size:.28rem;
    }
    .couponBuy{
        height:.82rem;width:2.83rem;background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        line-height:.82rem;text-align:center;font-size:.28rem;color:#fff;
    }
`