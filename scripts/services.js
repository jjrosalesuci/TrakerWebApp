angular.module('services', [])
    .factory('devicesService', function ($rootScope,$http,$q) {        
        this.selected = null;         
        $rootScope.baseUrl = 'http://192.168.1.44/TrakerBackEnd/web/';      
	    return {
			getAll: getAll,
			addDevice:addDevice,
            activateOrDesactivate:activateOrDesactivate,
            setSelected:setSelected,
            getSelected:getSelected,
            updateDevice:updateDevice,
            deleteDevice:deleteDevice
		}
        
        function setSelected(value)
        {
            this.selected = value;
        }
        
        function getSelected(value)
        {
           return this.selected;
        }
       
	    function getAll (input) {
                       
			    var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post($rootScope.baseUrl + 'index.php?r=device/cargar',input)
				.success(function(result) {
					defered.resolve(result.data);
				})
				.error(function(err) {
					defered.reject(err)
				});

                return promise;   
       }
       
       function activateOrDesactivate (input)
       {
               var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post($rootScope.baseUrl+'index.php?r=device/activate', input)
				.success(function(result) {
					defered.resolve(result);
				})
				.error(function(err) {
					defered.reject(err)
				});
               return promise;
       }
	   
 	   function addDevice (input) {            
                var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post($rootScope.baseUrl+'index.php?r=device/create', input)
				.success(function(result) {
					defered.resolve(result);
				})
				.error(function(err) {
					defered.reject(err)
				});
               return promise;
        }
                
        function updateDevice (input) {            
                var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post($rootScope.baseUrl+'index.php?r=device/update', input)
				.success(function(result) {
					defered.resolve(result);
				})
				.error(function(err) {
					defered.reject(err)
				});
                
               return promise;
        }
        
        function deleteDevice(input){
                var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post($rootScope.baseUrl+'index.php?r=device/delete', input)
				.success(function(result) {
					defered.resolve(result);
				})
				.error(function(err) {
					defered.reject(err)
				});
                
               return promise;     
        }
        
        
        function GenericCall(uri,input){
            
                var defered = $q.defer();
			    var promise = defered.promise;	

			    $http.post(uri, input)
				.success(function(result) {
					defered.resolve(result);
				})
				.error(function(err) {
					defered.reject(err)
				});
                
               return promise; 
        }
        
        
	});