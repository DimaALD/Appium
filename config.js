exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    capabilities :{
        browserName : 'chrome',
        platformName: 'Android',
        deviceName : 'device'
    },
    framework : 'mocha',
    mochaOpts: { 
        timeout: 30000
      },
    specs : ['test/specs.js'],
    onPrepare : () => {
        browser.waitForAngularEnabled(false)
    }
}