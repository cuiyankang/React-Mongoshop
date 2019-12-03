import React, { Fragment } from "react"

class RankingEachs extends React.Component {
    render() {
        // console.log(this.props)
        let { list, activeIndex } = this.props
        console.log(list, activeIndex, 888)
        return (
            <Fragment>
                {
                    list ? list.map((item, index) => (
                        <div className="item_list" key={item.id}>
                            <span className="lv">NO.1</span>
                            <div className="left">
                                <img src={item.pic} />
                            </div>
                            <div className="right">
                                <h3>{item.dtitle}</h3>
                                <p className="price">
                                    <span className="Lately">近2小时疯抢</span>
                                    <span className="many">{item.salesNum}</span>
                                    <span className="piece">件</span>
                                </p>
                                <p className="price tianmao">天猫价: ¥{item.yuanjia}</p>

                                <div className="right_text">
                                    <span className="volume red">券后价 ¥ </span>
                                    <span className="price_after red">{item.jiage}</span>
                                    <span className="butt">立即抢</span>
                                </div>
                            </div>
                        </div>
                    )):""
                }

            </Fragment>
        )
    }
}


export default RankingEachs;