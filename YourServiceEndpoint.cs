[RoutePrefix("Services/Invoice/InvoiceReport"), Route("{action}")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize]
public class InvoiceReportService : ServiceEndpointHandler
{
    public ListResponse<MyRow> List(ReportRequest request)
    {
        using (var connection = SqlConnections.NewFor<MyRow>())
        {
            var fld = MyRow.Fields;

            var query = connection.Query<MyRow>()
                        .Where(
                            fld.StartDate >= request.StartDate && 
                            fld.EndDate <= request.EndDate &&
                            fld.Vendor == request.Vendor
                        );

            var data = query.ToList();

            return new ListResponse<MyRow>
            {
                Entities = data,
                TotalCount = data.Count
            };
        }
    }
}

public class ReportRequest : ServiceRequest
{
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public String Vendor { get; set; }
}
