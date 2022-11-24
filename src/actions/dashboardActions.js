import { SHOW_SIDEBAR, HIDDEN_SIDEBAR } from "../actions.types"

export const showSidebarAction = () =>{
    return (dispatch) =>{
        dispatch(showSiderbar())
    }
}

const showSiderbar =() =>({
    type:SHOW_SIDEBAR
})

export const hiddenSidebarAction = ()=>{
    return(dispatch)=>{
        dispatch(hiddenSiderBar())
    }
}

const hiddenSiderBar=()=>({
    type:HIDDEN_SIDEBAR
})