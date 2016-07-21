'use strict';

(function () {
    angular.module('angularwebApp')
        .controller('MainCtrl', ['$scope', 'devicesService', 'blockUI', '$auth', '$location',
            function ($scope, devicesService, blockUI, $auth, $location) {

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
                    devicesService.getAll(userId)
                        .then(function (data) {
                            $scope.elementos = data;
                            blockUI.stop();
                        })
                        .catch(function (err) {
                            blockUI.stop();
                        });
                }
             
                /* Activar o desactivar */
                $scope.activateOrDesactivate = function ($event, item) {
                    if (!item.active) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                    console.info(item);
                }
                
                /* Ver en el mapa */
                $scope.viewOnMap = function ($event, item) {
                    devicesService.selected = $item;
                    
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
                                alert('Se adiciono correctamente');
                            }
                        })
                        .catch(function (err) {
                            blockUI.stop();
                        });
                }
            }
        ]);
})();