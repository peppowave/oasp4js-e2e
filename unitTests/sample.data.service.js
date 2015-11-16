angular.module('sampleModule').factory('sampleData', function (sampleHttp) {
    'use strict';

    return {
        getData: function(){
            return sampleHttp.readData();
        }
    };
});
