// import { AuthMatch } from 'app/core/authentication/models/auth-match.enum';
// import { AppScopes } from 'app/core/authentication/models/scopes.enum';

import { NavItem, NavItemInterface } from './nav-item.model';

export interface NavItemSecondaryInterface extends NavItemInterface {
  // scopes?: AppScopes[];
  // scopeMatch?: AuthMatch;
}

export abstract class NavItemSecondary extends NavItem implements NavItemSecondaryInterface {
  // public scopes?: AppScopes[];
  // public scopeMatch?: AuthMatch = AuthMatch.SOME;

  constructor({
    // scopes = undefined,
    // scopeMatch = undefined,
    }: NavItemSecondaryInterface) {
    super(arguments[0]);
    // this.scopes = scopes;
    // this.scopeMatch = scopeMatch;
  }
}
