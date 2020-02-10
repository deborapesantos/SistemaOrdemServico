
namespace SistemaOrdemServico.SistemaOS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SistemaOS/SisPerfilFuncionario"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SisPerfilFuncionarioRow))]
    public class SisPerfilFuncionarioController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SistemaOS/SisPerfilFuncionario/SisPerfilFuncionarioIndex.cshtml");
        }
    }
}