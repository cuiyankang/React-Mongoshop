//分类
import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { Sort, Header, Container } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import Categoryeach from "./rightEach";
@connect(mapStateToProps, mapDispatchToProps)


class Order extends Component {
    constructor() {
        super()
        this.state = {
            activeIndex: "25"
        }

    }
    render() {
        let fenlei = this.props.data.fenlei.data.data
        let { activeIndex } = this.state
        // console.log(activeIndex, 555)
        // console.log(fenlei, 999)
        return (
            <PageContainer>
                <Sort>
                    <Header>
                        <i className="iconfont back">&#xe605;</i>
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

