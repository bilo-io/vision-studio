const { getBranch } = require('./git-utils')
const fs = require('fs')
const pkg = require('../package.json')

console.log(`
/scripts/auto-bump.js:
-----------------
- packageName: ${pkg.name}
- appVersion: ${pkg.version}
-----------------
`)

let branchTypeMatched = false

const checkVersionFor = (branchType, branchName) => {
  if (branchTypeMatched) {
    return
  }

  console.log(`- checking: ${branchType}`)

  if (branchName.includes(branchType)) {
    const version = branchName?.split(branchType)?.[1]
    branchTypeMatched = true

    console.log(`- branch version: ${version}`)
    console.log(`- package version: ${pkg.version}`)

    if (version === pkg.version) {
      console.log('- versions match')
    } else {
      console.log('- versions don\'t match')
      console.log(`===> NEW VERSION: ${version}}`)
      // TODO: update package.json
      pkg.version = version
      fs.writeFileSync('../package.json', JSON.stringify(pkg, null, 4))
    }
  } else {
    console.log('---> no match')
  }
}
const autoBump = async () => {
  const branchName = await getBranch()

  console.log(`- branchName: ${branchName}
    `)

  checkVersionFor('hotfix/', branchName)
  checkVersionFor('release/', branchName)
  // checkVersionFor('feature/', branchName);
}

autoBump()
