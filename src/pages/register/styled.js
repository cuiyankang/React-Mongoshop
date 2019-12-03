import styled from "styled-components";

export const RegisterCSS = styled.div`
    height:100%;width:100%;    font-family: Arial,Helvetica,sans-serif,"Microsoft YaHei";
    background:#fff;
    .top{
        height:2rem;width:100%;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:.8rem;
        width:100%;
        position:fixed;
        top:0;
        left:0;
        color:#333;
        font-size:.4rem;
        .icon{
            font-size:.4rem !important;
            margin-left:.3rem;margin-right:.2rem;
        }
    }
    
    .right{
        font-size:.4rem !important;
        margin-right:.3rem;width:.4rem;
    }
    form{
        height:3.65rem;width:100%;
    }
    .phone{
        height:.91rem;margin:0 .56rem;padding:.2rem 0;display:flex;
        justify-content:center;align-items:center;box-sizing:border-box;border-bottom:1px solid #eee;
    }
    .icon{
        font-size:.4rem !important;
        margin-right:.2rem;
    }
    .phoneInput{
        flex:1;border:none;height:.4rem;outline:none;font-size:.3rem;
    }
    .cancel{
        font-size:.4rem !important;color:#eee;
    }
    .button{
        margin:0 .56rem;height:.74rem;
        box-sizing:border-box;background:#eee; text-align:center;line-height:.74rem;font-size:.3rem;
        margin-top:.4rem;border-radius:.08rem;
    }
    .registerNow{
        margin:0 .56rem;font-size:.28rem;margin-top:.2rem;
        a{
            color:#1991EB
        }
    }
    .bottom{
        height:1.4rem;width:100%;display:flex;justify-content:center;align-items:center;
        position:absolute;left:0;bottom:.5rem;
        a{
            font-size:.28rem;color:#aaa;
        }
        span{
            color:#eee;margin-left:.16rem;margin-right:.16rem;
        }
    }

`