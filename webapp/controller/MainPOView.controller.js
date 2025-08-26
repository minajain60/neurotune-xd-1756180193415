sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox",
  "sap/m/MessagePopover",
  "sap/m/MessageItem",
  "sap/ui/core/library",
  "sap/ui/core/UIComponent",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/core/util/Export",
  "sap/ui/core/util/ExportTypeCSV"
], function (Controller, JSONModel, MessageToast, MessageBox, MessagePopover, MessageItem, coreLibrary, UIComponent, Filter, FilterOperator, Export, ExportTypeCSV) {
  "use strict";
  
  // Shortcut for sap.ui.core.MessageType
  var MessageType = coreLibrary.MessageType;

  return Controller.extend("converted.mainpoview.controller.MainPOView", {
    /**
     * Called when the main PO view controller is initialized.
     * Initializes models, including mock data and message models.
     */
    onInit: function () {
      // Load mock data for main header
      var oMainHeaderModel = new JSONModel();
      oMainHeaderModel.loadData("model/mockData/mainHeader.json");
      this.getView().setModel(oMainHeaderModel, "mainHeader");
      
      // Load mock data for delivery invoice
      var oDeliveryInvoiceModel = new JSONModel();
      oDeliveryInvoiceModel.loadData("model/mockData/deliveryInvoice.json");
      this.getView().setModel(oDeliveryInvoiceModel, "deliveryInvoice");

      // Load mock data for items
      var oItemsModel = new JSONModel();
      oItemsModel.loadData("model/mockData/items.json");
      this.getView().setModel(oItemsModel, "items");
      
      // Load mock data for item details
      var oItemDetailsModel = new JSONModel();
      oItemDetailsModel.loadData("model/mockData/itemDetails.json");
      this.getView().setModel(oItemDetailsModel, "itemDetails");

      // Initialize message model for MessageArea/MessagePopover
      var oMessageModel = new JSONModel({
        messages: [
          {
            type: MessageType.Success,
            title: "System Information",
            description: "Application converted successfully, Use AI optimize for better result",
            subtitle: "Conversion complete",
            counter: 1
          }
        ]
      });
      this.getView().setModel(oMessageModel, "messages");
      
      // Set the initial selected tab key
      this.selectedTabKey = "DeliveryInvoiceTab";
    },
    
    /**
     * Called before the view is rendered.
     */
    onBeforeRendering: function() {
      // Prepare data before rendering
    },
    
    /**
     * Called after the view is rendered.
     */
    onAfterRendering: function() {
      // Adjust UI after rendering
    },
    
    /**
     * Event handler for toggling the document overview.
     */
    onDocumentOverviewToggle: function() {
      MessageToast.show("Document Overview toggled");
    },
    
    /**
     * Event handler for saving the document.
     */
    onSave: function() {
      MessageToast.show("Document saved");
    },
    
    /**
     * Event handler for sending an email.
     */
    onEmail: function() {
      MessageToast.show("Email sent");
    },
    
    /**
     * Event handler for searching.
     */
    onSearch: function() {
      MessageToast.show("Search initiated");
    },
    
    /**
     * Event handler for showing history.
     */
    onHistory: function() {
      MessageToast.show("History displayed");
    },
    
    /**
     * Event handler for showing settings.
     */
    onSettings: function() {
      MessageToast.show("Settings displayed");
    },
    
    /**
     * Event handler for print preview.
     */
    onPrintPreview: function() {
      MessageToast.show("Print preview displayed");
    },
    
    /**
     * Event handler for showing messages.
     */
    onShowMessages: function() {
      MessageToast.show("Messages displayed");
    },
    
    /**
     * Event handler for personal settings.
     */
    onPersonalSetting: function() {
      MessageToast.show("Personal settings displayed");
    },
    
    /**
     * Event handler for saving as template.
     */
    onSaveAsTemplate: function() {
      MessageToast.show("Saved as template");
    },
    
    /**
     * Event handler for loading from template.
     */
    onLoadFromTemplate: function() {
      MessageToast.show("Loaded from template");
    },
    
    /**
     * Event handler for creating a new item.
     */
    onNewItem: function() {
      MessageToast.show("New item created");
    },
    
    /**
     * Event handler for copying an item.
     */
    onCopyItem: function() {
      MessageToast.show("Item copied");
    },
    
    /**
     * Event handler for deleting an item.
     */
    onDeleteItem: function() {
      MessageToast.show("Item deleted");
    },
    
    /**
     * Event handler for locking an item.
     */
    onLockItem: function() {
      MessageToast.show("Item locked");
    },
    
    /**
     * Event handler for unlocking an item.
     */
    onUnlockItem: function() {
      MessageToast.show("Item unlocked");
    },
    
    /**
     * Event handler for showing item details.
     */
    onShowDetails: function() {
      MessageToast.show("Details displayed");
    },
    
    /**
     * Event handler for showing services.
     */
    onShowServices: function() {
      MessageToast.show("Services displayed");
    },
    
    /**
     * Event handler for showing services history.
     */
    onShowServicesHistory: function() {
      MessageToast.show("Services history displayed");
    },
    
    /**
     * Event handler for configuring columns.
     */
    onConfigureColumns: function() {
      MessageToast.show("Columns configured");
    },
    
    /**
     * Event handler for filtering items.
     */
    onFilter: function() {
      MessageToast.show("Filter applied");
    },
    
    /**
     * Event handler for sorting items.
     */
    onSort: function() {
      MessageToast.show("Sort applied");
    },
    
    /**
     * Event handler for layout.
     */
    onLayout: function() {
      MessageToast.show("Layout changed");
    },
    
    /**
     * Event handler for default values.
     */
    onDefaultValues: function() {
      MessageToast.show("Default values applied");
    },
    
    /**
     * Event handler for additional planning.
     */
    onAddlPlanning: function() {
      MessageToast.show("Additional planning");
    },
    
    /**
     * Event handler for navigating to the previous item.
     */
    onPreviousItem: function() {
      MessageToast.show("Previous item");
    },
    
    /**
     * Event handler for navigating to the next item.
     */
    onNextItem: function() {
      MessageToast.show("Next item");
    },
    
    /**
     * Event handler for item selector change.
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onItemSelectorChange: function(oEvent) {
      var sSelectedItemKey = oEvent.getParameter("selectedKey");
      MessageToast.show("Selected item: " + sSelectedItemKey);
    },
    
    /**
     * Event handler for control code value help.
     */
    onControlCodeValueHelp: function() {
      MessageToast.show("Control code value help");
    },

    /**
     * Handle value help request (for ValueHelp / F4 elements)
     * @param {sap.ui.base.Event} oEvent The event object
     */
    handleValueHelp: function(oEvent) {
      var oSource = oEvent.getSource();
      
      // Create value help dialog if it doesn't exist
      if (!this._valueHelpDialog) {
        this._valueHelpDialog = new sap.m.SelectDialog({
          title: "Select Value",
          confirm: function(oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            if (oSelectedItem) {
              oSource.setValue(oSelectedItem.getTitle());
            }
          },
          cancel: function(oEvent) {
          }
        });
        
        // Sample items - would be filled with actual data in a real app
        var oDialogModel = new JSONModel({
          items: [
            { title: "Item 1", description: "Description 1" },
            { title: "Item 2", description: "Description 2" },
            { title: "Item 3", description: "Description 3" }
          ]
        });
        
        this._valueHelpDialog.setModel(oDialogModel);
        this._valueHelpDialog.bindAggregation("items", {
          path: "/items",
          template: new sap.m.StandardListItem({
            title: "{title}",
            description: "{description}"
          })
        });
      }
      
      // Open the dialog
      this._valueHelpDialog.open();
    },
    
    /**
     * Handle file download requests (for FileDownload elements)
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onFileDownload: function(oEvent) {
      // In a real application, this would be connected to a backend service
      // For now, we'll show a message
      MessageToast.show("File download initiated");
      
      // Sample approach to download a file:
      // var sUrl = "/api/downloadFile?id=123";
      // var link = document.createElement("a");
      // link.href = sUrl;
      // link.download = "filename.pdf";
      // link.click();
    },
    
    /**
     * Open message popover (for MessageArea elements)
     * @param {sap.ui.base.Event} oEvent The event object
     */
    handleMessagePopoverPress: function(oEvent) {
      if (!this._messagePopover) {
        this._messagePopover = new MessagePopover({
          items: {
            path: "messages>/messages",
            template: new MessageItem({
              type: "{messages>type}",
              title: "{messages>title}",
              description: "{messages>description}",
              subtitle: "{messages>subtitle}",
              counter: "{messages>counter}"
            })
          }
        });
        
        this.getView().byId("messagePopoverBtn").addDependent(this._messagePopover);
      }
      
      this._messagePopover.toggle(oEvent.getSource());
    },
    
    /**
     * Handle navigation link press events
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onNavigationLinkPress: function(oEvent) {
      var oSource = oEvent.getSource();
      var sHref = oSource.getHref();
      
      if (sHref) {
        // If href is set, let the default behavior handle it
        return;
      }
      
      // Otherwise, handle the navigation programmatically
      var sNavTarget = oSource.data("navTarget");
      if (sNavTarget) {
        MessageToast.show("Navigating to: " + sNavTarget);
        // In a real application, this would navigate to the appropriate view or application
        // using the router
      }
    },
    
    /**
     * Handle office control rendering
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onOfficeControlRendered: function(oEvent) {
      // This would normally integrate with MS Office API or similar
      // In a converted application, this would be replaced by a more appropriate solution
      console.log("Office control container rendered");
      
      var oSource = oEvent.getSource();
      var sDomRef = oSource.getDomRef();
      if (sDomRef) {
        sDomRef.innerHTML = '<div class="sapUiMediumMargin">' +
          '<div class="sapUiMediumMarginBottom">' +
          '<span class="sapUiIcon sapUiIconMirrorInRTL" style="font-family:SAP-icons;color:#0854a0;font-size:2.5rem">&#xe0ef;</span>' +
          '</div>' +
          '<div class="sapMText">' +
          '<p>Office document integration would be configured here.</p>' +
          '<p>In SAPUI5, this typically uses OData services with MS Graph API integration.</p>' +
          '</div>' +
          '</div>';
      }
    },
    
    /**
     * Open dialog
     * This is a generic handler for WebDynpro dialog elements
     * @param {sap.ui.base.Event} oEvent The event object
     */
    openDialog: function(oEvent) {
      // Get the dialog ID from the source control
      var oSource = oEvent.getSource();
      var sDialogId = oSource.data("dialogId") || "confirmDialog";
      
      // Find the dialog in the view
      var oDialog = this.getView().byId(sDialogId);
      if (oDialog) {
        oDialog.open();
      } else {
        MessageToast.show("Dialog with ID '" + sDialogId + "' not found");
      }
    },
    
    /**
     * Close dialog
     * @param {sap.ui.base.Event} oEvent The event object
     */
    closeDialog: function(oEvent) {
      var oDialog = oEvent.getSource().getParent();
      oDialog.close();
    },
    
    /**
     * Handle dialog confirm button press
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onDialogConfirm: function(oEvent) {
      // Handle dialog confirmation logic
      MessageToast.show("Dialog confirmed");
      this.closeDialog(oEvent);
    },
    
    /**
     * Handle dialog cancel button press
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onDialogCancel: function(oEvent) {
      // Handle dialog cancellation
      this.closeDialog(oEvent);
    },
    
    /**
     * Navigate to SecondView
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onNextPress: function(oEvent) {
      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);
      
      // Navigate to the 'second' route
      oRouter.navTo("second");
    },
    
    /**
     * Navigate back to main view
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onBackPress: function(oEvent) {
      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);
      
      // Navigate to the 'main' route
      oRouter.navTo("main");
    },
    
    /**
     * Navigate to a specific route
     * @param {string} sRoute The route name to navigate to
     */
    navTo: function(sRoute) {
      var oRouter = UIComponent.getRouterFor(this);
      oRouter.navTo(sRoute);
    },

    // --------------- Table Functionality ---------------

    /**
     * Event handler for searching in the item table.
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onSearchItemTable: function (oEvent) {
      var sQuery = oEvent.getParameter("query");
      var aFilters = [];

      if (sQuery) {
        aFilters.push(new Filter({
          filters: [
            new Filter("itemNumber", FilterOperator.Contains, sQuery),
            new Filter("material", FilterOperator.Contains, sQuery),
            new Filter("shortText", FilterOperator.Contains, sQuery)
          ],
          and: false
        }));
      }

      var oTable = this.getView().byId("itemTable");
      var oBinding = oTable.getBinding("items");
      oBinding.filter(aFilters);
    },

    /**
     * Event handler for exporting the item table to CSV.
     */
    onExportToCSV: function() {
      var oTable = this.byId("itemTable");
      var aData = oTable.getModel("items").getData().items; // Access the items array
      var sCsvContent = this._convertToCSV(aData);
      var oBlob = new Blob([sCsvContent], { type: 'text/csv' });
      var sUrl = URL.createObjectURL(oBlob);
      var oLink = document.createElement('a');
      oLink.href = sUrl;
      oLink.download = 'item_data_export.csv';
      oLink.click();
      URL.revokeObjectURL(sUrl);
    },
    
    /**
     * Helper function to convert table data to CSV format.
     * @param {array} aData The data to convert
     * @private
     */
    _convertToCSV: function(aData) {
      if (!aData || aData.length === 0) return '';
      var aHeaders = Object.keys(aData[0]);
      var sCsv = aHeaders.join(',') + '\n';
      aData.forEach(function(row) {
        var aValues = aHeaders.map(function(header) {
          return '"' + (row[header] || '').toString().replace(/"/g, '""') + '"';
        });
        sCsv += aValues.join(',') + '\n';
      });
      return sCsv;
    },

    /**
     * Event handler for exporting the item table to Excel.
     */
    onExportToExcel: function() {
      var oTable = this.byId("itemTable");
      var oExport = new Export({
        exportType: new ExportTypeCSV({
          fileExtension: 'xlsx',
          mimeType: 'application/vnd.ms-excel'
        }),
        models: oTable.getModel("items"), // Access the "items" model
        rows: {
          path: "/items" // Path to the items array
        },
        columns: this._getExportColumns()
      });
      oExport.saveFile("item_data_export").then(function() {
        MessageToast.show("Export completed successfully");
      });
    },

    /**
     * Helper function to define the columns for export.
     * @private
     */
    _getExportColumns: function() {
      return [
        {
          name: "Item Number",
          template: {
            content: "{items>itemNumber}"
          }
        },
        {
          name: "Material",
          template: {
            content: "{items>material}"
          }
        },
        {
          name: "Short Text",
          template: {
            content: "{items>shortText}"
          }
        },
        {
          name: "PO Quantity",
          template: {
            content: "{items>poQuantity}"
          }
        },
        {
          name: "Order Unit",
          template: {
            content: "{items>orderUnit}"
          }
        },
        {
          name: "Delivery Date",
          template: {
            content: "{items>deliveryDate}"
          }
        },
        {
          name: "Net Price",
          template: {
            content: "{items>netPrice}"
          }
        },
        {
          name: "Currency",
          template: {
            content: "{items>currency}"
          }
        }
      ];
    },

    /**
     * Event handler for filtering the item table.
     */
    onFilterItemTable: function () {
        MessageToast.show("Filter on Item Table");
    },

    /**
     * Event handler for sorting the item table.
     */
    onSortItemTable: function () {
        MessageToast.show("Sort on Item Table");
    }
  });
});
