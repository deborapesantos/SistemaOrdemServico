
namespace SistemaOrdemServico.SistemaOS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SistemaOS.Equipamento")]
    [BasedOnRow(typeof(Entities.EquipamentoRow), CheckNames = true)]
    public class EquipamentoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EquipamentoId { get; set; }
        public String ClienteNome { get; set; }
        public Int32 CodigoTipoEquipamento { get; set; }
        [EditLink]
        public String Nome { get; set; }
        public String Modelo { get; set; }
        public String Tipo { get; set; }
        public DateTime DataUltimaVisita { get; set; }
        public DateTime DataProximaVisita { get; set; }
        public String Estado { get; set; }
    }
}