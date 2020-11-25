import * as CountActions from './CountActions';
import * as ProductActions from './ProductActions';
import * as AuthActions from './AuthActions';

const CombineAction = Object.assign({}, CountActions, ProductActions, AuthActions);

export default CombineAction;
