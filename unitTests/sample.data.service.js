angular.module('sampleModule').factory('sampleData', function () {
    'use strict';

    var data = [];

    return {
        getCurrent: function () {
            return data;
        },
        fetchData: function(){
            data.push('abc');
        }
    };
});
