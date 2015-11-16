angular.module('sampleModule').controller('SampleController', function ($scope) {
    'use strict';

    $scope.factorial = function (n) {
        if (n < 0 || isNaN(n)){
            throw new Error('incorrect argument');
        }
        if (n === 0) {
            return 1;
        }
        else {
            return n * $scope.factorial(n - 1);
        }
    };

});