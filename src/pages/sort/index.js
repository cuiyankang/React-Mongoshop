//分类
import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { Sort, Header, Container } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import Categoryeach from "./rightEach";
import {withRouter} from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: "25"
        }
        if(this.props.location.query){
            this.state.activeIndex = this.props.location.query;
        }

    }
    render() {
        
        let fenlei = this.props.data.fenlei.data.data
        let { activeIndex } = this.state
        return (
            <PageContainer>
                <Sort>
                    <Header>
                        <i className="iconfont back" onClick={this.handleClickback.bind(this)}>&#xe605;</i>
                        <div className="input">
                            <i className="iconfont search">&#xe60d;</i>
                            <input type="text" defaultValue="输入商品名和粘贴宝贝标题搜索" />
                        </div>
                    </Header>
                    <Container>
                        <div className="left">
                            <ul>
                                {
                                    fenlei ? (fenlei.map((item, index) => (
                                        <li key={item.cid}
                                            onClick={this.handleClick.bind(this, item.cid)}
                                            className={activeIndex === item.cid ? "active" : ""}
                                        >{item.name}</li>
                                    ))) : ""
                                }


                            </ul>
                        </div>
                        <div className="right">
                             <Categoryeach fenlei={fenlei ? fenlei : []} activeIndex={activeIndex} />
                        </div>
                       
                    </Container>
                </Sort>
            </PageContainer>
        )

    }
    handleClickback(){
        this.props.history.goBack()
    }
    componentDidMount() {
        this.props.handlecategoryAsyncData()
    }
    handleClick(id) {
        // console.log(id)
        this.setState({
            activeIndex: id
        })
    }

}


export default Order;

