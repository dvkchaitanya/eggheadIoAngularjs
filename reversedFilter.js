angular.module("appWithService")
.filter("reverse",function(message){
	return function(text){
		return message.split("").reverse().join("");
	}
});
angular.bootstrap(document.getElementById("datasharingUsingServiceDiv"),['appWithService']);
