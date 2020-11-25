export type CountStateType = {
  count: number;
};

export type CategoryType = {
  id: number;
  title: string;
}

export enum MemberState {
  notEnrolled = 0,
  nonhost = 1,
  host = 2
}

export type ProductType = {
  id: number;
  categories: CategoryType[];
  expiresAt: Date;
  piecePrice: number;
  title: string;
  piece: number;
  occupiedPiece: number;
  memberState: MemberState;
}

export type ProductStateType = {
  products: ProductType[];
  searchResults: ProductType[];
  searchHistories: string[];
  currentSearch: string;
}

export type ProfileType = {
  id: number;
  name: string,
  email: string,
  password: string,
  verified: boolean,
}

export type AuthStateType = {
  profile: ProfileType,
  accessToken: string,
}

export type StateType = {
  count: CountStateType;
  product: ProductStateType;
  auth: AuthStateType;
};
