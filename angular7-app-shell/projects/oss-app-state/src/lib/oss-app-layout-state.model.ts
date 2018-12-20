
export interface OssAppLayoutStateInterface {
  dialog?: any;
}

export class OssAppLayoutState implements OssAppLayoutStateInterface {
  public dialog?: any;

  constructor({
    dialog = undefined,
    }: OssAppLayoutStateInterface) {
    this.dialog = dialog;
  }
}
