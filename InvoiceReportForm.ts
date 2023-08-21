namespace MyProject.Invoice {
    export class InvoiceReportForm extends Serenity.PrefixedContext {
        static formKey = 'Invoice.InvoiceReport';

        constructor(prefix: string) {
            super(prefix);
        }

        public Vendor = Serenity.LookupEditor; 
        public StartDate = Serenity.DateEditor;
        public EndDate = Serenity.DateEditor;
    }
}
