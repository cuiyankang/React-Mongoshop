import React from "react"
import { FoldUp, Header, Category, Container } from "./styled"
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import FoldUpList from "./listEach"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Fold extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: "1"
        }
    }
    render() {
        // console.log(this.props.data.foldup.folduplist.list,999)
        let foldupbanner = this.props.data.foldup.foldup;
        let { activeIndex } = this.state;
        let foldlist = this.props.data.foldup.folduplist.list;
        return (
            <FoldUp>
                <Header>
                    <i className="iconfont left" onClick={this.handleback.bind(this)}>&#xe605;</i>
                    <div className="logo"><img src="https://cmsstatic.ffquan.cn//wap_new/ranking/images/z_title.svg?v=201908292038" /></div>
                    <i className="iconfont right">&#xe63a;</i>
                </Header>
                <Category>
                    <div className="flex">
                        {
                            (foldupbanner.length > 0) ? (foldupbanner.map((item, index) => (
                                <li className="item"
                                    key={index}
                                    onClick={this.handleGetId.bind(this, item.id)}  ><a className={item.id == activeIndex ? "active" : ""}>{item.title}</a></li>
                            ))) : ""
                        }
                    </div>
                </Category>
                <Container>
                    <div className="banner">
                        <a>
                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/TB24ylugpkoBKNjSZFkXXb4tFXa_!!2053469401.png" alt="" />
                        </a>
                    </div>
                    <div className="item_list">
                        <FoldUpList foldlist={foldlist ? foldlist : []} activeIndex={activeIndex} />
                    </div>

                </Container>
            </FoldUp>
        )
    }
    handleGetId(id) {
        this.setState({
            activeIndex: id

        })
        this.componentDidMount(id ? id : "1")
    }
    handleback() {
        this.props.history.goBack()
    }
    componentDidMount(id) {
        this.props.foldup()//导航
        this.props.list(id);//列表
        // console.log(id,888)
    }

}


export default Fold;