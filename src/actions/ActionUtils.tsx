import { Alert } from 'react-native';
import { Res } from '../services/ServerService';

export const nBreadAlert = (res: Res) => {
  Alert.alert(
    'N빵협회',
    '에러 코드: ' + res.failureCode + '에러 메시지: ' + res.log,
  );
};
