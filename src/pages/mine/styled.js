import styled from "styled-components";

export const MineCSS = styled.div`
    height:100%;width:100%;background:#eee;
    .top{
        height:3rem;width:100%;background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);overflow:hidden;
        margin-bottom:1.3rem;
    }
    .info{
        margin-top:.3rem;width:100%;display:flex;justify-content:space-between;
    }
    .nameImg{
        height:1.32rem; width:50%;display:flex;justify-content:space-between;align-items:center;
        img{
            height:100%;margin-left:.3rem;
        }
    }
    .other{
        margin:0 auto .2rem;;width:6.8rem;border-radius:.2rem;
    }
    .loginRegister{
        font-size:.4rem;color:#fff;
        a{
            color:#fff;
        }
    }
    .icon{
        width:.5rem;height:.5rem;margin-right:.2rem;
        img{
            width:100%;
        }
    }
    .position{
        height:1.86rem;position:absolute;top:2.1rem;left:0;width:100%;
        
    }
    .position1{
        margin-left:.3rem;margin-right:.3rem;background:#fff;height:1.86rem;border-radius:.2rem;
        display:flex;justify-content:space-around;align-items:center;
    }
    
    .myCollection{
        display:flex;align-items:center;flex-direction:column;width:1.5rem;height:1.5rem;justify-content:center;
    }
    .myCollection1{
        font-size:.26rem;
    }
    .icon1{
        font-size:.6rem;
    }

    .total{
        height:2.56rem;width:6.8rem;margin:0 auto;background:#fff;border-radius:.2rem;overflow:hidden;
        p{
            height:.7rem;border-bottom:1px solid #eee;
        }
        span{
            margin-left:.3rem;line-height:.7rem;font-size:.28rem;
        }
    }
    .position11{
        margin-left:.3rem;margin-right:.3rem;background:#fff;height:1.86rem;border-radius:.2rem;
        display:flex;
    }
    .myCollection1{
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        img{
            width:.58rem;height:.58rem;margin-bottom:.16rem;
        }
    }
    .footer{
        height:1rem;width:100%;position:fixed;left:0;bottom:0;background:#f00;color:#fff;font-size:.5rem;line-height:1rem;text-align:center
    }

`