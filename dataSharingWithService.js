angular.module("appWithService",[])
.factory('Data',function(){
	return {message: 'message from service'};
}).controller('FirstController',['$scope','Data',function($scope,Data){
	$scope.data = Data;
}]).controller('SecondController',['$scope','Data',function($scope,Data){
	$scope.data = Data;

	$scope.reversedMessage = function( message ){
		return message.split("").reverse().join("");
	};
}]).filter("reverse",function(Data){
	return function(text){
		return text.split("").reverse().join("") + Data.message;
	}
});

angular.bootstrap(document.getElementById("datasharingUsingServiceDiv"),['appWithService'])
