import { combineReducers } from 'redux';
import { StateType } from '../State';
import CountReducer from "./CountReducer";

export default combineReducers({
    count: CountReducer,
});

export const initialState: StateType = {
    count: {
        count: 0,
    }
};