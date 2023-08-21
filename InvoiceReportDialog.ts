namespace MyProject.Invoice {
    @Serenity.Decorators.registerClass()
    export class InvoiceReportDialog extends Serenity.PropertyDialog<any, any> {
        private form: InvoiceReportForm;
        private grid: InvoiceReportGrid;  // Assuming you have a grid setup for the report

        constructor() {
            super();
            this.form = new InvoiceReportForm(this.idPrefix);
            this.grid = new InvoiceReportGrid(this.byId('ReportGrid')); // Element for report display
        }

        protected getTemplate() {
            return "<div id='~_ReportGrid'></div>" + super.getTemplate();
        }

        protected getDialogTitle(): string {
            return "Invoice Report";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Generate',
                    click: () => {
                        let criteria = this.form;
                        let vendor = criteria.Vendor.value;
                        let startDate = criteria.StartDate.valueAsDate;
                        let endDate = criteria.EndDate.valueAsDate;

                        Q.serviceRequest('Invoice/InvoiceReport/List', {
                            Vendor: vendor,
                            StartDate: startDate,
                            EndDate: endDate,
                        }, (response) => {
                            this.grid.setItems(response.Entities);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    click: () => {
                        this.dialogClose();
                    }
                }
            ];
        }
    }
}
