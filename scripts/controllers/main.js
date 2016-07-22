'use strict';

(function () {
    angular.module('angularwebApp')
        .controller('MainCtrl', ['$scope', 'devicesService', 'blockUI', '$auth', '$location',
            function ($scope, devicesService, blockUI, $auth, $location) {

                $scope.selectedItem = null;
                $scope.devicesService = devicesService;
                
                $scope.isAuthenticated = function () {
                    return $auth.isAuthenticated();
                }; 
            		
                /* Lista de los dispositivos */
                $scope.elementos = [];             
                /* Modelo del formulario para el adicionar */
                $scope.formData = {};
                /*Cargar la lista de disposivos */
                $scope.loadList = function () {
                        var userId = 3;
                        blockUI.start('Cargando..');
                        
                        var input = {
                        userId : userId
                        }
                
                        devicesService.getAll(input)
                        .then(function (data) {
                            $scope.elementos = data;
                            blockUI.stop();
                        })
                        .catch(function (err) {
                            blockUI.stop();
                        });                        
                       $scope.formData = {};
                }
                
                $scope.loadSelection = function(){                    
                     $scope.formData = devicesService.getSelected();                     
                }
                
             
                /* Activar o desactivar */
                $scope.activateOrDesactivate = function ($event, item) {                    
                    if (!item.active) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }                                 
                    var userId = 3;
                    var input = {
                        id     : item.id,
                        userId : userId,
                        active : item.active
                    }                    
                    blockUI.start('Cargando..');
                    devicesService.activateOrDesactivate(input)
                    .then(function (data) {
                         blockUI.stop();
                    })
                    .catch(function (err) {
                         blockUI.stop();
                    });                                   
                }
                
                /* Editar */
                $scope.editDevice = function ($event, item) {
                    $scope.selectedItem = item;
                    devicesService.setSelected(item);
                    $location.path("/deviceEdit")
                }
                
                /* Ver en el mapa */
                $scope.viewOnMap = function ($event, item) {
                    $scope.selectedItem = item;
                    devicesService.setSelected(item);
                    $location.path("/devicePosition")
                }
                
              
                /*Adicionar Dispositivo*/
                $scope.submitFormAddDevice = function (formData) {
                    var userId = 3;
                    var input = {
                        userId: userId,
                        code: formData.code,
                        registration: formData.registration,
                        brand: formData.brand,
                        model: formData.model
                    }

                    blockUI.start('Adicionando..');
                    devicesService.addDevice(input)
                        .then(function (result) {
                            blockUI.stop();
                            if (result.success) {
                               $location.path("/deviceList")
                            }
                        })
                        .catch(function (err) {
                            blockUI.stop();
                        });
                }
                
                /* Modificar dispositivoo */
                
               $scope.submitFormEditDevice = function (formData) {
                    var userId = 3;
                    var input = {
                        id: formData.id,
                        userId: userId,
                        code: formData.code,
                        registration: formData.registration,
                        brand: formData.brand,
                        model: formData.model
                    }

                    blockUI.start('Modificando..');
                    devicesService.updateDevice(input)
                        .then(function (result) {
                            blockUI.stop();
                            if (result.success) {
                               $location.path("/deviceList")
                            }
                        })
                        .catch(function (err) {
                            blockUI.stop();
                        });
                }
                
                
                  /* Modificar dispositivoo */
                
               $scope.deleteDevice = function ($event, item) {                   
                    var r = confirm("Desea eliminar el dispositivo");
                    if (r == true) {                                             
                            var userId = 3;
                            var input = {
                                id: item.id,
                                userId: userId                              
                            }

                            blockUI.start('Eliminando dispositivo..');
                            devicesService.deleteDevice(input)
                                .then(function (result) {
                                    blockUI.stop();
                                    if (result.success) {
                                        $scope.loadList();
                                      $location.path("/deviceList");
                                      
                                    }
                                 })
                                .catch(function (err) {
                                    blockUI.stop();
                                });
                       
                    }                    
               }
                
               
                                    
                
            }
        ]);
})();