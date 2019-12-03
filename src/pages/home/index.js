import React, { Component, Fragment } from 'react'
import { PageContainer } from "common/styled"
import { Header, Main,} from "./styled"
import { Carousel, WingBlank } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [0, 1, 2, 3, 4],
            imgHeight: 134,
            data1: [0, 1, 2, 3],
            flg: [0, 1, 2]
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['a', 'b', 'c', 'd', 'f'],
                data1: ['a', 'b', 'c', 'd']
            });
        }, 100);
        this.props.handleAsyncHome();
        this.props.handleAsyncNav();
        this.props.handleAsyncdiscount();
        this.props.handleAsyncLayout();
        this.props.handleAsyncBrandSale();
        this.props.handleAsyncLine();
        this.props.handleAsyncfind();
    }

    render() {
        let line = this.props.data.line.line_list;
        let newlineone = this.handlePage(line, 1, 3)
        let newlinetwo = this.handlePage(line, 2, 3)
        let newlinethree = this.handlePage(line, 3, 3)
        let newlinefour = this.handlePage(line, 4, 3)
        let newline = [newlineone, newlinetwo, newlinethree, newlinefour];
        let sale = this.props.data.sale.sale_list;
        let config = this.props.data.layout.layout_list.config;
        let layout = this.handlePage(this.props.data.layout.layout_list.ddqGoodsList, 1);
        let { homebanner } = this.props.data.homebanner;
        let list_banner = homebanner;
        if (list_banner.length === 0) {
            list_banner = '';
        }

        const tabs = [
            { title: '1st' },
            { title: '2nd' },
            { title: '3rd' },
            { title: '4th' },
            { title: '5th' },
            { title: '6th' },
            { title: '7th' },
            { title: '8th' },
            { title: '9th' },
            { title: '10th' },
            { title: '11th' },
            { title: '12th' },
            { title: '13th' },
            { title: '14th' },
        ];
        return (
            <PageContainer>
                <Fragment>
                    <Header>
                        <div className="header_pr">
                            <a href="#/search">
                                <div className="wap_search">
                                    <span className="palaceholder">
                                        输入商品名或粘贴宝贝标题搜索
                                    </span>
                                </div>
                            </a>
                            <div className="header-info">
                                <a href="">
                                    <div className="city-entry">
                                        <span className="city-name">北京</span>
                                        <i className="city-entry-arrow"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="header_tab">
                            <div className="left">
                                <span>精选</span>
                            </div>
                            <div className="right">目录</div>
                        </div>
                        <div className="tab_nav">
                            <WhiteSpace />
                            <Tabs tabs={tabs} onTabClick={this.handleTabClick.bind(this, tabs)}
                                renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                            </Tabs>
                            <WhiteSpace />
                        </div>
                    </Header>

                    <Main>
                        <div className="main">
                            <WingBlank >
                                <Carousel
                                    infinite={true}
                                    autoplay={true}
                                >
                                    {this.state.data.map((val, index) => (
                                        <a
                                            key={val}
                                            style={{ display: 'inline-block', width: '100%', height: '2.8rem' }}
                                        >
                                            <img
                                                src={list_banner ? list_banner[index].pic : list_banner}
                                                style={{ width: '100%', height: '100%', borderRadius: '5px' }}
                                            />
                                        </a>
                                    ))}


                                </Carousel>
                            </WingBlank>
                            <div className="main_module_layout">
                                <div className="show_module">
                                    <div className="max_activity">
                                        <a>
                                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01qkuiBj2JJhzQyYE5d_!!2053469401.gif" />
                                        </a>
                                    </div>
                                    <ul className="activity_min_group">
                                        <li>
                                            <a href="">
                                                <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01vXHY3t2JJhzMnH3cy_!!2053469401.jpg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN018W1gzy2JJhzN50FOj_!!2053469401.jpg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main_module_nav">
                                <ol>
                                    {
                                        this.props.data.nav.nav_list.map((item, index) => (
                                            <li key={index} onClick={this.handlepush.bind(this, index)}>
                                                <a>
                                                    <div>
                                                        <img src={item.address} />
                                                        <span>{item.name}</span>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                        )
                                    }
                                </ol>
                            </div>
                            <div className="discount_header">
                                <div className="top-line-group">
                                    <div className="top-line-left">
                                        <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN011wdOkj2JJhy7TkPFo_!!2053469401.png" />
                                    </div>
                                    <div className="top-line-right">
                                        <a>
                                            <WingBlank>
                                                <Carousel className="my-carousel"
                                                    vertical
                                                    dots={false}
                                                    autoplay={true}
                                                    infinite={true}
                                                    swiping={true}
                                                >
                                                    {
                                                        this.props.data.discount.discount_list.map((item, index) => (
                                                            <div className="v-item" key={index}>{item.tag}&nbsp;{item.name}</div>
                                                        ))
                                                    }

                                                </Carousel>
                                            </WingBlank>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="display_window">
                                <div className="window">
                                    <div className="ddq">
                                        <div className="ddq_herder">
                                            <h3>咚咚抢</h3>
                                        </div>
                                        <div className="ddq_list">
                                            <ul className="ddq_list_ul">
                                                {
                                                    layout.map((item, index) => (
                                                        <li key={index}>
                                                            <a>
                                                                <div>
                                                                    <img src={item.pic} />
                                                                </div>
                                                                <p>￥{item.price}<del>$29</del></p>
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="import">
                                        {
                                            config ? config.map((item, index) => (
                                                <div className="import_top" key={index}>
                                                    <a>
                                                        <img src={item.address} />
                                                    </a>
                                                </div>
                                            )) : ''
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="brand_sale">
                                <div className="brand">
                                    <div className="title_group">
                                        <div className="title">
                                            <h3>品牌特卖</h3>
                                            <p></p>
                                        </div>
                                        <div className="more">
                                            <a href="">更多品牌 ></a>
                                        </div>
                                    </div>
                                    <ul>

                                        {
                                            sale.map((item, index) => (
                                                <li key={index}>
                                                    <a>
                                                        <img src={item.address} />
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="main_line">
                                <div className="line">
                                    <h2>大家都在领</h2>
                                    <div className="real_coupon">
                                        <WingBlank>
                                            <Carousel className="my-carousel"
                                                vertical
                                                dots={false}
                                                autoplay={true}
                                                infinite={true}
                                                swiping={true}
                                            >
                                                {
                                                    this.props.data.discount.discount_list.map((item, index) => (
                                                        <div className="v-item" key={index}>{item.tag}&nbsp;{item.name}</div>
                                                    ))
                                                }

                                            </Carousel>
                                        </WingBlank>
                                    </div>
                                    <div className="swiper_div">
                                        {/* <div>
                                            <div className="swiper_coupon_list">
                                                <a>
                                                    <img src="https://img.alicdn.com/bao/uploaded/O1CN015SFbKg1WrDmYlZOt8_!!2-item_pic.png_310x310.jpg_.webp" />
                                                    <p className="list_text">
                                                        【丰腾世家】珊瑚绒仙女睡衣
                                                    </p>
                                                    <p className="list_price">
                                                        ￥9.9
                                                    </p>
                                                    <span className="info ">即将领完</span>
                                                </a>
                                            </div>
                                        </div> */}
                                        <WingBlank >
                                            <Carousel
                                                infinite={true}
                                                autoplay={true}
                                                dots={false}
                                            >
                                                {
                                                    this.state.data1.map((val, index) => (
                                                        <div key={val}>
                                                            <div className="swiper_coupon_list" key={index}>
                                                                {
                                                                    newline[index].map((item, index) => (
                                                                        <a key={index}>
                                                                            <img src={item.pic} />
                                                                            <p className="list_text">
                                                                                {item.dtitle}
                                                                            </p>
                                                                            <p className="list_price">
                                                                                ￥{item.price}
                                                                            </p>
                                                                            <span className="info ">即将领完</span>
                                                                        </a>
                                                                    ))
                                                                }

                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </Carousel>
                                        </WingBlank>
                                    </div>
                                </div>
                            </div>

                            <h2 className="find_title">发现好货</h2>
                            <div className="find_goods">
                                <ul>
                                    <li>
                                        <div className="find_good_imgbox">
                                            <img src="https://img.alicdn.com/imgextra/i3/1785158051/O1CN01hFkMP629LPHOnqo0y_!!1785158051.jpg_310x310.jpg_.webp" />
                                        </div>
                                        <p className="find_product_list_title">自由点日夜用超薄组合套装115片</p>
                                        <div className="find-product-label-group">
                                            <span>30元券</span>
                                            <span>官方旗舰店</span>
                                            <span>聚划算</span>
                                        </div>
                                        <p className="find_product_price">
                                            券后&nbsp;￥
                                <span>39.9</span>
                                        </p>
                                        <div className="find_product_more">
                                            <p>
                                                天猫 ¥
                                        <span>69.9</span>
                                            </p>
                                            <span>
                                                已售
                                            <span>31.4万</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="find_good_imgbox">
                                            <img src="https://img.alicdn.com/imgextra/i3/1785158051/O1CN01hFkMP629LPHOnqo0y_!!1785158051.jpg_310x310.jpg_.webp" />
                                        </div>
                                        <p className="find_product_list_title">自由点日夜用超薄组合套装115片</p>
                                        <div className="find-product-label-group">
                                            <span>30元券</span>
                                            <span>官方旗舰店</span>
                                            <span>聚划算</span>
                                        </div>
                                        <p className="find_product_price">
                                            券后&nbsp;￥
                                <span>39.9</span>
                                        </p>
                                        <div className="find_product_more">
                                            <p>
                                                天猫 ¥
                                        <span>69.9</span>
                                            </p>
                                            <span>
                                                已售
                                            <span>31.4万</span>
                                            </span>
                                        </div>
                                    </li>

                                </ul>
                                <ul>
                                    <li>
                                        <div className="find_good_imgbox">
                                            <img src="https://img.alicdn.com/imgextra/i3/1785158051/O1CN01hFkMP629LPHOnqo0y_!!1785158051.jpg_310x310.jpg_.webp" />
                                        </div>
                                        <p className="find_product_list_title">自由点日夜用超薄组合套装115片</p>
                                        <div className="find-product-label-group">
                                            <span>30元券</span>
                                            <span>官方旗舰店</span>
                                            <span>聚划算</span>
                                        </div>
                                        <p className="find_product_price">
                                            券后&nbsp;￥
                                <span>39.9</span>
                                        </p>
                                        <div className="find_product_more">
                                            <p>
                                                天猫 ¥
                                        <span>69.9</span>
                                            </p>
                                            <span>
                                                已售
                                            <span>31.4万</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="find_good_imgbox">
                                            <img src="https://img.alicdn.com/imgextra/i3/1785158051/O1CN01hFkMP629LPHOnqo0y_!!1785158051.jpg_310x310.jpg_.webp" />
                                        </div>
                                        <p className="find_product_list_title">自由点日夜用超薄组合套装115片</p>
                                        <div className="find-product-label-group">
                                            <span>30元券</span>
                                            <span>官方旗舰店</span>
                                            <span>聚划算</span>
                                        </div>
                                        <p className="find_product_price">
                                            券后&nbsp;￥
                                            <span>39.9</span>
                                        </p>
                                        <div className="find_product_more">
                                            <p>
                                                天猫 ¥
                                            <span>69.9</span>
                                            </p>
                                            <span>
                                                已售
                                            <span>31.4万</span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Main>

                </Fragment>
            </PageContainer>

        )
    }
    handlepush(index) {//跳转
        // alert(index)
        switch (index) {
            case 0://疯抢
                this.props.history.push("/rankings")
                break;
            case 1://99包邮
                this.props.history.push("/nine")
                break;
            case 2://品牌特卖
                this.props.history.push("/samplesale")
                break;
            case 3://每日半价
                this.props.history.push("/halfprice")
                break;
            case 4://折上折
                this.props.history.push("/foldup")
                break;
        }
    }
    handleTabClick(tabs) {
        console.log(tabs)
    }

    handlePage(arr = [], pg = 1, li = 4) {
        let data = arr;
        let list = [], page = pg, limit = li;

        for (var i = (page - 1) * limit; i < Math.min(data.length, page * limit); i++) {
            list.push(data[i])
        }

        return list;
    }
}

export default Home;