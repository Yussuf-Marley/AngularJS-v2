// **
// * Cytonn Technologies
// *
// * @author: Joseph Mahugu <jmahugu@cytonn.com>
// *
// * Project: AngularJs filter
// *
var myApp = angular
            .module('myApp', [])
            //creating a filter named gender
            .filter('gender', function(){
              return function(gender){
                switch (gender) {
                  case 1:
                    return 'Male';
                  case 2:
                    return 'Female';
                  case 3:
                    return  'Unknown';
                }
              }
            })

            .controller('myController', function($scope){

            var employees = [
              {name: "Sam", gender:1, age: 24},
              {name: "Ben", gender:1, age: 25},
              {name: "Chi", gender:2, age: 22},
              {name: "Dan", gender:1, age: 25},
              {name: "Will", gender:1, age: 26}
            ];
            $scope.employees = employees;
          });
