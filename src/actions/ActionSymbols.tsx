const ActionSymbols = {
  // Count Actions
  COUNT_UP: Symbol('COUNT_UP'),
  COUNT_DOWN: Symbol('COUNT_DOWN'),

  // Product Actions
  SET_PRODUCTS: Symbol('SET_PRODUCTS'),
  SET_CURRENT_SEARCH: Symbol('SET_CURRENT_SEARCH'),
  SET_SEARCH_HISTORY: Symbol('SET_SEARCH_HISTORY'),
  SET_SEARCH_RESULTS: Symbol('SET_SEARCH_RESULTS'),

  // Auth Actions
  SET_ACCESS_TOKEN: Symbol('SET_ACCESS_TOKEN'),
  SET_PROFILE: Symbol('SET_PROFILE'),
};

export default ActionSymbols;
