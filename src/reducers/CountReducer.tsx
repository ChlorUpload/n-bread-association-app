import ActionSymbols from '../actions/ActionSymbols';
import { CountActionType } from '../actions/ActionTypes';
import * as StateTypes from '../State';
import { initialState } from './InitialState';

export default (
  state: StateTypes.CountStateType = initialState.count,
  action: CountActionType,
): StateTypes.CountStateType => {
  switch (action.type) {
    case ActionSymbols.COUNT_UP:
      return { ...state, count: state.count + action.payload };
    case ActionSymbols.COUNT_DOWN:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
