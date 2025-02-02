(function () {
    'use strict';
    $dyn.ui.defaults.NAMNavigationMenuCtrl = {};
    $dyn.controls.NAMNavigationMenuCtrl = function (data, element) {
        var self = this;
        $dyn.ui.Control.apply(self, arguments);
        $dyn.ui.applyDefaults(self, data, $dyn.ui.defaults.NAMNavigationMenuCtrl);
        $(element).css("background-color", "yellow");
        var m_bSendCommandToJavaScript = false;
        $dyn.observe(this.SendCommandToJavaScript, function (_dtParam) {
            if (m_bSendCommandToJavaScript == true) {
                alert("SendCommandToJavaScript Invoked");
            }
            m_bSendCommandToJavaScript = true;
        });
    }
    $dyn.controls.NAMNavigationMenuCtrl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {});
})();