import React, { Component } from 'react'

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Container } from "./styled"
import Bscroll from "common/bscroll"
@connect(mapStateToProps, mapDispatchToProps)

class Find extends Component {
    constructor(){
        super();
        this.page=0;
    }
    render() {
        console.log(this.props, 6666)
        let data = this.props.data.nine.data.data;

        return (
            <Bscroll ref="scroll">
                <Container>
                    <div className="freeShipping">
                        {/* 头部 */}
                        <div className="header">
                            <div className="iconfont icon">&#xe605;</div>
                            <img src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_title.svg?v=201908292038" alt="" />
                            <div className="iconfont right">&#xe601;</div>
                        </div>


                        <div className="centerAll">

                            {/* 固定区 */}
                            <div className="main">
                                <div className="main1">
                                    <div className="mainLeft">
                                        <div className="mainLeftT">9.9每日精选</div>
                                        <div className="mainCenter">十元封顶</div>
                                    </div>
                                    <div className="mainRight">
                                        <div className="mainRightT">9.9每日</div>
                                        <div className="mainRightC">十元封顶</div>
                                    </div>
                                    <div className="mainRight">
                                        <div className="mainRightT">9.9每日</div>
                                        <div className="mainRightC">十元封顶</div>
                                    </div>
                                </div>
                                <div className="main1">
                                    <div className="mainLeft">
                                        <div className="mainLeftT">9.9每日精选</div>
                                        <div className="mainCenter">十元封顶</div>
                                    </div>
                                    <div className="mainRight">
                                        <div className="mainRightT">9.9每日</div>
                                        <div className="mainRightC">十元封顶</div>
                                    </div>
                                    <div className="mainRight">
                                        <div className="mainRightT">9.9每日</div>
                                        <div className="mainRightC">十元封顶</div>
                                    </div>
                                </div>

                            </div>


                            {/* nav */}
                            <div className="nav">
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>
                                <a href="#">精选</a>


                            </div>

                            {/* slider */}

                            <div className="slider">
                                <div className="sliderTitle">
                                    <img src="./img/leftDian.gif" />
                                    <p>近一小时疯抢</p>
                                    <img src="./img/rightDian.gif" />
                                </div>
                                <ul>

                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <div className="more">
                                        <img src="./img/more.gif" alt="" />
                                        <div className="allShop">共50件商品</div>
                                        <div className="tiaozhuan">></div>
                                    </div>
                                    <div>&nbsp;</div>

                                </ul>
                            </div>
                            <div className="slider">
                                <div className="sliderTitle">
                                    <img src="./img/leftDian.gif" />
                                    <p>近一小时疯抢</p>
                                    <img src="./img/rightDian.gif" />
                                </div>
                                <ul>

                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>

                                </ul>
                            </div>
                            <div className="slider">
                                <div className="sliderTitle">
                                    <img src="./img/leftDian.gif" />
                                    <p>近一小时疯抢</p>
                                    <img src="./img/rightDian.gif" />
                                </div>
                                <ul>

                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>

                                </ul>
                            </div>
                            <div className="slider">
                                <div className="sliderTitle">
                                    <img src="./img/leftDian.gif" />
                                    <p>近一小时疯抢</p>
                                    <img src="./img/rightDian.gif" />
                                </div>
                                <ul>

                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>
                                    <li>
                                        <img src="https://img.alicdn.com/bao/uploaded/TB1uFI8bW61gK0jSZFlXXXDKFXa.png_310x310.jpg" alt="" />
                                        <p className="saleNumber">疯抢 12798 件</p>
                                        <p className="priceSpeed">秒杀价6.9元！漫花白色抽纸</p>
                                        <p className="saleMoney">￥6.9</p>
                                    </li>

                                </ul>
                            </div>
                            {/* 精彩推荐 */}
                            <div className="recommend">
                                <div className="recommendTitle">
                                    <img src="./img/leftT.gif" />
                                    <p>精选推荐</p>
                                    <img src="./img/rightT.gif" />
                                </div>
                                <ul>
                                    {
                                        data ? data.map((item) => (
                                            <li key={item.id}>
                                                <img className="recommendTopImg" src={item.pic} alt="" />
                                                <div className="recommendBottom">
                                                    <div className="recommendBottomT">
                                                        <img src="./img/tmall.gif" alt="" />
                                                        <div className="details">{item.d_title}</div>
                                                    </div>
                                                    <div className="recommendBottomP">
                                                        <span>券后</span>
                                                        <span>￥</span>
                                                        <span>{item.jiage}</span>
                                                    </div>
                                                    <div className="coupon"><span>券</span>{item.quan_jine}元</div>
                                                    <div className="comment">
                                                        <span>已售{item.xiaoliang}万</span>
                                                        <span>|</span>
                                                        <span>评论{item.comment}万</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )) : ""

                                    }

                                </ul>
                            </div>
                        </div>

                    </div>
                </Container>
            </Bscroll>
        )
    }
    componentWillUpdate(){
        
    }
    componentDidMount() {
        this.props.handleAsyncnine(this.page);
    }
}

export default Find;
