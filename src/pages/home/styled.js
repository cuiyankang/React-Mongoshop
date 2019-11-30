import styled from "styled-components";

export const Header = styled.div`
    height: 1.5rem;
    background: red;
    position: relative;
    .header_pr{
        height: 0.88rem;
        border-bottom: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a{
            display:block;
            width:100%;
            .wap_search{
                padding-left:0.33rem;
                height:0.63rem;
                background: #fff;
                border-radius: 0.42rem;
                line-height: 0.63rem;
                span{
                    font-size: 0.25rem;
                    color:#999;
                }
            }
        }
        .header-info{
            a{
                span{
                    color: #fff;
                    font-size: 0.25rem;
                }
            }
            .city-entry {
                width: 1rem;
                display: flex;
                align-items: center;
            }
            .city-entry-arrow {
                width: 0;
                height: 0;
                border: 0.1rem solid #b0b0b0;
                border-left-color: transparent;
                border-right-color: transparent;
                border-bottom-color: transparent;
                display: inline-block;
                margin-left: 4px;
                margin-right: 5px;
                margin-top: 5px;
            }
        }
    }
    .header_tab{
        height:0.58rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left,.right{
            width: 1rem;
            height: 0.61rem;
            line-height: 0.58rem;
            text-align: center;
            position: relative;
            z-index: 1;
            background: chocolate;
        }
        .left{
            span{
                border-bottom: 2px solid #fff;
                color: #fff;
                padding-bottom: 0.08rem;
            }
        } 
    }
    .tab_nav{
        width: 100%;
        height:0.58rem;
        background: cyan;
        position: absolute;
        bottom: 0;
        padding:0 1rem;
    }

`



export const Main = styled.div`
        position: absolute;
        top: 1.46rem;
        bottom: 1.08rem;
        left: 0;
        right: 0;
            
        .main{
            height: auto;
            min-height: 10.79rem;
            background: #F6F6F6;
        }
        .main .banner{
            padding:0 0.11rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .banner .banner_img{
            width: 100%;
            height: 100%;
        }
        .banner_img img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }



        .main .main_module_layout{
            display: flex;
            justify-content: center;
            padding:0 0.11rem;

        }
        .main_module_layout .show_module{
            width: 100%;
            padding:0.13rem 0;
        }
        .show_module .max_activity{
            width: 100%;
        }
        .max_activity a{
            width: 100%;
        }
        .max_activity a img{
            height: 100%;
            width: 100%;
        }
        .activity_min_group{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .activity_min_group li{
            width: 49.5%;
        }
        .activity_min_group li a{
            height: 1.42rem;
            width: 3.5rem;
        }
        .activity_min_group li a img{
            width: 100%;
            height: 100%;
            border-radius: 0.1rem;
        }



        .main .main_module_nav{
            height: 1.88rem;
            width: 100%;
            display: flex;
            padding:0 0.11rem;
            justify-content: center;
        }
        .main_module_nav ol{
            height: 1.87rem;
            width: 100%;
            background: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .main_module_nav ol li{
            width: 1.38rem;
            height: 1.33rem;
        }
        .main_module_nav ol li a div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .main_module_nav ol li a div span{
            font-size: 0.29rem;
            font-weight: 400;
            color: #333;
        }
        .main_module_nav ol li img{
            width: 1rem;
            height: 1rem;
        }

        .main .discount_header{
            height: 0.79rem;
            width: 100%;
            display: flex;
            justify-content: center;
            border-top: 2px solid #F6F6F6;
            padding:0 0.11rem;
        }
        .discount_header .top-line-group{
            height: 0.79rem;
            width:100%;
            background: #fff;
        }
        .top-line-group{
            display: flex;
            align-items: center;
        }
        .top-line-left img{
            width: 1.16rem;
            height: 0.29rem;
            margin: 0 0.25rem;
        }
        .top-line-right{
            width: 5.46rem;
            height: 0.42rem;
        }

        .main .display_window{
            width: 100%;
            display: flex;
            justify-content: center;
            padding:0 0.11rem;
            margin-top: 0.08rem;
        }
        .display_window .window{
            width: 100%;
            background: #fff;
            padding-left: 0.25rem;
            display: flex;
        }
        .window .ddq{
            width: 100%;
            background: #fff;
            border-right: 1px solid #f6f6f6;
            padding-top: .25rem;
        }
        .ddq .ddq_herder{
            display: flex;
        }
        .ddq .ddq_herder h3{
            font-size: 0.33rem;
        }
        .ddq .ddq_list{
            width: 100%;
            margin-top: .21rem;
        }
        .ddq_list .ddq_list_ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .ddq_list_ul li{
            width:48%;
            margin-bottom: .21rem;
        }
        .ddq_list_ul li a div{
        }
        .ddq_list_ul li a div img{
            width: 100%;
            height: 100%;
        }
        .ddq_list_ul li a p{
            line-height: 0.63rem;
        }
        .window .import{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .import div{
            height:100%;
        }
        .import .import_top{
            border-bottom: 1px solid #f6f6f6;

        }
        .import img{
            width: 100%;
            height:100%;
        }




        .main .brand_sale{
            display: flex;
            justify-content: center;
            margin-top: 0.27rem;
            padding:0 0.11rem;
        }
        .brand_sale .brand{
            width: 100%;
            background: #fff;
            padding:0.25rem 0.25rem 0 0.25rem;
        }
        .brand .title_group{
            width: 100%;
            height: 0.42rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .brand ul li{
            width:23%;
            padding-top: 0.08rem;
        }
        .brand ul{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .brand img{
            width: 100%;
            height: 100%;
        }

        .main_line{
            width:100%;
            padding:0 0.11rem;
            height: 5.46rem;
            display: flex;
            justify-content: center;
        }
        .main .line{
            width: 100%;
            height: 5.46rem;
            margin:.21rem auto;
            background: #fff;
            border-radius: 0.1rem;
            padding:0.25rem 0.25rem 0 0.25rem;
        }
        .line h2{
            font-size: 0.33rem;
        }
        .line .real_coupon{
            height: 0.48rem;
            background: rgba(254,58,51,.1);
            border-radius: .21rem;
            margin: .25rem 0;
        }
        .line .swiper_div{
            width:100%;
            height: 3.5rem;
        }
        .swiper_div div{
            height: 3.63rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .swiper_div .swiper_coupon_list{
            width: 2rem;
            height: 3.33rem;
        }
        .swiper_coupon_list img{
            width: 2rem;
            height: 2rem;
        }
        .list_text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 1.92rem;
            font-size: 0.23rem;
            padding-top:0.12rem;
        }
        .list_price{
            font-size: 0.33rem;
            color: red;
        }
        .info {
            color: red;
            font-size: .25rem;
        }

        .find_title{
            text-align: center;
            margin-top: 0.33rem;
            font-size: 0.33rem;
        }

        .main .find_goods{
            height: auto;
            margin: .21rem auto;
            display: flex;
            justify-content: space-around;
            padding:0 0.11rem;

        }
        .find_goods ul{
            height: auto;
            width: 100%;
        }
        .find_goods ul li {
            width: 96%;
            background: #fff;
            border-radius: 0.17rem;
            margin-bottom: 0.1rem;
        }
        .find_good_imgbox{
        }
        .find_good_imgbox img{
            width: 100%;
            height: 100%;
        }
        .find_product_list_title{
            padding: 0.17rem;
            font-size: .25rem;
        }
        .find-product-label-group span{
            border: 1px solid #ff9793;
            font-size: .21rem;
            color: red;
            padding: .02rem 0.04rem;
            border-radius: 0.1rem;
            margin-left:0.17rem;
        }
        .find_product_price{
            color: red;
            font-size: .25rem;
            padding:0 .17rem;
        }
        .find_product_price span{
            color: red;
            font-size: 0.46rem;
        }
        .find_product_more{
            font-size: .25rem;
            color: #999;
            display: flex;
            justify-content: space-between;
            padding:0 0.17rem;
            margin-top: 0.13rem;
        }
       
`

