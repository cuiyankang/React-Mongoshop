import styled from "styled-components"


export const Ranking = styled.div`
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
        font-size:.45rem;
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
          padding:0 .1rem;
            display: inline-block;
            text-align: center;
            line-height: .8rem;
            font-size: .32rem;
            a{
                color: rgba(255,255,255,.6);
                
            }
            .active{
                border-bottom: .05rem solid #fff;
                padding-bottom: 15px;
                color:#fff;
            }
        }
    }
`
export const Container = styled.div`
    flex:1;
    margin-top:1.78rem;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    overflow:auto;
    padding-top: .2rem;
    background: #f5f5f5;
    
    /* .bscroll{
        height:100%; */
        &>.list{
        display:flex;
        flex-direction:column;
        position:relative;
        overflow:auto;
            &>.item_list{
            margin-bottom:.15rem;
            padding:.2rem;
            padding-left:0;
            position:relative;
            background:#fff;
            overflow:hidden;
                &>.lv{
                position: absolute;
                top: 0;
                left: 0;
                z-index: 5;
                width: .84rem;
                padding-right: .22rem;
                height: .4rem;
                text-align: right;
                line-height: .4rem;
                font-family: Arial;
                display: block;
                /* background: url(images/fourth.png?v=20191021516399) no-repeat; */
                /* background: url(images/no1.png?v=20191021516399) no-repeat;  */
                color: #fff;
                font-size: .22rem;
                text-shadow: 1px 1px 0 rgba(0,0,0,.1);
                overflow: hidden;
                background:red;
                border-radius:.4rem;
            }
            &>.lv1{
                overflow: hidden;
                padding-right: 8px;
                width: 42px;
                background: url(images/no1.png?v=20191021516399) no-repeat;
            }
            &>.left{
                height:2.4rem;
                width:2.4rem;
                float: left;
                background: #f5f5f5;
                overflow: hidden;
                img{
                    width:100%;
                }
            }
            &>.right{
                height:2.4rem;
                padding-left:2.6rem;
                h3{
                    font-size: .28rem;
                    height: .5rem;
                    position: relative;
                    z-index: 1;
                    top: -.03rem;
                    color: #333;
                    line-height: .3rem;
                    margin: 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    font-weight:400;
                }
                &>.price{
                    line-height: .52rem;
                    margin-bottom: 0;
                    font-size: .28rem;
                    color: #888;
                    &>.many{
                        color: #FF7800;
                        padding: 0 .03rem;
                    }
                }
                &>.tianmao{
                    font-size: .22rem;
                    /* color: #aaa; */
                }
                &>.right_text{
                    padding-top: .1rem;
                    height: .5rem;
                    line-height: .5rem;
                    &>.red{
                        color: #FF2B22;
                        font-size: .4rem;
                    }
                    &>.volume{
                        font-size:.24rem;
                    }
                    &>.butt{
                        background: rgba(252,63,120,1);
                        background: linear-gradient(-90deg,rgba(252,77,81,1),rgba(252,63,120,1));
                        border-radius: 2rem;
                        color: #fff;
                        font-size: .28rem;
                        padding: .06rem .3rem;
                        float: right;
                        line-height: .46rem;
                    }
                }
            }
        }
    }
    /* } */

    
`