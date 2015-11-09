describe('sign in page', function () {

    it('should open sign in page, enter credentials and sign in', function() {
        browser.get('http://localhost:9000/#/main/sign-in');
        element(by.model('SIC.credentials.username')).sendKeys('waiter');
        element(by.model('SIC.credentials.password')).sendKeys('waiter');
        element(by.buttonText('Sign In')).click();

        browser.wait(function() {
            return browser.getCurrentUrl().then(function(url) {
                return /table-mgmt\/table-search/.test(url);
            });
        }, 2000, 'URL hasn\'t changed');
    });
});