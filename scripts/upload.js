const { exec } = require("child_process");
const Client = require("scp2");
const fs = require("fs");
const path = require("path");
const distPath = path.join(process.cwd(), "integralManage") + "/";
const privateKey = fs.readFileSync(
  path.join(process.cwd(), "scripts", "privateKey")
);

exec(`yarn build`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error:\n${error}`.red);
    return;
  }
  // console.log(stderr);
  // if (!!stderr) {
  //   console.error(`exec stderr:\n${stderr}`.red);
  //   return;
  // }

  console.log("stdout", stderr);
  console.log("stdout", stdout);
  console.log(`编译成功`);
  Client.scp(
    distPath,
    {
      port: 22,
      host: "120.132.9.4",
      path: "/app/fontend",
      username: "root",
      // privateKey
      password: "xdjr0lxGu"
    },
    err => {
      console.log("have error:", err);
    }
  );
});
