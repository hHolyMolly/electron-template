import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    titleBarStyle: 'hidden',
    icon: path.join(__dirname, 'favicon.ico'),
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.setMenuBarVisibility(false);

  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  } else {
    mainWindow.loadURL(`http://localhost:${process.env.VITE_PORT || 8888}`);
    mainWindow.webContents.openDevTools();
  }

  ipcMain.on('minimize-app', () => {
    if (mainWindow) {
      mainWindow.minimize();
    }
  });

  ipcMain.on('maximize-restore-app', () => {
    if (mainWindow) {
      if (mainWindow.isMaximized()) {
        mainWindow.restore();

        mainWindow.webContents.send('window-state', 'restored');
      } else {
        mainWindow.maximize();

        mainWindow.webContents.send('window-state', 'maximized');
      }
    }
  });

  ipcMain.on('close-app', () => {
    if (mainWindow) {
      mainWindow.close();
    }
  });

  mainWindow.webContents.once('did-finish-load', () => {
    if (mainWindow) {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
