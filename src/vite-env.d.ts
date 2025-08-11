/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_BASE_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
