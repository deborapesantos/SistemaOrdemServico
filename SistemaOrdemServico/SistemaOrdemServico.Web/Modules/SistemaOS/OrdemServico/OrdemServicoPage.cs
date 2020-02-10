
namespace SistemaOrdemServico.SistemaOS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SistemaOS/OrdemServico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrdemServicoRow))]
    public class OrdemServicoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SistemaOS/OrdemServico/OrdemServicoIndex.cshtml");
        }
    }
}