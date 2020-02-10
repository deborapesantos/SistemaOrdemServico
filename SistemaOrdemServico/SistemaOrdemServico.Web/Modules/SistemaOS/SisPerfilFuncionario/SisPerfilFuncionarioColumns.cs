
namespace SistemaOrdemServico.SistemaOS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SistemaOS.SisPerfilFuncionario")]
    [BasedOnRow(typeof(Entities.SisPerfilFuncionarioRow), CheckNames = true)]
    public class SisPerfilFuncionarioColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodigoPerfilFuncionario { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}