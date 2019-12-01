import styled from "styled-components"


export const HalfPrice = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

`

export const Header = styled.div`
    width:100%;
    height:.9rem;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
    position:fixed;
    display:flex;
    align-items:center;
    &>.left{
        width:.9rem;
    }
    &>.right{
        width:.9rem;
    }
    div{
        flex:1;
        display: flex;
        justify-content: center;
        img{
            width: 2.5rem;
            height: .6rem;
        }
    }
    i{
        text-align:center;
        color:#fff;
        font-size:.35rem;
    }
`


export const Category = styled.div`
    height:.88rem;
    width:100%;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    position:fixed;
    top:.89rem;
    overflow:hidden;
    &>.flex{
       height:100%;
       height: 100%;
       white-space: nowrap;
       overflow-y: hidden;
       overflow-x: auto;
        &>.item{          
            height:.88rem;
            width: 1.36rem;
            display: inline-block;
            text-align: center;
            font-size: .32rem;
            a{
                color: rgba(255,255,255,.6);
                height:100%;
                width:100%;
                :active{
                    border-bottom: 2px solid #fff;
                    padding-bottom: 15px;
                    color:#fff;
                }
                span{
                    font-size: .35rem;
                    line-height: .45rem;
                }
                p{
                    font-size:.2rem
                }
            }
        }
    }
`


export const Container = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    overflow:auto;
    width:100%;
    margin-top:1.77rem;
    flex:1;
    &>.img{
        img{
            width:100%;
        }
    }
    &>.content{
        padding-top: .2rem;
        background: #f5f5f5;
        &>.item{
            margin-left: 0;
            margin-right: 0;
            border-radius: 0;
            border-bottom: solid 1px #eee;
            padding-left: 0;
            margin-bottom: .1rem;
            padding: .2rem;
            position: relative;
            z-index: 1;
            margin: 0 .2rem .2rem;
            background: #fff;
            &>.left{
                width: 2.4rem;
                height: 2.4rem;
                position: relative;
                z-index: 0;
                float: left;
                background: #f5f5f5;
                overflow: hidden;
                margin-right:.2rem;
                img{
                    width:100%;
                    background: rgb(245, 245, 245);
                    display: block;
                }
            }
            &>.right{
                margin-left:.36rem;
                height: 2.4rem;
                padding: 0 0 0 2.2rem;
                h3{
                    font-size: .28rem;
                    height: .5rem;
                    position: relative;
                    z-index: 1;
                    top: -.06rem;
                    color: #000;
                    line-height: .6rem;
                    margin: 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    font-weight:400;
                }
                &>.half{
                    height: .84rem;
                    color: #FF2B22;
                    font-size: .26rem;
                    padding-top: .1rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    span{
                        background: #FFECEB;
                        display: inline-block;
                        border-radius: .04rem;
                        border: 1px solid #ffa5a1;
                        color: #FF2B22;
                        padding: 0 .1rem;
                        font-size: .24rem;
                        margin-right: .2rem;
                        /* float: left; */
                    }
                    p{
                        padding-top: .06rem;
                        font-size: .26rem;
                    }
                }
                &>.bott{
                    overflow: hidden;
                    
                    &>.ban{
                        width:50%;
                    }
                    &>.left{
                        float: left;
                        padding-top: .4rem;
                        b{
                            color: #FF2B22;
                            font-size: .4rem;
                            margin-right: .1rem;
                            padding-top:.4rem;
                            font-weight:400;
                            i{
                                font-style: normal;
                                font-size: .24rem;
                            }
                        }
                    }
                    &>.right{
                        float: right;
                        text-align:right;
                        span{
                            font-size: .24rem;
                            color: #888;
                            height: .4rem;
                            line-height: .4rem;
                            margin-bottom: .04rem;
                            position: relative;
                            top: 0;
                            display: block;
                        }
                        a{
                            img{
                                height:.48rem;
                                float: right;
                            }
                        }
                    }
                }
            }
        }
        &>.load{
            text-align: center;
            padding: .4rem 0;
            font-size: .28rem;
            box-shadow: none;
            margin: 0;
            background: 0 0;
            color: #aaa;
        }
    }
`