import React, { Component, Fragment } from 'react'
import { PageContainer } from "common/styled"
import { Header, Main, Footer } from "./styled"
import { Carousel, WingBlank } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 134,
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: [
                    'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Qs6nlg2JJhzGrWVYb_!!2053469401.jpg',
                    'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01QQycFi2JJhzOkYDtO_!!2053469401.jpg',
                    'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01GIrLh62JJhzKyTz97_!!2053469401.jpg',
                    'https://img.alicdn.com/imgextra/i3/2053469401/O1CN01gS6H9V2JJhzOUriix_!!2053469401.jpg',
                    'https://img.alicdn.com/imgextra/i1/2053469401/O1CN015GksGc2JJhzCOmGjy_!!2053469401.jpg',
                ],
            });
        }, 100);



    }
    render() {
        const tabs = [
            { title: '1st Tab' },
            { title: '2nd Tab' },
            { title: '3rd Tab' },
            { title: '4th Tab' },
            { title: '5th Tab' },
            { title: '6th Tab' },
            { title: '7th Tab' },
            { title: '8th Tab' },
            { title: '9th Tab' },
            { title: '10th Tab' },
            { title: '11th Tab' },
            { title: '12th Tab' },
            { title: '13th Tab' },
            { title: '14th Tab' },
        ];
        return (
            <PageContainer>

                <Fragment>
                    <Header>
                        <div className="header_pr">
                            <a>
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
                        </div>
                    </Header>

                    <Main>
                        <div className="main">
                            <WingBlank >
                                <Carousel
                                    infinite={true}
                                    autoplay={true}
                                >
                                    {this.state.data.map(val => (
                                        <a
                                            key={val}
                                            style={{ display: 'inline-block', width: '100%', height: " 2.8rem" }}
                                        >
                                            <img
                                                src={val}
                                                style={{ width: '100%', height: "100%", borderRadius: '5px' }}
                                            />
                                        </a>
                                    ))}


                                </Carousel>
                            </WingBlank>
                            <div className="main_module_layout">
                                <div className="show_module">
                                    <div className="max_activity">
                                        <a>
                                            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01vj7NGb2JJhzKcmNl9_!!2053469401.gif" />
                                        </a>
                                    </div>
                                    <ul className="activity_min_group">
                                        <li>
                                            <a href="">
                                                <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01sOxShQ2JJhzMmXiV0_!!2053469401.jpg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN016GK0Pf2JJhzKScntd_!!2053469401.jpg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main_module_nav">
                                <ol>
                                    <li>
                                        <a>
                                            <div>
                                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN0151LlXA2JJhyWrrtRw_!!2053469401.gif" alt="" />
                                                <span>品牌特卖</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/#/rankings">
                                            <div>
                                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN0151LlXA2JJhyWrrtRw_!!2053469401.gif" alt="" />
                                                <span>疯抢排行</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/#/foldup">
                                            <div>
                                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN0151LlXA2JJhyWrrtRw_!!2053469401.gif" alt="" />
                                                <span>折上折</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <div>
                                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN0151LlXA2JJhyWrrtRw_!!2053469401.gif" alt="" />
                                                <span>9.9包邮</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/#/halfprice">
                                            <div>
                                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN0151LlXA2JJhyWrrtRw_!!2053469401.gif" alt="" />
                                                <span>每日半价</span>
                                            </div>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <div className="discount_header">
                                <div className="top-line-group">
                                    <div className="top-line-left">
                                        <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN011wdOkj2JJhy7TkPFo_!!2053469401.png" />
                                    </div>
                                    <div className="top-line-right">
                                        <a>
                                            买1送1，摩尔电动牙刷
                                </a>
                                    </div>
                                </div>
                            </div>
                            <div className="display_window">
                                <div className="window">
                                    <div className="ddq">
                                        <div className="ddq_herder">
                                            <h3>咚咚抢</h3>
                                            <p>
                                                <span>08点场</span>
                                                <i>00:00:00</i>
                                            </p>
                                        </div>
                                        <div className="ddq_list">
                                            <ul className="ddq_list_ul">
                                                <li>
                                                    <a>
                                                        <div>
                                                            <img src="https://img.alicdn.com/imgextra/i4/2244226791/O1CN01W9el2C202KFuVDD5V_!!2244226791.jpg_310x310.jpg_.webp" />
                                                        </div>
                                                        <p>￥9<del>$29</del></p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div>
                                                            <img src="https://img.alicdn.com/imgextra/i4/2244226791/O1CN01W9el2C202KFuVDD5V_!!2244226791.jpg_310x310.jpg_.webp" />
                                                        </div>
                                                        <p>￥9<del>$29</del></p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div>
                                                            <img src="https://img.alicdn.com/imgextra/i4/2244226791/O1CN01W9el2C202KFuVDD5V_!!2244226791.jpg_310x310.jpg_.webp" />
                                                        </div>
                                                        <p>￥9<del>$29</del></p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div>
                                                            <img src="https://img.alicdn.com/imgextra/i4/2244226791/O1CN01W9el2C202KFuVDD5V_!!2244226791.jpg_310x310.jpg_.webp" />
                                                        </div>
                                                        <p>￥9<del>$29</del></p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="import">
                                        <div className="import_top">
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01cXAShV2JJhzCcFhKD_!!2053469401.png" />
                                            </a>
                                        </div>
                                        <div className="import_bottom">
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01cXAShV2JJhzCcFhKD_!!2053469401.png" />
                                            </a>
                                        </div>
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
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01B4zqIG2JJhzFo9qT0_!!2053469401.png" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main_line">
                                <div className="line">
                                    <h2>大家都在领</h2>
                                    <div className="real_coupon"></div>
                                    <div className="swiper_div">
                                        <div>
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
                                        </div>
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

            // <div>
            //     <WhiteSpace />
            //     <Tabs tabs={tabs}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
            //     {this.renderContent}
            //     </Tabs>
            //     <WhiteSpace />
            // </div>

        )
    }
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <p>Content of {tab.title}</p>
        </div>);
}
