const fs = require('fs-extra')
const paths = require('../../config/paths')

const fromSetupProxyPath = `${paths.scripts}/setupProxy`
const toSetupProxyPath = `${paths.packages}/merp/src`

const accountInfoPath = `${paths.packages}/merp/public`
// paths.appPublic

// 创建setProxy.js
if (!fs.existsSync(`${fromSetupProxyPath}/.setupProxy.js`)) {
  console.log(
    `=============${fromSetupProxyPath}/.setupProxy.js不存在, 创建setupProxy失败=============`
  )
} else if (!fs.existsSync(`${toSetupProxyPath}/setupProxy.js`)) {
  console.log(`=============创建${toSetupProxyPath}/setupProxy.js=============`)
  fs.copyFileSync(`${fromSetupProxyPath}/.setupProxy.js`, `${toSetupProxyPath}/setupProxy.js`)
} else {
  console.log(`=============${toSetupProxyPath}/setupProxy.js已存在=============`)
}
// 创建setProxy.config.json
if (!fs.existsSync(`${fromSetupProxyPath}/.setupProxy.config.jsonc`)) {
  console.log(`=============${fromSetupProxyPath}/.setupProxy.config.jsonc不存在=============`)
} else if (!fs.existsSync(`${accountInfoPath}/setupProxy.config.jsonc`)) {
  console.log(`=============创建${accountInfoPath}/setupProxy.config.jsonc=============`)
  fs.copyFileSync(
    `${fromSetupProxyPath}/.setupProxy.config.jsonc`,
    `${accountInfoPath}/setupProxy.config.jsonc`
  )
} else {
  console.log(`=============${accountInfoPath}/setupProxy.config.jsonc已存在=============`)
}
