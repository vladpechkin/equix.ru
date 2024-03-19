export interface InputOption {
  name: string;
  id: string;
}

export interface Route {
  name?: string;
  url?: string;
  group?: string;
  entityName?: string;
}

export interface Res {
  data: {
    total: number;
    limit: number;
    page: number;
    results: number;
  };
}
