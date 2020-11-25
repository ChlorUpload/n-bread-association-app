import ActionSymbols from '../actions/ActionSymbols';
import { AuthActionType } from '../actions/ActionTypes';
import { SetAccessTokenAction, SetProfileAction } from '../actions/AuthActions';
import { SetProductsAction } from '../actions/ProductActions';
import * as StateTypes from '../State';
import { initialState } from './InitialState';

export default (
  state: StateTypes.AuthStateType = initialState.auth,
  action: AuthActionType,
): StateTypes.AuthStateType => {
  switch (action.type) {
    case ActionSymbols.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: (action as SetAccessTokenAction).accessToken,
      };
    case ActionSymbols.SET_PROFILE:
      return {
        ...state,
        profile: (action as SetProfileAction).profile,
      };
    default:
      return state;
  }
};
