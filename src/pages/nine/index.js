import React, { Component } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Container } from "./styled"
import Bscroll from "common/bscroll"
import { withRouter } from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Find extends Component {
    constructor() {
        super();
        this.page = 0;
    }
    render() {
        console.log(this.props.data.sampleSale.data, 520);
        let data = this.props.data.nine.data.data;
        let dataArr = this.props.data.sampleSale.data;
        let data1 = this.props.data.sampleSale.data1;
        console.log(data1);


        return (
                <Container>
                    <div className="freeShipping">
                        {/* 头部 */}
                        <div className="header">
                            <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                            <img src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_title.svg?v=201908292038" alt="" />
                            <div className="iconfont right">&#xe601;</div>
                        </div>


                        <div className="centerAll">
                            <div>

                                {/* 固定区 */}
                                <div className="main">

                                    <div>
                                        <div className="mainTitle">
                                            {
                                                data1.mainTitle ?
                                                    <div><h2>{data1.mainTitle}</h2>
                                                        <p>{data1.subTitle}</p></div> : ""
                                            }
                                        </div>
                                        {
                                            data1.brandDTOS ? data1.brandDTOS.map((item, index) => (
                                                <ul key={item.brandId}>
                                                    <li>
                                                        <div className="liTop">
                                                            <div className="liTopL">
                                                                <div className="logo">
                                                                    <img src={item.brandLogo} alt="" />

                                                                </div>
                                                                <div className="details">{item.brandName}
                                                                    <span>{item.label}</span>
                                                                </div>
                                                            </div>
                                                            <div className="liTopR">
                                                                <div className="timeDetails">仅剩&nbsp;</div>
                                                                <div className="time">12:19:15</div>
                                                            </div>
                                                        </div>
                                                        <div className="liCenter">
                                                            <div className="bj">

                                                                <div className="center">
                                                                    <div>{item.longProfit}</div>
                                                                    <div>{item.selfProfit}</div>
                                                                    <div>已售{(item.recentSale / 10000).toFixed(1)}万件</div>
                                                                </div>
                                                                <div className="position">{(item.fansNum / 10000).toFixed(1)}w人关注</div>
                                                            </div>
                                                        </div>
                                                        <div className="liBottom">
                                                            <div className="center1">
                                                                <div>
                                                                    {
                                                                        item.hotPush.map((it, idx) => (
                                                                            <div className="li" key={idx}>
                                                                                <img src={it.pic} alt="" />

                                                                                <div className="price">
                                                                                    <span className="newPrice">￥{it.jiage}</span>
                                                                                    <span className="oldPrice">￥{it.yuanjia}</span>
                                                                                </div>
                                                                                <div className="tag">
                                                                                    <img src="//cmsstatic.ffquan.cn//wap_new/brand/images/ju.png" alt="" />
                                                                                    {
                                                                                        it.goodsLabels ? it.goodsLabels.map((ite, ind) => (
                                                                                            <span key={ind}>{ite.val}</span>
                                                                                        )) : ""
                                                                                    }

                                                                                </div>
                                                                                <div className="saleNumber">{it.xiaoliangText}</div>
                                                                                <div className="discount"><span>{it.sellDear}</span></div>

                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                            )) : ""

                                        },
                                    </div>
                                </div>
                            </div>


                            {/* nav */}
                            <div className="nav">
                                <a href="#">精选</a>
                                {
                                    dataArr.map((item, index) => (
                                        <a href="" key={item.id}>{item.title}</a>
                                    ))
                                }


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
                                                        <span>已售{(item.xiaoliang / 10000).toFixed(1)}万</span>
                                                        <span>|</span>
                                                        <span>评论{(item.comment / 10000).toFixed(1)}万</span>
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
        )
    }
    handleJump() {
        this.props.history.goBack();
    }
    componentWillUpdate() {
        this.refs.scroll.handlefinishPullUp();
    }
    componentDidMount() {
        this.props.handleGetOneData();

        this.props.handleAsyncSampleSale()
        let id = this.props.data.nine.data.cac_id;
        this.props.handleAsyncnine(id, this.page);
        this.page++;

        this.refs.scroll.handlepullingUp(() => {
            let page = this.page;
            let id = this.props.data.nine.data.cac_id;
            this.props.handleAsyncnine(id, page);
            this.page++;
        })
    }
}

export default Find;
