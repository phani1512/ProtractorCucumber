var { Given, When, Then, After } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var propertiesReader = require('properties-reader');
var or = propertiesReader('./properties/or.properties');

chai.use(chaiAsPromised)
var expect = chai.expect;

After(function (scenario, done) {
    const self = this;
    console.log('in after block')
    if (scenario.result.status === 'failed') {
        console.log('in after block inside')

        browser.takeScreenshot().then(function (stream) {
            let decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');
            console.log('screenshot successful');
        }).then(function () {
            done();
        });
    } else {
        done();
    }
});

Given(/^I go to Transportal website "([^"]*)"$/, { timeout: 100000 }, function (site) {
    return browser.get(site);
    return console.log("@Given --- User Navigates to Transportal Page");
});


When(/^user validates the home page Title "([^"]*)"$/, function (title) {
    var actualTitle = browser.getTitle();
    return expect(actualTitle).to.eventually.equal(title);
    return console.log("@When --- User Validates to Transportal HomePage");
});

Then(/^user enters "([^"]*)" username$/, function (username) {
    return element(by.css(or.get('userName_css'))).sendKeys(username)
    return console.log("@Then --- User Entered " + username + " User name");
});


Then(/^user enters "([^"]*)" password$/, function (password) {
    return element(by.css(or.get('password_css'))).sendKeys(password)
    return console.log("@Then --- User Entered " + password + " password");
});

Then(/^user should "([^"]*)" click on login$/, function (loginType) {
    return element(by.buttonText('LOGIN')).click()
    return console.log("@Then --- User should " + loginType + " successfully logged in");
});
