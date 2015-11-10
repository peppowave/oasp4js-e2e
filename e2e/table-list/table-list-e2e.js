var SignInPage = require('../po/sign-in-page');
var TableListPage = require('../po/table-list-page');

describe('table list tests', function(){

    var signInPage, tableListPage;

    beforeEach(function(){
        signInPage = new SignInPage();
        tableListPage = new TableListPage();

        signInPage.signIn('waiter', 'waiter');
    });

    afterEach(function(){
        signInPage.signOut();
    });

    it('should move to the next page', function(){
        expect(tableListPage.getNumOfTables()).toBe(4);
        // when
        tableListPage.nextPage();
        // then
       expect(tableListPage.getNumOfTables()).toBe(1);
    });

});
