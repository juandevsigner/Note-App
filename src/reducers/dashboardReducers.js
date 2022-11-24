import {
    SHOW_SIDEBAR,
    HIDDEN_SIDEBAR,
    SHOW_MODAL_ADD,
    HIDDEN_MODAL_ADD,
    SHOW_MODAL_EDIT,
    HIDDEN_MODAL_EDIT
} from "../actions.types"



const initialSate ={
    sidebarShow: false,
    modalShow: false,
    modalShowEdit: false
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
        case SHOW_MODAL_ADD:
            return{
                ...state,
                modalShow: true
            }
        case HIDDEN_MODAL_ADD:
            return{
                ...state,
                modalShow: false
            }
        case SHOW_MODAL_EDIT:
            return{
                ...state,
                modalShowEdit: true
            }
        case HIDDEN_MODAL_EDIT:
            return{
                ...state,
                modalShowEdit: false
            }

        default:
            return state
    }
}