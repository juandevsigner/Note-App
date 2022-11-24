import { SHOW_SIDEBAR, HIDDEN_SIDEBAR } from "../actions.types"



const initialSate ={
    sidebarShow: false
}

export const dashboardReducers = (state = initialSate, action) =>{
    switch(action.type){

        case SHOW_SIDEBAR:
            return{
                ...state,
                sidebarShow: true
            }
        case HIDDEN_SIDEBAR:
            return{
                ...state,
                sidebarShow: false
            }

        default:
            return state
    }
}