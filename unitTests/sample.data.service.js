angular.module('sampleModule').factory('sampleData', function () {
    'use strict';

    return {
        getData: function(){
            return ['abc'];
        }
    };
});
