export enum CoreAppRoute {

  // Global routes
  default             = '',
  error               = 'error',
  forbidden           = 'forbidden',
  notFound            = 'not-found',

  // Auth routes
  login               = 'login',
  logout              = 'logout',

  // User routes
  user                = 'user',
  userPreferences     = 'user/preferences',
  userSettings        = 'user/settings',

  // System
  noOp                = 'no-op',
  unitTest            = 'unit-test',

}
