import styled from "styled-components"

export const Sort = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    display:flex;
    flex-direction: column;
`

export const Header = styled.div`
    width:100%;
    height:.88rem;
    display:flex;
    position:fixed;
    top:0;
    left:0;
    background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    &>.back{
        font-size: .40rem;
        color: #fff;
        line-height: .88rem;
        margin: 0 .25rem 0 .25rem;
    }
    &>.input{
        line-height:.88rem;
        flex:1;
        position:relative;
        &>.search{
            font-size:.25rem;
            position:absolute;
            left:.15rem;
            
        }
    }
    input{
        width: 95%;
        height: 65%;
        border-radius: .15rem;
        padding-left:.5rem;
        font-size:.3rem;
        color:#ccc;
        outline: medium;
        border: none;
    }
`

export const Container = styled.div`
    flex:1;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin-top:.88rem;
    margin-bottom:1.01rem;
    overflow:auto;
    display:flex;
    &>.left{
        height:100%;
        overflow:auto;
        width:1.4rem;
        background:#f4f4f4;
        font-size: .28rem;
        color: #333;
        ul{
            width:100%;
            overflow:auto;
            display:flex;
            flex-direction:column;
            li{
                height:.90rem;
                width:100%;
                line-height:.90rem;
                text-align:center;
                
            }
            .active{
                background:#fff;
                color:#FC3F78;
                border-left: .05rem solid red;
            }
        }
    }
    &>.right{
        flex:1;
        overflow:auto;
        display:flex;
        flex-direction:column;
        background:#fff;
       &>.right_small{
            &>.title{
                padding:5%;
                font-weight:normal;  
                margin-bottom:.25rem;     
            }
            ul{
                display:flex;
                flex-wrap: wrap;
                &>.item{
                    width:33%;
                    text-align:center;
                    a{
                        display: block;
                        font-size: .23rem;
                        color: #333;
                        line-height: 25px;
                        overflow: hidden;
                        padding-bottom: .4rem;
                        img{
                            width:65%;
                            margin:auto;
                        }
                        p{
                            margin-top:.1rem;
                        }
                    }
                    
                }
            }
       }
    }
`

export const Footer = styled.div`
    height:1rem;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    border-top:1px solid #ccc
`