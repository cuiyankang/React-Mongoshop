import styled from "styled-components"

export const ShoppingCartCSS = styled.div`
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
        width:100%;padding:0 .3rem;
        position: absolute;left:0;top:0;right:0;bottom:0;margin-top:.8rem;
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
    .shop{
        height:3rem;width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:.2rem;background:#ccc;border-radius:.08rem;
        img{
            width:2.5rem;height:2.5rem;
        }
    }
    .num{
        width:1.1rem;margin-right:.4rem;
        input{
            width:.5rem;
        }
    }
    .all{
        width:100%;display:flex;justify-content:space-between;align-items:center
        
    }
    

`