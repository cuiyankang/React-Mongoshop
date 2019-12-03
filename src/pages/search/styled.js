import styled from "styled-components";

export const Header = styled.div`
    height:1rem;
    background:#fff;
    display:flex;
    border-bottom:0.14rem solid #F6F6F6;
    a{
        display:inline-block;
        height:.9rem;
        width:.9rem;
        display:flex;
        align-items:center;
        justify-content:center;
        span{
            font-size:0.5rem;
        }
    }
    .search{
        height:.9rem;
        width:6.32rem;
        display:flex;
        align-items:center;
        div{
            width:6rem;
            height:0.64rem;
            background:#F6F6F6;
            border-radius:0.32rem;
            display:flex;
            align-items:center;
            padding-right:0.32rem;
            span{
                font-size:.4rem;
            }
            input{
                width:100%;
                height:0.64rem;
                background:#F6F6F6;
                border:none; 
                outline:none;
                font-size:.3rem;
            }
        }
        input{
            background:#fff;
            border:none;
            width:1rem;
            height:0.6rem;
            outline:none;
            font-size:.2rem;
        }
    }
`
export const Box = styled.ul`
    height:auto;
    li{
        line-height:.8rem;
        border-bottom: solid 1px #eee;
        padding:0 .28rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:#fff;
    }
`


