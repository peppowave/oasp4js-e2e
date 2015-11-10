var config = {
    appUrl: 'http://localhost:9000/#/main/sign-in',
    userNameModel: 'SIC.credentials.username',
    passwordModel: 'SIC.credentials.password',
    signInButtonText: 'Sign In',
    signOutButtonText: 'Log off'
};

function SignInPage() {
}

SignInPage.prototype.open = function () {
    browser.get(config.appUrl);
};

SignInPage.prototype.enterUserName = function (text) {
    element(by.model(config.userNameModel)).sendKeys(text);
};

SignInPage.prototype.enterPassword = function (pass) {
    element(by.model(config.passwordModel)).sendKeys(pass);
};

SignInPage.prototype.clickSignInButton = function () {
    element(by.buttonText(config.signInButtonText)).click();
};

SignInPage.prototype.signIn = function(userName, pass){
    this.open();
    this.enterUserName(userName);
    this.enterPassword(pass);
    this.clickSignInButton();
};

SignInPage.prototype.signOut = function(){
    element(by.buttonText(config.signOutButtonText)).click();
};

module.exports = SignInPage;