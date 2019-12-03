import styled from "styled-components"

export const SortListCSS = styled.div`
    height:100%;width:100%;
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
        z-index:2
    }
    .nav{
        height:1rem;width:100%;display:flex;justify-content:space-around;align-items:center;font-size:.3rem;position:absolute;
        margin-top:.8rem;background:#fff;z-index:2
    }
    .icon{
        margin-left:.3rem;font-size:.4rem;
    }
    .right{
        margin-right:.3rem;font-size:.4rem;
    }
    .headerTitle{
        font-size:.4rem;color:#fff;
    }
    .center{
        position: absolute;overflow:auto;
    left:0;top:0;bottom:0;right:0;padding-top:1.8rem;
    }
   
    ul{
        padding:0 .2rem;
    }
    li{
        width:100%;height:2.92rem;padding:.2rem 0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ccc;
        img{
            height:100%;
        }
    }
    .allRight{
        height:100%;width:4.2rem;
    }
    .liRightTop{
        width:100%;overflow:hidden;height:1.2rem;
    }
    .logo{
        padding:.03rem; font-size:.2rem;color:#fff;background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);margin-right:.1rem;
    }
    .liRightT{
        font-size:.28rem;color:#333;
    }
    .price{
        width:100%;margin-bottom:.1rem;
        span:nth-child(1){
            font-size:.2rem;color:#333;margin-right:.1rem;
        }
        span:nth-child(2){
            font-size:.38rem;color:#ff2B22;
        }
    }
    .quan{
        margin-bottom:.1rem;
        span{
            padding:.03rem;border:1px solid #FE3A33 ;font-size:.2rem;color:#fff;background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
        }
        span:nth-child(1){
            color:#FE3A33;background:#fff;
        }
    }
    .saleNumber{
        span{
            font-size:.2rem;margin-right:.1rem;color:#888;
        }
    }




`