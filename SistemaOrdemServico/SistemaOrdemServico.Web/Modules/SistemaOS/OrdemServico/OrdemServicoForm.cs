
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
    public class OrdemServicoForm
    {

        [DisplayName("Funcionário")]
        public Int32 FkFuncionarioId { get; set; }
        [DisplayName("Cliente")]
        public Int32 FkClienteId { get; set; }
        [DisplayName("Equipamento")]
        public Int32 FkEquipamentoId { get; set; }
        [DisplayName("Titulo do serviço")]
        public String Titulo { get; set; }
      //  [CssClass("col-md-12")]
       // public DateTime DataChamado { get; set; }
        [CssClass("col-md-6")]
        [DisplayName("Período")]
        public String Periodo { get; set; }
        
        [CssClass("col-md-6")]
        [DisplayName("Data do atendimento")]
        public DateTime DataAtendimento { get; set; }
        [CssClass("col-md-6")]
        [DisplayName("Número de OS")]
        public Int32 NumeroOs { get; set; }
        [CssClass("col-md-6")]
        [DisplayName("Descrição do serviço")]
        public String Descricao { get; set; }
        [CssClass("col-md-12")]
        [DisplayName("Avaria pré existente")]
        //public String AvariaPreExistente { get; set; }
        //[CssClass("col-md-12")]
        //[DisplayName("Parecer técnico")]
        public String ParecerTecnico { get; set; }
        [CssClass("col-md-6")]
        [DisplayName("Valor das peças")]
        public Double PrecoPecas { get; set; }
        [CssClass("col-md-6")]
        [DisplayName("Valor da mão de obra")]
        public Double PrecoMaoObra { get; set; }
        [CssClass("col-md-6")]
        [DisplayName("Valor total")]
        public Double PrecoTotal { get; set; }
        [CssClass("col-md-6")]
        [DisplayName("Desconto")]
        public Double Desconto { get; set; }

        [CssClass("col-md-6")]
        [DisplayName("Pago e finalizado")]
        public Boolean Pago { get; set; }
        // public Boolean PqLocalLimpo { get; set; }
        // public Boolean PqCompriuHorario { get; set; }
        // public Boolean PqDuvidasEsclarecidas { get; set; }
    }
}