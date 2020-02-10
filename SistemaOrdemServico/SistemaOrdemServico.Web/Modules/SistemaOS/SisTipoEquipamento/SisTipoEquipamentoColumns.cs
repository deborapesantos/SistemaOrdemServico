
namespace SistemaOrdemServico.SistemaOS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SistemaOS.SisTipoEquipamento")]
    [BasedOnRow(typeof(Entities.SisTipoEquipamentoRow), CheckNames = true)]
    public class SisTipoEquipamentoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodigoTipoEquipamento { get; set; }
        public Int32 Descricao { get; set; }
    }
}