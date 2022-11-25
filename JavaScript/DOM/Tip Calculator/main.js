const {app, BrowserWindow, Menu } = require('electron');
const  path = require('path');
const isMac = process.platform === 'darwin';
const isDev = true
// Configurations for the main window
function createMainWindow(){
    //Create a new Window and pass in some information
    const mainWindow = new BrowserWindow({
        title:'Splitter',
        width: isDev ? 1000:500,
        height:600
    })
    // Open Dev tools if in dev environment
    if(isDev){
      mainWindow.webContents.openDevTools();
    }
    // Tell the main window what it should render in the UI
    mainWindow.loadFile(path.join(__dirname, './public/index.html'))
}

app.on('ready',()=>{
  createMainWindow();
  // Implement menu  
  const mainMenu = Menu.buildFromTemplate(menu)
  Menu.setApplicationMenu(mainMenu)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

// Menu Template
const menu =[
    ...(isMac?[{
        label:app.name,
        submenu:[
            {
                label:'About'
            }
        ]
    }]:[]),
  {
    role:'fileMenu'
  },
  ...(!isMac?[{
       label:'help',
       submenu:[
        {
            label:'About'
        }
       ]
  }]:[])    
]

// Check if we are on a MAC
app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
  })