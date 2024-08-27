sap.ui.define([
    "sap/ui/core/UIComponent",
    "pruebapp/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap/ui/core/UIComponent} UIComponent 
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("pruebapp.sapui5.Component", {

            metadata: {
                manifest: "json"
                // "rootView": {
                //     "viewName" : "pruebapp.sapui5.view.App",
                //     "type" : "XML",
                //     "async" : true,
                //     "id" : "app"
                // }
            },

            init: function () {
                // call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on th eview
                this.setModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "pruebapp.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });