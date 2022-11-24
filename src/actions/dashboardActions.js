import {
    SHOW_SIDEBAR,
    HIDDEN_SIDEBAR,
    SHOW_MODAL_ADD,
    HIDDEN_MODAL_ADD,
    SHOW_MODAL_EDIT,
    HIDDEN_MODAL_EDIT
} from "../actions.types"


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


export const showModalAction=()=>{
    return(dispatch)=>{
        dispatch(showModal())
    }
}

const showModal =() =>({
    type: SHOW_MODAL_ADD
})

export const hiddenModalAction=()=>{
    return(dispatch)=>{
        dispatch(hiddenModal())
    }
}

const hiddenModal =() =>({
    type: HIDDEN_MODAL_ADD
})

export const showModalActionEdit=()=>{
    return(dispatch)=>{
        dispatch(showModalEdit())
    }
}

const showModalEdit =() =>({
    type: SHOW_MODAL_EDIT
})

export const hiddenModalActionEdit=()=>{
    return(dispatch)=>{
        dispatch(hiddenModalEdit())
    }
}

const hiddenModalEdit =() =>({
    type: HIDDEN_MODAL_EDIT
})