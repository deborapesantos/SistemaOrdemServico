
namespace SistemaOrdemServico.SistemaOS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SistemaOS.Funcionario")]
    [BasedOnRow(typeof(Entities.FuncionarioRow), CheckNames = true)]
    public class FuncionarioColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FuncionarioId { get; set; }
        [EditLink]
        public String Nome { get; set; }
        public String Funcao { get; set; }
        public String CodigoPerfilFuncionarioDescricao { get; set; }
    }
}