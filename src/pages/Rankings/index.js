import React from "react"

import { Ranking, Header, Category, Container } from "./styled"
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import RankingEachs from "./rankingEach"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Rankings extends React.Component {
    constructor() {
        super()
        this.state = {
            activeIndex: "4"
        }
    }
    render() {
        // console.log(this.props.data.ranking.rankinglist, 555)
        let ranking = this.props.data.ranking.rankingbanner;
        let list=this.props.data.ranking.rankinglist
        let { activeIndex } = this.state;
        return (
            <Ranking>
                <Header>
                    <i className="iconfont left" onClick={this.handleback.bind(this)}>&#xe605;</i>
                    <div className="logo"><img src="https://cmsstatic.ffquan.cn//wap_new/ranking/images/title.svg?v=201908292038" /></div>
                    <i className="iconfont right">&#xe63a;</i>
                </Header>
                <Category>
                    <div className="flex">
                        {
                            ranking.map((item, index) => (
                                <li className="item" key={item.id} onClick={this.handleClick.bind(this, item.id)}><a className={activeIndex == item.id ? "active" : ""}>{item.title}</a></li>
                            ))
                        }


                    </div>
                </Category>
                <Container>
                    <div className="list">
                        <RankingEachs list={list?list:""} activeIndex={activeIndex} />
                    </div>

                </Container>
            </Ranking>
        )
    }
    handleClick(id) {
        this.setState({
            activeIndex: id
        })
        this.componentDidMount(this.state.activeIndex?this.state.activeIndex:"4")
        // console.log(this.state.activeIndex)
    }
    componentDidMount(id) {
        // console.log(id ? id : "4", 66)
        this.props.rankingbanner()
        this.props.rankinglist(id ? id : "4")
        // console.log(id, 88)
    }
    handleback() {
        
        this.props.history.goBack()
        
        
    }
}

export default Rankings