sap.ui.define([
    'sap/ui/core/UIComponent',
    "pruebapp/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],

    /**
    * @param {typeof sap.ui.core.UIComponent} UIComponent
    */

    function (UIComponent, Models, ResourceModel, HelloDialog) {
        'use strict';

        return UIComponent.extend("pruebapp.sapui5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                //set date model on the view
                this.setModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "pruebapp.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            openHelloDialog: function () {
                this._helloDialog.open();
            },
            
        });


    });