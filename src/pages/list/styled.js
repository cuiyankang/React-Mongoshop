import styled from "styled-components";


export const Header = styled.div`
    background:#fff;
    z-index: 1;
    position: relative;
    .header{
        display:flex;
        justify-content:center;
        width:100%;
        a{
            display:flex;
            justify-content:center;
            align-items:center;            
            height:.9rem;
            width:.9rem;
        
            span{
                font-size:0.5rem;
            }
        }
        .search{
            height:.9rem;
            width:100%;
            display:flex;
            align-items:center;
            div{
                width:6rem;
                height:0.64rem;
                background:#F6F6F6;
                border-radius:0.32rem;
                display:flex;
                width: 100%;
                padding-right: 0.32rem;
                i{
                    padding:0 0.1rem;
                }
                input{
                    width: 100%;
                    height:0.64rem;
                    background:#F6F6F6;
                    border:none; 
                    outline:none;
                    font-size: .3rem;
                }
            }
            .fenlei{
                background:#fff;
                border:none;
                width:1rem;
                height:0.6rem;
                outline:none
            }
            .iconfont{
                font-size:.5rem;
            }
        }
    }
    .nav{
        height:0.84rem;
        background:green;
        display:flex;
        li{
            height:100%;
            width:34%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    
`
export const MainOne = styled.div`
    div{
        display:flex;
        flex-wrap:wrap;
    }

    .product{
        border-bottom: 4px solid #F5F5F5;
        padding: .18rem 0 .18rem .18rem; 
        display:flex;
        .product_one{
            width:2.52rem;
            height:2.52rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .product_two{
            padding-left:0.42rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            height: 2.52rem;
        }
    }

/* 一横排两个 */
    .line{
        height:100%;
        width:50%;
        background: #F5F5F5;
        padding: 0 0.05rem .1rem .1rem;
        border-radius: 5px;
        overflow: hidden;
        .line_one{
            img{
                width:100%;
                height:100%;
            }
        }
        .line_two{
            background:#fff;
            padding:0.3rem 0.18rem 0.18rem 0.2rem ; 
            h3{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
`

// export const MainTwo = styled.div`
//     .line{
//         width:50%;
//         background: #F5F5F5;
//         padding: 0 0.05rem .1rem .1rem;
//         border-radius: 5px;
//         overflow: hidden;
//         float:left;
//         .line_one{
//             img{
//                 width:100%;
//                 height:100%;
//             }
//         }
//         .line_two{
//             background:#fff;
//             padding:0.3rem 0.18rem 0.18rem 0.2rem ; 
//             h3{
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//                 white-space: nowrap;
//             }
//         }
//     }
// `