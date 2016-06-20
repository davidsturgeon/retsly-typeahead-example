myApp.controller('MainCtrl', function ($http) {
	var scope = this;
	scope.searchTerm = '';
	scope.listings = '';
	scope.loading = false; 

 	scope.searchForListing = function(){
 		scope.loading = true; 
 		scope.error = false;
 		$http.get('https://rets.io/api/v1/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&address=' + scope.searchTerm )
	  .then(
	   function successCallback(response) {
	   		scope.loading = false;
	   		scope.listings = response.data.bundle;
	     }, 
	   	function errorCallback(response) {
	   		scope.loading = false;
	        scope.error = true;
	     }
	   );
 	}


});
