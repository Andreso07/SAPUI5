sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.core.Fragment} Fragment
     */

    function (Controller, MessageToast, Fragment) {
        "use strict";

        return Controller.extend("pruebapp.sapui5.controller.App", {

            onInit: function() {
              
            },
            onShowHello: function () {
                
            },
            onOpenDialog: function () {
                

            },
            onCloseDialog: function() {
                this.byId("idDialog").close();
            },

            onOpenDialogHeader: function () {
                this.getOwnerComponent().openHelloDialog();
            }

        });
    }

);