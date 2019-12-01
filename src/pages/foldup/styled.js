import styled from "styled-components"


export const FoldUp=styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
`


export const Header=styled.div`
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

export const Category=styled.div`
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
            line-height: .8rem;
            font-size: .36rem;
            a{
                color: rgba(255,255,255,.6);
                :active{
                    border-bottom: 2px solid #fff;
                    padding-bottom: 15px;
                    color:#fff;
                }
            }
        }
    }
`


export const Container=styled.div`
    flex:1;
    margin-top:1.78rem;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    overflow:auto;
    /* padding-top: .2rem; */
    background: #f5f5f5;
    &>.banner{
        border-radius: .1rem;
        overflow: hidden;
        padding-top: .2rem;
        background: #f5f5f5;
        a{
            display: block;
            margin: 0 .2rem;
            border-radius: .1rem;
            overflow: hidden;
            box-shadow: 0 .12rem .12rem 0 rgba(204,204,204,.3);
            img{
                width:100%;
            }
        }
    }
    &>.item_list{
        padding-top: .2rem;
        background: #f5f5f5;
        width:100%;
        &>.item{
            padding: .2rem;
            position: relative;
            z-index: 1;
            margin: 0 .2rem .2rem;
            background: #fff;
            border-radius: .1rem;
            overflow: hidden;
            &>.left{
                float: left;
                width: 2rem;
                height: 2rem;
                background: #f5f5f5;
                overflow: hidden;
                img{
                    width:100%;
                }
            }
            &>.right{
                height:2rem;
                margin-left:2.1rem;
                h3{
                    font-size: .32rem;
                    height: .6rem;
                    color: #333;
                    line-height: .6rem;
                    margin: 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    height: .46rem;
                    line-height: initial;
                    margin-bottom:.5rem
                }
                &>.text{
                    
                    height:1rem;
                    &>.ban{
                        width:50%;
                        float:left;
                        height:100%;
                     
                    }
                    &>.l{
                        &>.money{
                            text-align: center;
                            font-size: .24rem;
                            height: .28rem;
                            line-height: .28rem;
                            overflow: hidden;
                            margin: 0 0 .1rem;
                            width: 2rem;
                            span{
                                float: left;
                                width: 50%;
                                color: #fff;
                                background: #E63140;
                                font-size: .26rem;
                                font-family: iconfont2!important;
                                font-style: normal;
                                
                            }
                            p{
                                float: left;
                                width: auto;
                                color: #E63140;
                                font-weight: 400;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                border: 1px solid #E63140;
                                height: 12px;
                                line-height: .24rem;
                                min-width: .76rem;
                                padding: 0 .06rem;
                                border-left: 0;
                            }
                        }
                        &>.zh{
                            font-size: .22rem;
                            color: #888;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            &>.price{
                                color: #FF2B22;
                                font-size: .4rem;
                                margin-right: .1rem;
                                font-style: normal;
                                i{
                                    font-style: normal;
                                    font-size: .24rem;
                                }
                            }
                        }
                    }
                    &>.r{
                        text-align:right;
                        span{
                            font-size: .24rem;
                            color: #888;
                            height: .36rem;
                            position: relative;
                            top: -1px;
                            display: block;
                            margin-bottom: .1rem;
                        }
                        p{
                            background: rgba(255,111,0,1);
                            background: linear-gradient(90deg,rgba(253,152,33,1),rgba(255,111,0,1));
                            display: block;
                            border-radius: .06rem;
                            color: #fff;
                            font-size: .24rem;
                            position: relative;
                            z-index: 1;
                            width: 1.2rem;
                            text-align: center;
                            padding: .04rem 0;
                            float: right;
                        }
                    }
                }
            }
        }
    }
`