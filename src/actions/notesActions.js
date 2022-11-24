import { GET_NOTES,
    GET_NOTES_ERROR,
    GET_NOTES_OK,
    CREATE_NOTE,
    CREATE_NOTE_ERROR,
    CREATE_NOTE_OK,
    TOGGLE_FEATURED,
    TOGGLE_ARCHIVED,
    DELETE_NOTE,
    DELETE_NOTE_ERROR,
    LOAD_NOTE_TO_EDIT,
    UPDATE_NOTE,
    UPDATE_NOTE_LOADING,
    UPDATE_NOTE_ERROR,
    DELETE_NOW
} from "../actions.types"

import { axiosClient } from "../config/axiosClient";


export const getNotesAction = () =>{
    return async(dispatch) =>{
        dispatch(getNotes())
        try {
            const {data} = await axiosClient("notes")
            dispatch(getNotesOk(data))
        } catch (error) {
            dispatch(getNotesError(error))
            console.log(error)
        }
    }
}

const getNotes =()=>({
    type:GET_NOTES,
    payload: true
})

const getNotesOk = (notes) =>({
    type:GET_NOTES_OK,
    payload: notes
})

const getNotesError = (error) => ({
    type:GET_NOTES_ERROR,
    payload: error
})


export const createNoteAction =(note)=>{

    return async(dispatch)=>{
        dispatch(createNote())
        try {
            const {data} =await axiosClient.post("notes", note )
            dispatch(addNote(data))
        } catch (error) {
            console.log(error)
            dispatch(errorNote(error))
        }
    }
}

const createNote =()=>({
    type:CREATE_NOTE
})

const addNote=(note)=>({
    type:CREATE_NOTE_OK,
    payload: note
})

const errorNote = error =>({
    type: CREATE_NOTE_ERROR,
    payload: error
})

export const toggleFeaturedAction = note =>{

    return async(dispatch)=>{
        try {
            await axiosClient.put(`notes/${note.id}`, note)
            dispatch(toggleFeatured(note))
        } catch (error) {
            console.log(error)
        }
    }
}

const toggleFeatured=note=>({
    type:TOGGLE_FEATURED,
    payload: note
})

export const toggleArchivedAction = note =>{

    return async(dispatch)=>{
        try {
            await axiosClient.put(`notes/${note.id}`, note)
            dispatch(toggleArchived(note))
        } catch (error) {
            console.log(error)
        }
    }
}

const toggleArchived=note=>({
    type:TOGGLE_ARCHIVED,
    payload: note
})



export const deleteNoteAction =id=>{
    return async(dispatch)=>{
        try {
            dispatch(deleteNote())
            await axiosClient.delete(`notes/${id}`)
            dispatch(deleteNoteOk(id))
        } catch (error) {
            dispatch(deleteNoteError(error))
        }

    }
}

const deleteNote =()=>({
    type:DELETE_NOTE
})

const deleteNoteOk =(id)=>({
    type:DELETE_NOW,
    payload: id
})

const deleteNoteError =(error)=>({
    type:DELETE_NOTE_ERROR,
    payload: error
})


export const loadNoteAction = note =>{
    return (dispatch) =>{
        dispatch(loadNoteEdit(note))
    }
}

export const editNoteAction = note =>{

    return async(dispatch)=>{
            dispatch(editNoteLoad())
        try {
            const {data} = await axiosClient.put(`notes/${note.id}`, note)
            dispatch(noteEditSucces(data))
        } catch (error) {
            console.log(error)
            dispatch(editNoteError(error))
        }
    }
}

const loadNoteEdit = note =>({
    type: LOAD_NOTE_TO_EDIT,
    payload: note
    }
)

const noteEditSucces = note =>({
    type: UPDATE_NOTE,
    payload: note
})

const editNoteLoad =()=>({
    type:UPDATE_NOTE_LOADING
})

const editNoteError =()=>({
    type:UPDATE_NOTE_ERROR
})
