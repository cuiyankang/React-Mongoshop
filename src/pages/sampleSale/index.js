import React from "react";
import { connect } from "react-redux";
import { SampleSaleCSS } from "./styled"
import { withRouter } from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import observer from "../../observer";

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class SampleSale extends React.Component {
    constructor() {
        super();
        this.state = {
            status: true,
            clickOne:-1,
        }
    }

    render() {
        let { status,clickOne } = this.state;
        // console.log(this.props.data.sampleSale.data1, 2000000000000000);
        let data = this.props.data.sampleSale.data;
        let data1 = this.props.data.sampleSale.data1;
        let data2 = this.props.data.sampleSale.data2;
        let changedata = this.props.data.sampleSale.changedata;
        if (status == false) {
            data2 = changedata;
        }

        console.log(data, data1, data2, changedata, status, 1000);
        return (
            <SampleSaleCSS>
                <div className="sampleSale">
                    {/* 头部 */}
                    <div className="headerAll">
                        <div className="header">
                            <div className="iconfont icon" onClick={this.handleJump.bind(this)}>&#xe605;</div>
                            <div className="allTitle">品牌特卖</div>
                            <div className="kong">&nbsp;</div>
                        </div>
                        <div className="nav">
                            <div>
                                <span>精选</span>
                                {
                                    data.length > 0 ? data.map((item, index) => (
                                        <span key={index} onClick={this.handleClick.bind(this, item.id)} className={clickOne==item.id?"active":""}>{item.title}</span>

                                    )) : ""
                                }
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        {
                            status == true ?
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
                                                                        <div className="li" key={idx} onClick={this.handleDetails.bind(this,it)}>
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
                            </div> : ""
                        }
                        {
                            status?
                                <div className="mainTitle">
                                    {
                                        data2.mainTitle ?
                                            <div>
                                                <h2>{data2.mainTitle}</h2>
                                                <p>{data2.subTitle}</p>
                                            </div> : "" 
                                    }
                                </div>:""
                        }
                        {
                            status ? data2.brandDTOS ? data2.brandDTOS.map((item, index) => (
                                <ul key={item.brandId}>
                                    <li>
                                        <div className="liTop">
                                            <div className="liTopL">
                                                <div className="logo">
                                                    <img src={item.brandLogo} alt="" />

                                                </div>
                                                <div className="details">{item.brandName}
                                                </div>
                                            </div>
                                            <div className="liTopR">
                                                <div className="timeDetails">仅剩&nbsp;</div>
                                                <div className="time">12:19:15</div>
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


                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )) : "" : data2.map((item, index) => (
                                <ul key={item.brandId}>
                                    <li>
                                        <div className="liTop">
                                            <div className="liTopL">
                                                <div className="logo">
                                                    <img src={item.brandLogo} alt="" />

                                                </div>
                                                <div className="details">{item.brandName}
                                                </div>
                                            </div>
                                            <div className="liTopR">
                                                <div className="timeDetails">仅剩&nbsp;</div>
                                                <div className="time">12:19:15</div>
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


                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>)
                            )}

                    </div>
                </div>
            </SampleSaleCSS>
        )
    }
    handleJump() {
        this.props.history.goBack();
    }
    handleDetails(it){
        console.log(it);
        observer.$emit("handledataIt",it);
        this.props.history.push("/details")
    }
    handleClick(id) {
        this.props.handleChangeID(id);
        this.setState({
            status: false,
            clickOne:id,
        })
    }
    componentDidMount() {
        this.props.handleAsyncSampleSale()
        this.props.handleGetOneData();
        this.props.handleGetTwoData();
    }
}
// SampleSale.defaultProps={
//     title:"品牌提前抢"
// }
// SampleSale.PropTypes={
//     title:PropTypes.string
// }



export default SampleSale;