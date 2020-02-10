
namespace SistemaOrdemServico.SistemaOS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SistemaOS.OrdemServico")]
    [BasedOnRow(typeof(Entities.OrdemServicoRow), CheckNames = true)]
    public class OrdemServicoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrdemServicoId { get; set; }
        public String FkFuncionarioNome { get; set; }
        public String FkEquipamentoNome { get; set; }
        public String FkClienteNome { get; set; }
        [EditLink]
        public String Titulo { get; set; }
        public DateTime DataChamado { get; set; }
        public String Periodo { get; set; }
        public Boolean Pago { get; set; }
        public DateTime DataAtendimento { get; set; }
        public Int32 NumeroOs { get; set; }
        public String Descricao { get; set; }
        public String AvariaPreExistente { get; set; }
        public String ParecerTecnico { get; set; }
        public Double PrecoPecas { get; set; }
        public Double PrecoMaoObra { get; set; }
        public Double PrecoTotal { get; set; }
        public Double Desconto { get; set; }
        public Boolean PqLocalLimpo { get; set; }
        public Boolean PqCompriuHorario { get; set; }
        public Boolean PqDuvidasEsclarecidas { get; set; }
    }
}