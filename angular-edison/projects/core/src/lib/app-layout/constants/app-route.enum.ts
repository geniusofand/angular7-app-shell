export enum CoreAppRoute {

  // Global routes
  default             = '',
  error               = 'error',
  forbidden           = 'forbidden',
  notFound            = 'not-found',

  // Auth routes
  authSuccessCallback = 'login/auth-callback',
  login               = 'login',
  logout              = 'logout',

  // User routes
  user                = 'user',
  userPreferences     = 'user/preferences',
  userSettings        = 'user/settings',

  // System
  noOp                = 'no-op',
  unitTest            = 'unit-test',

  // Admin routes
  adminAuthSuccessCallback = 'login-admin/auth-callback',
  adminLogin          = 'login-admin',
  selectPerson        = 'select-person',

}
