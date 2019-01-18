
export interface RemoteConfigStateInterface {
  primaryNavState?: any;
}

export class RemoteConfigState implements RemoteConfigStateInterface {
  public primaryNavState?: any;

  constructor({
    primaryNavState = undefined,
    }: RemoteConfigStateInterface) {
    this.primaryNavState = primaryNavState;
  }
}
