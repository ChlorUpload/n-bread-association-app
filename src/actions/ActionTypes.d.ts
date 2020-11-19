import { CountDownAction, CountUpAction } from "./CountActions";

export type CountActionType = CountUpAction | CountDownAction;

/* combined action type */
export type CombineActionType = CountActionType;