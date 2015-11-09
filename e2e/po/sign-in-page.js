function SignInPage (){}

SignInPage.prototype.open = function(url){
    browser.get(url);
};

SignInPage.prototype.enterUserName = function(text){
    element(by.model('SIC.credentials.username')).sendKeys(text);
};

SignInPage.prototype.enterPassword = function(pass){
    element(by.model('SIC.credentials.password')).sendKeys(pass);
};

SignInPage.prototype.signIn = function(){
    element(by.buttonText('Sign In')).click();
};

module.exports = SignInPage;