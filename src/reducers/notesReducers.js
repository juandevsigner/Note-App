import { GET_NOTES,
    GET_NOTES_ERROR,
    GET_NOTES_OK,CREATE_NOTE,
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

const initialState ={
    notes : [],
    state: true,
    loading: false,
    errorMsg: null,
    noteEdit: null,
}

export const notesReducers =(state = initialState, action)=>{
    switch(action.type){
        case GET_NOTES:
        case CREATE_NOTE:
        case DELETE_NOTE:
        case UPDATE_NOTE_LOADING:
            return{
            ...state,
            loading: true,
        }
        case GET_NOTES_OK:
            return{
            ...state,
            loading: false,
            notes: action.payload
        }
        case GET_NOTES_ERROR:
        case CREATE_NOTE_ERROR:
        case DELETE_NOTE_ERROR:
        case UPDATE_NOTE_ERROR:
            return{
            ...state,
            loading: false,
            errorMsg: action.payload
        }
        case CREATE_NOTE_OK:
            return{
            ...state,
            notes: [...state.notes, action.payload],
            loading: false,
        }
        case TOGGLE_FEATURED:
            return{
            ...state,
            notes: state.notes.map(note => note.id === action.payload.id ? note = action.payload : note)
        }
        case TOGGLE_ARCHIVED:
            return{
            ...state,
            notes: state.notes.map(note => note.id === action.payload.id ? note = action.payload : note)
        }
        case DELETE_NOW:
            return{
                ...state,
                loading: false,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case LOAD_NOTE_TO_EDIT:
            return{
                ...state,
                noteEdit: action.payload
            }
        case UPDATE_NOTE:
            return{
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? note = action.payload : note),
                noteEdit: null,
                loading: false,
            }
        default:
            return state
    }
}
