describe('sampleData service tests', function () {
    'use strict';

    var sampleData;

    beforeEach(module('sampleModule'));
    beforeEach(inject(function (_sampleData_) {
        sampleData = _sampleData_;
    }));

    it('should return the current data', function () {
        // given
        var data = [];
        // when
        angular.copy(sampleData.getCurrent(), data);
        // then
        expect(data.length).toBe(0);
    });

    it('should query data', function () {
        // given
        var data = [];
        // when
        sampleData.fetchData();
        angular.copy(sampleData.getCurrent(), data);
        // then
        expect(data.length).toBe(1);
        expect(data[0]).toBe('abc');
    });
});
