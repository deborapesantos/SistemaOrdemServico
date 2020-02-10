
namespace SistemaOrdemServico.SistemaOS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SistemaOS/SisTipoEquipamento"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SisTipoEquipamentoRow))]
    public class SisTipoEquipamentoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SistemaOS/SisTipoEquipamento/SisTipoEquipamentoIndex.cshtml");
        }
    }
}