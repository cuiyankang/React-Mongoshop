import {categoryAsyncAction} from "../../actions/category/categoryActioncreator"
// console.log(categoryAction,111)
export const mapStateToProps=()=>({

})

export const mapDispatchToProps=(dispatch)=>({
    handlecategoryAsyncData(){
        console.log(111)
        dispatch(categoryAsyncAction())
    }
})