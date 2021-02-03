var { Given, When, Then } = require('@cucumber/cucumber');

Given(/^user navigates to Transportal website$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("@Given --- User Navigates to Transportal Page");
});


When(/^user validates the home page Title$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("@When --- User Validates to Transportal HomePage");
});

Then(/^user enters "([^"]*)" username$/, function (username) {
    // Write code here that turns the phrase above into concrete actions
    return console.log("@Then --- User Entered "+username+" User name");
});


Then(/^user enters "([^"]*)" password$/, function (password) {
    // Write code here that turns the phrase above into concrete actions
    return console.log("@Then --- User Entered "+password+" password");
});

Then(/^user should "([^"]*)" successfully logged in$/, function (loginType) {
    // Write code here that turns the phrase above into concrete actions
    return console.log("@Then --- User should "+loginType+" successfully logged in");
});