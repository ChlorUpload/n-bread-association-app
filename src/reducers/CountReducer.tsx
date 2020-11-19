import ActionSymbols from "../actions/ActionSymbols"
import { CountActionType } from '../actions/ActionTypes';
import * as StateTypes from '../State';

export default (state: StateTypes.CountStateType = { count: 0 }, action: CountActionType): StateTypes.CountStateType => {
    switch (action.type) {
        case ActionSymbols.COUNT_UP:
            return { count: state.count + action.payload };
        case ActionSymbols.COUNT_DOWN:
            return { count: state.count - action.payload };
        default:
            return state;
    }
}