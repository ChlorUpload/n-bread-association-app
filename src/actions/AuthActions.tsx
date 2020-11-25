import IAction from './IAction';
import ActionSymbols from './ActionSymbols';
import { AuthStateType, ProductType, ProfileType, StateType } from '../State';
import ServerService, { ResStatus } from '../services/ServerService';
import { acc } from 'react-native-reanimated';
import { nBreadAlert } from './ActionUtils';

/* Action and Action Creators */

export class SetAccessTokenAction implements IAction {
  type: symbol = Symbol();
  accessToken: string = '';
}

function _setAccessToken(accessToken: string): SetAccessTokenAction {
  return {
    type: ActionSymbols.SET_ACCESS_TOKEN,
    accessToken,
  };
}

export class SetProfileAction implements IAction {
  type: symbol = Symbol();
  profile: ProfileType = {
    email: '',
    name: '',
    id: -1,
    password: '',
    verified: false,
  };
}

function _setProfile(profile: ProfileType): SetProfileAction {
  return {
    type: ActionSymbols.SET_PROFILE,
    profile,
  };
}

const _updateAccessToken = async (
  profile: ProfileType,
): Promise<[Boolean, string]> => {
  const { email, password } = profile;
  const res = await ServerService.login(email, password);
  if (res.status == ResStatus.success) {
    return [true, res.payload.accessToken];
  } else {
    nBreadAlert(res);
    return [false, ''];
  }
};

const _fetchProfile = async (
  accessToken: string,
): Promise<[Boolean, ProfileType]> => {
  const res = await ServerService.fetchProfile(accessToken);
  if (res.status == ResStatus.success) {
    return [true, res.payload];
  } else {
    nBreadAlert(res);
    return [
      false,
      {
        email: '',
        id: -1,
        name: '',
        password: '',
        verified: false,
      },
    ];
  }
};

export const loginThunk = (email: string, password: string) => async (
  dispatch: Function,
  getState: () => StateType,
) => {
  const [loginRes, token] = await _updateAccessToken(getState().auth.profile);
  if (loginRes) {
    dispatch(_setAccessToken(token));
    const [profileRes, profile] = await _fetchProfile(token);
    if (profileRes) {
      dispatch(_setProfile(profile));
    }
  }
};

export const fetchProfile = () => async (
  dispatch: Function,
  getState: () => StateType,
) => {
  let accessToken = getState().auth.accessToken;
  const res = await ServerService.verifyAccessToken(accessToken);
  if (res.status != ResStatus.success) {
    const [ures, token] = await _updateAccessToken(getState().auth.profile);
    if (ures) {
      dispatch(_setAccessToken(token));
      accessToken = token;
    } else {
      return;
    }
  }

  const [resc, profile] = await _fetchProfile(accessToken);
  if (resc) {
    dispatch(_setProfile(profile));
  }
};
