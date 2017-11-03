(function () {
    'use strict';

    var main = {};

    init();

    function init() {
        viewScope.run = easyQAMain;
    }

    function easyQAMain() {
        console.log('aqui');
    }

})();
