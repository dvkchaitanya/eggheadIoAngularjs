angular.module("ngFilterApp",[])
.factory('Avengers',function(){
	var Avengers = {};
	Avengers.cast =[ 
		{ name: 'hero1',
			character: 'character1'
		},{ name: 'hero2',
		character: 'character2'
		}
	];
	return Avengers;
}).controller("AvengerCntrl",['$scope','Avengers',function($scope,Avengers){
	$scope.avengers= Avengers;
}]);
angular.bootstrap(document.getElementById("ngFilterWithNgRepeatDiv"),['ngFilterApp'])
