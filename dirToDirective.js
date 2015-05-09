angular.module('dirToDirApp', [])
// dirToDirApp.directive("superherodir")
.directive('superherodir', function() {
	return{
		restrict: "E",
		scope:{ },
		controller:  function($scope) {
			$scope.abilities=[];
			this.addStrength = function(){
				$scope.abilities.push("strength");
			}
			this.addSpeed = function(){
				$scope.abilities.push("Speed");
			}
			this.addFlight = function(){
				$scope.abilities.push("Flight");
			}
		},	
		link: function(scope, element, attrsctrl) {
			element.bind("mouseenter",function(){
				console.log(scope.abilities);
			});
		}

	} 
}).directive('strength', function() {
	return {
		require: "superherodir",
		link: function(scope, element, attrs,superheroCtrl) {
			superheroCtrl.addStrength();
		}
	}
}).directive('speed', function() {
	return {
		require	:"superherodir",
		link:function(scope, element, attrs,superheroCtrl) {
			superheroCtrl.addSpeed();
		}
	} 
}).directive('flight', function() {
	return {
		require:"superherodir",
		link:	function(scope, element, attrs,superheroCtrl) {
			superheroCtrl.addFlight();
		}
		template: <div id="hello"></div> "
	}
}); 
angular.bootstrap(document.getElementById("dirToDirDiv"),["dirToDirApp"]);

