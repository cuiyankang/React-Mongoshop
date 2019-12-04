import styled from "styled-components"


export const Container = styled.div`
        height: 100%;
        overflow: auto;
        background: #f5f5f5;
        .city_body {
            background: #ebebeb;
            .hot_city{
                line-height: 0.6rem;
                font-size: 0.28rem;
                .hot_title{
                    font-size:.3rem;
                    line-height:.6rem;padding-left: 0.26rem;
                }
                .hot_city_list{
                    width: 96%;
                    background: #f5f5f5;
                    padding-bottom: 0.16rem;
                    display: flex;
                    flex-wrap: wrap;
                    line-height: 0.9rem;
                    padding-left: 0.25rem;
                    .hot_city_name{
                        margin-top: 0.3rem;
                        margin-right: 0.26rem;
                        width: 1.9rem;
                        height: 0.66rem;
                        background: #fff;
                        text-align: center;
                        line-height: 0.66rem;
                        font-size: 0.28rem;
                        border: 2px solid #e6e6e6;
                        margin-right: 0.26rem;
                
                    }
                }
            }
            .city_list{
                &>div{
                    width: 100%;
                }
                .city_list_item{
                    .city_title_letter{
                        line-height: 0.6rem;
                        padding-right: 0.26rem;
                        padding-left: 0.25rem;
                        font-size: 0.4rem;
                    }
                    .city_list_name{
                        width: 96%;
                        background: #f5f5f5;
                        padding-left: 0.25rem;
                        line-height: 0.9rem;
                        margin-right: 0.26rem;
                        border-bottom: 2px solid #e6e6e6;
                    }
                }
            }
        }
    /*城市列表下标*/
        .city_list_index{
            position: fixed;
            right: 0;
            top: 0.5rem;
            &>div{
                padding: 0.1rem 0.05rem;
                font-size: 0.25rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

`