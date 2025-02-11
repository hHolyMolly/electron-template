export {};

declare global {
  interface Window {
    electron: {
      send: (channel: string, ...args: unknown[]) => void;
      invoke: <T>(channel: string, ...args: unknown[]) => Promise<T>;
      on: (channel: string, listener: (event: IpcRendererEvent, ...args: unknown[]) => void) => () => void;
      once: (channel: string, listener: (event: IpcRendererEvent, ...args: unknown[]) => void) => void;
      removeAllListeners: (channel: string) => void;
      getChannels: () => string[];
    };
  }
}
