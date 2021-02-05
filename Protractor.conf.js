var propertiesReader = require('properties-reader');
var prop = propertiesReader('./properties/prop.properties');



exports.config = {
    seleniumAddress: prop.get('seleniumAddress'),
    getPageTimeout:prop.get('pageTimeout'),
    allScriptsTimeout:prop.get('scriptTimeout'),

   //   directConnect = true,
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {

        'browserName': 'chrome',
    // },{
    //     'browserName': 'firefox',
    },

  //  plugins: [{
       // package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            // read the options part for more options
            
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        },
    
    // maxSessions: 2,

    specs: [prop.get('featurePath')],

    cucumberOpts: {
        tags: false,
        format: 'json:cucumber_report.json',
        // require step definitions
        require: [
           prop.get('stepsPath')  // accepts a glob
        ]
    }
};
