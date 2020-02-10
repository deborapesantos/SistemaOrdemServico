
namespace SistemaOrdemServico.SistemaOS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SistemaOS/Cliente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ClienteRow))]
    public class ClienteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SistemaOS/Cliente/ClienteIndex.cshtml");
        }
    }
}