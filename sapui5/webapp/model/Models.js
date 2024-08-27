sap.ui.define([
    "sap/ui/model/json/JSONModel"
],

    /**
     * 
     * @param {typeof sap/ui/model/JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";

        return {
            createRecipient: function () {
                var onData = {
                    recipient: {
                        name: "World!"
                    }
                };

                return new JSONModel(onData);
               
            }
        }


    }
);