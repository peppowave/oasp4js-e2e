angular.module('sampleModule').factory('sampleHttp', function($http){

    return{
        readData: function(){
            return $http.get('/some-url');
        }
    };
});