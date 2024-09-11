sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * 
     */

    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("pruebapp.sapui5.controller.HelloPanel", {

            onInit: function () {

            },
            onShowHello: function () {
                //read text from i18n model
                var onBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = onBundle.getText("hellowMsg", [sRecipient])
                MessageToast.show(sMsg);
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();

            },
            
        });
    });