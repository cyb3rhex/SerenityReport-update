using Serenity.ComponentModel;

namespace MyProject.Invoice.Forms
{
    public class InvoiceReportForm
    {
        [LookupEditor("YourVendorLookupKey")]
        public String Vendor { get; set; }

        [DateEditor]
        public DateTime StartDate { get; set; }

        [DateEditor]
        public DateTime EndDate { get; set; }
    }
}
