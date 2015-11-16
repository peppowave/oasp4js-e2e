describe('SampleController tests', function () {
    'use strict';

    var $scope, locationMock = {
        path: jasmine.createSpy('location.path.spy')
    };

    beforeEach(module('sampleModule'));
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('SampleController', {$scope: $scope, $location: locationMock});
    }));

    it('should return 1 for 0!', function () {
        expect($scope.factorial(0)).toBe(1);
    });

    it('should return 120 for 5!', function(){
        expect($scope.factorial(5)).toBe(120);
    });

    it('should return 24 for 4!', function(){
        expect($scope.factorial(4)).toBe(24);
    });

    it('should return 1 fro 1!', function(){
        expect($scope.factorial(1)).toBe(1);
    });

    it('should throw exception for negative numbers', function(){
       expect(function(){
           $scope.factorial(-1);
       }).toThrow(new Error('incorrect argument'));
    });

    it('should throw exception for not-a-number args', function(){
        expect(function(){
            $scope.factorial('not-a-number');
        }).toThrow(new Error('incorrect argument'));
    });

    it('should call location.path on goToDialog function call', function(){
        // given when
        $scope.goToDialog();
        // then
        expect(locationMock.path).toHaveBeenCalledWith('/dialog-a');
    });

    it('should call location.path on goToDialog function call', inject(function($controller, $location){
        // given
        spyOn($location, 'path');
        // when
        $controller('SampleController', {$scope: $scope});
        $scope.goToDialog();
        // then
        expect($location.path).toHaveBeenCalledWith('/dialog-a');
    }));
});