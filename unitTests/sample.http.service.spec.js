describe('sampleHttp service tests', function () {
    'use strict';

    var $httpBackend, sampleHttp;

    beforeEach(module('sampleModule'));

    beforeEach(inject(function (_$httpBackend_, _sampleHttp_) {
        $httpBackend = _$httpBackend_;
        sampleHttp = _sampleHttp_;
    }));

    afterEach(function(){
       // then
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return data', function(){
       // given
        var data = [];
        $httpBackend.expectGET('/some-url').respond([1,2,3]);
        // when
        sampleHttp.readData().then(function(response){
            angular.copy(response.data, data);
        });
        $httpBackend.flush();
        // then
        expect(data).toEqual([1,2,3]);
    });
});