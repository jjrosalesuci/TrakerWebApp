'use strict';

(function() {

angular.module('angularwebApp')
.controller("SignUpController", SignUpController)
.controller("LoginController", LoginController)
.controller("LogoutController", LogoutController);

function SignUpController($auth, $location) {  
    var vm = this;
    this.signup = function() {
        $auth.signup({
            user     : vm.user,
            email    : vm.email,
            password : vm.password
        })
        .then(function() {
            // Si se ha registrado correctamente,
            // Podemos redirigirle a otra parte
            $location.path("/deviceList");
        })
        .catch(function(response) {
            // Si ha habido errores, llegaremos a esta función
        });
    }
}

function LoginController($auth, $location) {  
    var vm = this;
    this.login = function(){
        $auth.login({
            email: vm.user,
            password: vm.password
        })
        .then(function(){
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            $location.path("/deviceList")
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
        });
    }
}

function LogoutController($auth, $location) {  
    $auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $location.path("/")
        });
}
 
  })();