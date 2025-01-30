(function () {
    'use strict';
    $dyn.ui.defaults.NAMNavigationMenuCtrl = {};
    $dyn.controls.NAMNavigationMenuCtrl = function (data, element) {
        var self = this;
        $dyn.ui.Control.apply(self, arguments);
        $dyn.ui.applyDefaults(self, data, $dyn.ui.defaults.NAMNavigationMenuCtrl);
    }
    $dyn.controls.NAMNavigationMenuCtrl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {});
})();