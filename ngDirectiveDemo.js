angular.module("ngDirectiveApp",[])
.directive("samplediv",function(){
	return {
		restrict: "E",
		template:"<div>Here I am to save the day</div>"
	}
}).directive("anothersamplediv",function(){
	return {
		restrict: "A",
		link: function(){
			alert("I am also working boss")
		}
	}
}).directive("lastsamplediv",function(){
	return {
		restrict: "A",
		link: function(){
			alert("I will work faster")
		}
	}
}).directive("enter",function(){
	return function(scope,element,attrs){
		element.bind("mouseenter",function(){
			console.log("mouse entered")
			alert("I am from enter attribute: "+attrs.enter);
		});
	}
}).directive("leave",function(){
	return function(scope,element){
		element.bind("mouseleave",function(){
			console.log("mouse leave")
		});
	}
});
angular.bootstrap(document.getElementById("ngDirectiveDiv"),['ngDirectiveApp'])
