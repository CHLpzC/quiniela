const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function createWindow() {
    let win = new BrowserWindow({ width: 800, height: 600, frame: false });

    win.loadURL(url.format({
        pathname: path.join(__dirname, "dist/index.html"),
        protocol: "file:",
        slashes: true
    }));

    // win.setMenu(null);
}

app.on("ready", createWindow);