namespace MyProject.Invoice {
    export class InvoiceReportGrid extends Serenity.EntityGrid<MyRow, any> {
        protected getColumnsKey() { return 'Invoice.Report'; } // Modify this
        protected getIdProperty() { return MyRow.idProperty; }
        protected getLocalTextPrefix() { return MyRow.localTextPrefix; }
        protected getService() { return InvoiceReportService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
