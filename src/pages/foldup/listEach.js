import React, { Fragment } from "react"

class FoldUpList extends React.Component {
    render() {
        // console.log(this.props, 555)
        let { foldlist} = this.props
        // console.log(foldlist, activeIndex, 888)
        return (
            <Fragment>
                {
                    foldlist.map((item, index) => (
                        <div className="item" key={item.id}>
                            <div className="left"><img src={item.pic}/></div>
                            <div className="right">
                                <h3>{item.dtitle}</h3>
                                <div className="text">
                                    <div className="l ban">
                                        <p className="money">
                                            <span className="iconfont">&#xe608;</span>
                                            <b>￥{item.yuanjia}</b>
                                        </p>
                                        <p className="zh">
                                            折后
                                            <span className="price">
                                                <i>￥</i>
                                                38.
                                                <i>{item.jiage}</i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="r ban">
                                        <span>已售 {item.xiaoliang}万件</span>
                                        <p className="quan">{item.quanJine}元券</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Fragment>
        )
    }
}


export default FoldUpList;