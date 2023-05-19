/* eslint-env node */
const FtpDeploy = require("ftp-deploy");

const ftpDeploy = new FtpDeploy();

const defaultConfig = {
  remoteRoot: "/",
  include: ["*", "**/*", ".htaccess"],
  deleteRemote: true,
  forcePasv: true,
  sftp: false,
};

function deploy({ user, password, host, port = 21, dirname, isHost = false }) {
  if (!user || !password || !host) {
    throw new Error("User, password and host is required fields");
  }

  const config = {
    user,
    password,
    host,
    port,
    localRoot: `${dirname}/dist`,
    ...defaultConfig,
  };

  if (!isHost) {
    config.exclude = ["index.html"];
  }

  return ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => {
      throw new Error(err);
    });
}

const user = process.env.FTP_USER;
const password = process.env.FTP_PASSWORD;
const host = process.env.FTP_HOST;
const port = process.env.FTP_PORT || 21;

deploy({
  user,
  password,
  host,
  port,
  dirname: __dirname,
  isHost: true,
}).then();
