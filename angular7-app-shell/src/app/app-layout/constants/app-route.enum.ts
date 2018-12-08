export enum AppRoute {

  // Global routes
  error               = 'error',
  forbidden           = 'forbidden',
  home                = '',
  notFound            = 'not-found',

  // Auth routes
  login               = 'login',
  logout              = 'logout',

  // User routes
  users               = 'users',
  accountOverview     = 'users/account-overview',
  systemUsers         = 'users/system-users',
  userRoles           = 'users/user-roles',

  // System
  noOp                = 'no-op',
  unitTest            = 'unit-test',

}
