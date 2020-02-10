
namespace SistemaOrdemServico.SistemaOS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SistemaOS/Funcionario"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FuncionarioRow))]
    public class FuncionarioController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SistemaOS/Funcionario/FuncionarioIndex.cshtml");
        }
    }
}