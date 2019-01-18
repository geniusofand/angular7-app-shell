import {
  AppStateInterface,
  OssAppLayoutState,
  OssAppLayoutStateInterface,
  NavItemPrimaryInterface,
  NavItemSecondaryInterface
} from '@geniusofand/oss-app-state';

import { OssAppLayoutActions, OssAppLayoutActionType } from './actions';

const initialState: OssAppLayoutState = new OssAppLayoutState({});

export function ossAppLayoutReducer(state: OssAppLayoutStateInterface = initialState,
                                    action: OssAppLayoutActions): OssAppLayoutStateInterface {
  switch (action.type) {

    // Handle retrieving a fresh load
    case OssAppLayoutActionType.DialogClose:
    case OssAppLayoutActionType.DialogOpen:
    case OssAppLayoutActionType.DialogSuccess:
      return state;

    // case OssAppLayoutActionType.ResetNavItems:
    case OssAppLayoutActionType.LoadNavItems:
    case OssAppLayoutActionType.LoadNavItemsFailed:
      return {
        ...state,
        primaryNavItems: undefined,
        secondaryNavItems: undefined,
      };

    case OssAppLayoutActionType.LoadNavItemsCompleted:
      // TODO - figure out how/why to make it work as a property of Action, e.g. action.appendNavItems
      const appendNavItems: boolean = action['appendNavItems'];
      const currentStatePrimaries: NavItemPrimaryInterface[] = state.primaryNavItems;
      const currentStateSecondaries: { [categoryId: string]: NavItemSecondaryInterface[] } = state.secondaryNavItems;

      const primaries: NavItemPrimaryInterface[] = action.payload as NavItemPrimaryInterface[];
      const secondaries: { [categoryId: string]: NavItemSecondaryInterface[] } = {};

      for (const item of primaries) {
        if (currentStateSecondaries && appendNavItems) {
          currentStateSecondaries[item.categoryId] = item.menuItems;
        } else {
          secondaries[item.categoryId] = item.menuItems;
        }
      }

      if (currentStatePrimaries && appendNavItems) {
        // console.info(`appending ${primaries.length} to existing navItems...`);
        currentStatePrimaries.push(...primaries);
        return {
          ...state,
          primaryNavItems: currentStatePrimaries,
          secondaryNavItems: currentStateSecondaries,
        };
      } else {
        return {
          ...state,
          primaryNavItems: primaries,
          secondaryNavItems: secondaries,
        };
      }

    default:
      return state;
  }
}
