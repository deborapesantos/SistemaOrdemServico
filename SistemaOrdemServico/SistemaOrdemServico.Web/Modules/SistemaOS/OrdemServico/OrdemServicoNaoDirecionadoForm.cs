
namespace SistemaOrdemServico.SistemaOS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SistemaOS.OrdemServico")]
    [BasedOnRow(typeof(Entities.OrdemServicoRow), CheckNames = true)]
    public class OrdemServicoNaoDirecionadoForm
    {

        [DisplayName("Técnico")]
        public Int32 FkFuncionarioId { get; set; }
     
       
        [CssClass("col-md-6")]
        [DisplayName("Período do atendimento")]
        public String Periodo { get; set; }
        
        [CssClass("col-md-6")]
        [DisplayName("Data do atendimento")]
        public DateTime DataAtendimento { get; set; }
       
    }
}