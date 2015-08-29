// For config options, refer to:
// https://github.com/Polymer/web-component-tester/blob/master/runner/config.js


// Most of the time you will want to rely on the WCT browser plugins to fill
// this in for you (e.g. via `--local`, `--sauce`, etc).
// Selenium: https://code.google.com/p/selenium/wiki/DesiredCapabilities
// Sauce:    https://docs.saucelabs.com/reference/test-configuration/



module.exports = {
    verbose: true,
    plugins: {
        local: {
            // browsers: ['chrome', 'firefox', 'safari']
            // browsers: ['default']
        },
        sauce: {
        	name: "switchboard-auth " + new Date().getTime(),
            disabled: false,
            // browsers: ['chrome', 'firefox', 'safari', 'ie']
            // browsers: ['default']
        }
    },
    // browsers: {

    // }
};