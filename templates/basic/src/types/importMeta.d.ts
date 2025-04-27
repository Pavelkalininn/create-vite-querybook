declare global {
  namespace NodeJS {
    type ProcessEnv = {
      VITE_API_URL: string;
    }
  }
}
export {};
