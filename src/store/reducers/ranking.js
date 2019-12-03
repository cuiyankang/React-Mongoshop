const defaultState={
    rankingbanner:[],
    rankinglist:[],
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "RANKING":
            let ranking=JSON.parse(JSON.stringify(state));
            ranking.rankingbanner=action.data.data;
            return ranking;
        case "RANKING_LIST":
            let list=JSON.parse(JSON.stringify(state))
            list.rankinglist=action.data.data;
            return list;

    }
    // console.log(action)
    return state
}