
namespace SistemaOrdemServico.SistemaOS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SistemaOS/Equipamento"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EquipamentoRow))]
    public class EquipamentoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SistemaOS/Equipamento/EquipamentoIndex.cshtml");
        }
    }
}