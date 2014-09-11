var moduloStatsShow = angular.module('statsShow', []);
moduloStatsShow.filter('nombre', function(){
    return function(nombre) {
        return 'Stats de ' + nombre;
    };
});
