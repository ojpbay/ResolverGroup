export interface IResolverGroup {
  id: number;
  resolverDescription: string;
  contactName: string;
  resolverGroupName: string;
}

export interface IApplication {
  id: number;
  resolverGroupName: string;
  appDescription: string;
  appName: string;
  contactName: string;
}
