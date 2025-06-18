const { app, safeStorage } = require('electron')

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  console.log(`safeStorage.isEncryptionAvailable() == ${safeStorage.isEncryptionAvailable()}}.`);
  if (process.platform === 'linux') {
    console.log(`safeStorage.getSelectedStorageBackend() == ${safeStorage.getSelectedStorageBackend()}}.`);
  }
  if (safeStorage.isEncryptionAvailable()) {
    console.log(`safeStorage.encryptString('something') == ${safeStorage.encryptString('something')}.`);
  }
  app.quit();
})

