import { combineReducers } from "redux";
import { dashboardReducers } from "./dashboardReducers";
import { notesReducers } from "./notesReducers";


export default combineReducers({
    notes: notesReducers,
    dashboard: dashboardReducers
})