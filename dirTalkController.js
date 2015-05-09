angular.module("dirTalkWithControlApp",[])
.directive("entertalk",function(){
  return function(scope,element,attrs){
	element.bind("mouseenter",function(){
	  scope.$apply(attrs.entertalk);
	})
	// element.bind("mouseleave",function(){
	//   scope.$apply(attrs.entertalk);
	// })
  }
}).controller("dirTalkWithControlAppCntrl",['$scope', function($scope){
  $scope.loadMoreTweets = function(){
	alert("load More tweets");
  }
  $scope.deleteMoreTweets = function(){
	  alert("delete More tweets");
  }
}])

angular.bootstrap(document.getElementById("rollMoreTweetsDiv"),['dirTalkWithControlApp'])
