(function () {
    'use strict';
    $dyn.ui.defaults.NAMNavigationMenuCtrl = {};
    $dyn.controls.NAMNavigationMenuCtrl = function (data, element) {
        var self = this;
        $dyn.ui.Control.apply(self, arguments);
        $dyn.ui.applyDefaults(self, data, $dyn.ui.defaults.NAMNavigationMenuCtrl);
        $(element).css("border", "1px solid black");
        $(element).css("position", "relative");
        $dyn.observe(this.BackgroundColor, function (_iParam) {
            switch (_iParam) {
                case 0: //Gray
                    $(element).css("background-color", "#EAEAEA");
                    break;
                case 1: //Light blue
                    $(element).css("background-color", "#C7E0F4");
                    break;
                case 2: //Blue
                    $(element).css("background-color", "#002050");
                    break;
                case 3: //Black
                    $(element).css("background-color", "#000000");
                    break;
            }
        });    
        GlobalObj.m_OnClick = function () {
            var oSource = event.srcElement;
            if (oSource.id == "") {
                oSource = oSource.parentElement;
            }
            var oParams = { _sMenu: oSource.id };
            $dyn.callFunction(self.OpenForm, self, oParams);
        }
        self.m_AddTilesToControl = function (_sJSON) {
            var oTiles = $.parseJSON(_sJSON, true);
            var i = 0;
            for (i = 0; i <= oTiles.TileList.length - 1; i++) {
                var oTile = oTiles.TileList[i];
                var sClass = "tile-big-dark";
                var sSpanClass = "tile-text-big";
                switch (oTile.TileType) {
                    case 1:
                        sClass = "tile-big-dark";
                        sSpanClass = "tile-text-big";
                        break;
                    case 2:
                        sClass = "tile-big-light";
                        sSpanClass = "tile-text-big";
                        break;
                    case 3:
                        sClass = "tile-small-dark";
                        sSpanClass = "tile-text-small";
                        break;
                    case 4:
                        sClass = "tile-small-light";
                        sSpanClass = "tile-text-small";
                        break;
                }
                $(element).append("<div id='" + oTile.Menu + "' onclick='GlobalObj.m_OnClick();' class='" + sClass + "' style='left:" + oTile.Left.toString() + "px;top:" + oTile.Top.toString() + "px;'><span class='" + sSpanClass + "'>" + oTile.Caption + "</span></div>");
                console.log("passing");
            }
        }
        var oParams = {};
        $dyn.callFunction(self.GetTiles, self, oParams, self.m_AddTilesToControl);
    }
    $dyn.controls.NAMNavigationMenuCtrl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {});
})();

GlobalObj = {};
(function () {
})();