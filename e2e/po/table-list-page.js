var config = {
    nextButtonAction: '[ng-click="selectPage(page + 1, $event)"]',
    tableRepeater: 'gridDisplayItem in filteredItems'
};

function TableListPage() {
}

TableListPage.prototype.nextPage = function(){
   element(by.css(config.nextButtonAction)).click();
};

TableListPage.prototype.getNumOfTables = function(){
    return element.all(by.repeater(config.tableRepeater)).count();
};

module.exports = TableListPage;
