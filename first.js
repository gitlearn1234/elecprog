const {app, BrowserWindow} = require('electron');

 function createWindow () {   
    //创建浏览器窗口
    win = new BrowserWindow({width: 800, height: 600});

    //然后加载应用的 index.html
    win.loadFile('index.html');
    //win.loadFile('index.html');
    win.webContents.openDevTools()

     var n = 20;
     console.log(n);

    //关闭当前窗口后触发 closed 事件
    win.on('closed', () => {
      console.log('closed');
      win = null;
    })
  }
 //Electron 初始化完成后触发 ready 事件 
app.on('ready', createWindow)
//  所有的窗口关闭后触发 window-all-closed 事件
app.on('window-all-closed', () => {
    console.log('window-all-closed');
    //非 Mac OS X 平台，直接调用 app.quit() 方法退出程序
    if (process.platform !== 'darwin') {
      app.quit();
    }
  })
  //窗口激活后触发 activate 事件
  app.on('activate', () => {
    console.log('activate');
    if (win === null) {
      createWindow();
    }
  })