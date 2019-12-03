import React from "react"
import { HalfPrice, Header, Category, Container } from "./styled"
import { withRouter } from 'react-router-dom'
import HalfEach from "./half"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Half extends React.Component {
    constructor(props) {
        //  console.log( new Date().getHours())
        super(props)
        // console.log(this.props.data.half,888)
        this.state = {
            activetime: "12"
        }
    }
    render() {

        let { half, halflist } = this.props.data.half
        let { activetime } = this.state
        return (

            <HalfPrice>
                <Header>
                    <i className="iconfont left" onClick={this.handleback.bind(this)}>&#xe605;</i>
                    <div className="logo"><img src="https://cmsstatic.ffquan.cn//wap_new/ranking/images/halfday_title.svg?v=201908292038" /></div>
                    <i className="iconfont right">&#xe63a;</i>
                </Header>
                <Category>
                    <div className="flex">
                        {
                            half ? half.map((item, index) => (
                                <li
                                    // className="item"
                                    key={index}
                                    onClick={this.handleClicktime.bind(this, item.time)}
                                    className={activetime === item.time ? "weight item" : "item"}
                                >
                                    <a className={activetime === item.time ? "active" : ""}>
                                        <span>{item.time}.00</span>
                                        <p>{item.status === "before" ? "已开抢" : item.status === "current" ? "正在抢购" : "即将开始"}</p>
                                    </a>
                                </li>
                            )) : ""
                        }

                    </div>
                </Category>
                <Container>
                    <div className="img">
                        <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01bxRFEY2JJhz5KNm0P_!!2053469401.png?v=752320" />
                    </div>
                    <div className="content">
                        <HalfEach halflist={halflist} activetime={activetime} />
                        <div className="load">都是小编精心挑选的超值好货哦~(｡･∀･)ﾉﾞ</div>
                    </div>
                </Container>
            </HalfPrice>

        )
    }
    handleClicktime(time) {
        this.setState({
            activetime: time
        })
        this.componentDidMount(time ? time : "00")
    }
    componentDidMount(time) {
        // console.log(time,555)
        this.props.halfbanner()
        this.props.halflist(time ? time : "00")

    }
    handleback() {
        this.props.history.goBack()
        // alert(555)
    }
}


export default Half;