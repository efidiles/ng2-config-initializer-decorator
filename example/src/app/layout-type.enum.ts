export enum LayoutType {
  RED_BACKGROUND = 'red-background' as any as LayoutType,
  DEFAULT = 'default' as any as LayoutType,
}

export interface ConfigInitializerData {
  layout: LayoutType;
}
