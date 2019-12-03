import React, { Fragment } from 'react';
import { Header, MainOne, MainTwo } from '../list/styled';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore.js";
import Bscroll from "../../common/bscroll/index.js";

@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: false
        }
        this.page = 1;
    }
    render() {
        let { list } = this.props.data.list;
        if (!list) {
            list = [];
        }
        let { flag } = this.state;
        return (
            <Fragment>
                <Header>
                    <div className="header">
                        <a onClick={this.handleRunter.bind(this)}><span>&lt;</span></a>
                        <div className="search">
                            <div onClick={this.handleSearch.bind(this)}>
                                <i className="iconfont">&#xe60d;</i>
                                <input type="text" placeholder="输入商品名或粘贴宝贝标题搜索" />
                            </div>
                            <div className="fenlei" onClick={this.handlesubmit.bind(this)}>
                                <i className="iconfont">&#xe629;</i>
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                        <li><p>人气</p></li>
                        <li><p>销量</p></li>
                        <li><p>价格</p></li>
                    </div>
                </Header>
                <Bscroll ref="scroll">
                        <MainOne>
                            <div>
                            {
                                list.map((item, index) => (
                                    <li key={index} className={flag?'product':'line'}>
                                        <div className={flag?'product_one':'line_one'}>
                                            <img src={item.pic} />
                                        </div>
                                        <div className={flag?'product_two':'line_two'}>
                                            <h3>{item.d_title}</h3>
                                            <div>
                                                <div>券后￥{item.jiage}</div>
                                                <div>券{item.quan_jine}元</div>
                                                <div>
                                                    <span>已售 {item.xiaoliang}万</span>|
                                                    <span>评论 {item.comment}万</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                            </div>
                        </MainOne>
                </Bscroll>
            </Fragment>
        )
    }
    handleRunter() {
        this.props.history.go(-1);
    }
    componentDidMount() {
        let kw = (this.props.location.search).split("=")[1];
        let city = {
            kw,
            page: this.page
        }
        this.props.handleAsynclist(city, 1);
        this.page++;

        this.refs.scroll.handlepullingUp(() => {
            let city = {
                kw,
                page: this.page
            }
            this.props.handleAsynclist(city, 0);
            this.page++;
        })
    }
    componentWillUpdate() {
        this.refs.scroll.handlefinishPullUp();
    }
    handleSearch() {
        this.props.history.push('/search');
    }
    handlesubmit() {
        this.setState({
            flag: !this.state.flag
        },()=>{
            this.refs.scroll.handlerefresh()
        })
    }
}

export default List;

