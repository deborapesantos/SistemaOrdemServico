
namespace SistemaOrdemServico.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using SistemaOrdemServico.SistemaOS.Entities;
    using System;
    using System.Linq;
    using System.Web.Mvc;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
    using System.Linq;
    using System.Net.Mail;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Script.Serialization;
    using System.Web.Security;
    using System.Collections.Generic;
    using System.Data;
    using StackExchange.Exceptional;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {

            var connection = SqlConnections.NewByKey("SistemaOS");
            var today = DateTime.Today;
            var todayTime = new DateTime(today.Year, today.Month, today.Day, 0, 0, 0);
            var mes1 = new DateTime(today.Year, today.Month, 1, 0, 0,1);
            var mes30 = new DateTime(today.Year, today.Month, 30, 0, 0, 1);
            var model = new DashboardPageModel();

            model.QtdeOdermServicoAberto = connection.List<OrdemServicoRow>().Where(x => x.DataAtendimento >= todayTime && (x.Pago == null || x.Pago  == false)).Count();
            model.QtdeOdermServicoFechado = connection.List<OrdemServicoRow>().Where(x => x.Pago == true).Count();
            model.QtdeOdermServicoAndamento = connection.List<OrdemServicoRow>().Where(x => x.DataAtendimento == todayTime && x.Pago == false).Count();
            model.QtdeOdermServicoMes = connection.List<OrdemServicoRow>().Where(x => x.DataAtendimento >= mes1 && x.DataAtendimento <= mes30).Count();
            model.QtdeNaoDirecionado = connection.List<OrdemServicoRow>().Where(x => x.AvariaPreExistente == "aguardandoFunc").Count();
            

            connection.Close();
            
            return View(MVC.Views.Common.Dashboard.DashboardIndex, model);
        }

        [Authorize, HttpGet, Route("RedirecionarOs")]
        public ActionResult RedirecionarOs()
        {

           
            return View();
        }


    }
}



