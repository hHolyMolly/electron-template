import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  // Отправка сообщений в main процесс
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  },

  // Получение ответа от main процесса (одноразовое)
  invoke: async (channel: string, ...args: any[]): Promise<any> => {
    try {
      return await ipcRenderer.invoke(channel, ...args);
    } catch (error) {
      console.error(`Error invoking channel "${channel}":`, error);

      throw error;
    }
  },

  // Подписка на сообщения от main процесса
  on: (channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) => {
    ipcRenderer.on(channel, listener);

    return () => ipcRenderer.removeListener(channel, listener); // Функция для отписки
  },

  // Подписка на сообщения с гарантией единого вызова
  once: (channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) => {
    ipcRenderer.once(channel, listener);
  },

  // Удаление всех слушателей для канала
  removeAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel);
  },

  // Список активных каналов (для отладки)
  getChannels: () => {
    return ipcRenderer.eventNames();
  },
});
