describe('sampleData service tests', function () {
    'use strict';

    var sampleData;

    beforeEach(module('sampleModule'));
    beforeEach(inject(function (_sampleData_) {
        sampleData = _sampleData_;
    }));

    it('should return data', function () {
        // given
        var data = [];
        // when
        angular.copy(sampleData.getData(), data);
        // then
        expect(data.length).toBe(1);
        expect(data[0]).toBe('abc');
    });
});
