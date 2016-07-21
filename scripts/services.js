angular.module('services', [])
    .factory('devicesService', function ($rootScope,$http,$q) {
           
	    return {
			getAll: getAll,
			addDevice:addDevice
		}
       
	    function getAll (userId) {	
			    var input = {
				  userId : userId
			    }
			  
			    var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post('http://correo.cmkx.icrt.cu:3000/visor-coordenadas/web/index.php?r=device/cargar',input)
				.success(function(result) {
					defered.resolve(result.data);
				})
				.error(function(err) {
					defered.reject(err)
				});

               return promise;			   
       }
	   
 	   function addDevice (input) {            
                var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post('http://correo.cmkx.icrt.cu:3000/visor-coordenadas/web/index.php?r=device/create', input)
				.success(function(result) {
					defered.resolve(result);
				})
				.error(function(err) {
					defered.reject(err)
				});
               return promise;
        }
	});