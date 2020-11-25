import IAction from './IAction';
import ActionSymbols from './ActionSymbols';

/* Action and Action Creators */

export class CountUpAction implements IAction {
  type: symbol = Symbol();
  payload: number = 0;
}

export function countUp(num: number): CountUpAction {
  return {
    type: ActionSymbols.COUNT_UP,
    payload: num,
  };
}

export class CountDownAction implements IAction {
  type: symbol = Symbol();
  payload: number = 0;
}

export function countDown(num: number): CountUpAction {
  return {
    type: ActionSymbols.COUNT_DOWN,
    payload: num,
  };
}
