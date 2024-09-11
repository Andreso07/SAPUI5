sap.ui.define([
    'sap/ui/base/ManagedObject',
    'sap/ui/core/Fragment'
],
    /**
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject
     * @param {typeof sap.ui.core.Fragment} Fragment 
     */
    function (ManagedObject, Fragment) {
        'use strict';

        return ManagedObject.extend("pruebapp.sapui5.controller.HelloDialog", {

            constructor: function (oView) {
                this.oView = oView;
            },

            exit: function () {
                delete this.oView;
            },

            open: function () {
                const oView = this.oView;

                //create dialog lazily
                if (!oView.byId("idDialog")) {
                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("idDialog").close();
                        }
                    };

                    //load asynctonous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "pruebapp.sapui5.view.HelloDialog",
                        controller: oFragmentController
                    }).then(function (onDialog) {
                        oView.addDependent(onDialog);
                        onDialog.open();
                    });
                } else {
                    oView.byId("idDialog").open();
                }
            }
        });
    });