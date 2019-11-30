import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)

class Find extends Component {
    render() {
        console.log(this.props,6666)

        return (
            <PageContainer>
                9.9包邮
            </PageContainer>
        )
    }
    componentDidMount(){
        this.props.handleAsyncnine();
    }
}

export default Find;