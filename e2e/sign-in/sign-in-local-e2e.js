var SignInPage = require('../po/sign-in-page');

describe('sign in page', function () {

    var signInPage;

    beforeEach(function(){
        signInPage = new SignInPage();
    });

    it('should open sign in page, enter credentials and sign in', function() {

        signInPage.open();
        signInPage.enterUserName('waiter');
        signInPage.enterPassword('waiter');
        signInPage.signIn();

        browser.wait(function() {
            return browser.getCurrentUrl().then(function(url) {
                return /table-mgmt\/table-search/.test(url);
            });
        }, 2000, 'URL hasn\'t changed');
    });
});