import styled from "styled-components"

export const ShoppingCartCSS = styled.div`
    height:100%;width:100%;background:#eee;
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
    }
    .icon{
        margin-left:.3rem;font-size:.4rem;
    }
    .titleTop{
        font-size:.4rem;color:#fff;
    }
    .right{
        margin-right:.3rem;font-size:.4rem;
    }
    .centerAll{
        width:100%;
        position: absolute;left:0;top:0;right:0;bottom:0;margin-top:.8rem;overflow:auto;margin-bottom:.8rem;
    }
    .top{
        height:.6rem;width:100%;display:flex;align-items:center;
        justify-content:space-between;
    }
    .radio{
        height:.3rem;width:.3rem;border-radius:50%;
    }
    .numberAll{
        margin-right:.8rem;
    }
    ul{
        background:#fff;padding:0 .3rem;margin-bottom:.2rem;
    }
    .shop{
        height:3rem;width:100%;display:flex; align-items:center;
        img{
            width:2rem;height:2.5rem;margin-left:.2rem;margin-right:.25rem;
        }
    }
    .detailsOther{
        width:4rem;
    }
    .details{
        margin-bottom:.4rem;font-size:.25rem;
        height:100%;width:100%; display:flex;flex-direction:column;justify-content:center;color:#333;
    }
    
    .title{
        height:.8rem;width:100%;
        p{
            line-height:.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient: vertical;
        }
    }
    .money{
        font-size:.3rem;color:#f0f;
    }
    .num{
        font-size:.3rem; margin-right:.4rem;display:flex;align-items:center
        button{
            font-size:.3rem;
        }
        button:nth-child(1){
            margin-left:.2rem;
        }
        input{
            width:1rem;text-align:center;font-size:.3rem;
        }
    }
    
    .all{
        width:100%;display:flex;justify-content:space-between;align-items:center
        ;background:#fff;height:.8rem;position: absolute;left:0;bottom:0;
        button{
            padding:.1rem .2rem;background:#f00;color:#fff;font-size:.3rem;border-radius:.05rem;margin-right:.3rem;
        }
    }
    .left{
        margin-left:.3rem;
    }
    hr{
        width:4rem;float:right;height:1px;margin:0;padding:0;
    }
    .noShop{
        width:100%;height:100% ;display:flex;justify-content:center;align-items:center;
        img{
            width:100%;
        }
    }
    .allMoney{
        width:2.5rem;white-space:nowrap;
        span{margin-left:.1rem;font-size:.3rem;}
    }


`