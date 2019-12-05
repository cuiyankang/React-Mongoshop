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
            flag: false,
            sorts: false,
        }
        this.page = 1;
    }
    render() {
        // let  list = this.props.data["list"].list;
        let list  = this.props.data["sort"].list;
        if (!list) {
            list = [];
        }
        let { flag,sorts } = this.state;
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
                        <li onClick={this.handleList.bind(this,'renqi')}><p>人气</p></li>
                        <li onClick={this.handleList.bind(this,'xiaoliang')}><p>销量</p></li>
                        <li onClick={this.handleList.bind(this,'price',sorts)}><p>价格</p></li>
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
                                                <div style={{lineHeight:'100%'}}>券后
                                                    <h2 style={{color:'red'}}>
                                                        {item.jiage}
                                                    </h2>
                                                    元&nbsp;</div>
                                                <div>&nbsp;券{item.quan_jine}元</div>
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
    handleList(titles,sort){
        
            let title = titles;
            if(sort==false){
                title = 'price';
            }else if(sort==true){
                title = 'price_h';
            }
            console.log(sort,11111);
            let kw = (this.props.location.search).split("=")[1];
            let city;
            if(title == 'renqi'){
                city = {
                    kw,
                    page: this.page,
                    px:title
                }
                this.props.handleSort(city);
    
            }else if(title == 'xiaoliang'){
                city = {
                    kw,
                    page: this.page,
                    px:title
                }
                this.props.handleSort(city);
    
            }else if(title == 'price'){
                city = {
                    kw,
                    page: this.page,
                    px:title
                }
                this.props.handleSort(city);
                this.setState({
                    sort:!this.state.sort
                })
               
            }else if(title == 'price_h'){
                city = {
                    kw,
                    page: this.page,
                    px:title
                }
                this.props.handleSort(city);
                this.setState({
                    sort:!this.state.sort
                })
            }
            this.page++;
    
            this.refs.scroll.handlepullingUp(() => {
                let city = {
                    kw,
                    page: this.page,
                    px:title
                }
                this.props.handleSort(city);
                this.page++;
    
            })
            this.refs.scroll.handlefinishPullUp();
        

    }
    handleRunter() {
        this.props.history.go(-1);
    }
    componentDidMount() {
            let kw = (this.props.location.search).split("=")[1];
            // let city = {
            //     kw,
            //     page: this.page,
            //     px:'renqi'
            // }
            // this.props.handleAsynclist(city, 1);
            // let city = {
            //     kw,
            //     page: this.page,
            //     px:'renqi'
            // }
            // this.props.handleSort(city);
            // this.page++;

            // this.refs.scroll.handlepullingUp(() => {
            //     let city = {
            //         kw,
            //         page: this.page,
            //         px:'renqi'
            //     }
            //     this.props.handleAsynclist(city, 0);
            //     this.page++;
            // })
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
        })
    }
}

export default List;

