const Client = require("scp2");
const fs = require("fs");
const path = require("path");
const distPath = path.join(process.cwd(), "integralManage") + "/";
const privateKey = fs.readFileSync(
  path.join(process.cwd(), "scripts", "privateKey")
);

console.log(distPath);
Client.scp(
  distPath,
  {
    port: 22022,
    host: "120.132.9.4",
    path: "/app/fontend",
    username: "root",
    // privateKey
    password: "xdjr0lxGu"
  },
  err => {
    console.log(err);
  }
);
