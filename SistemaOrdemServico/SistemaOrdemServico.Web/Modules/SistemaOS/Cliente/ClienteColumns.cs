
namespace SistemaOrdemServico.SistemaOS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SistemaOS.Cliente")]
    [BasedOnRow(typeof(Entities.ClienteRow), CheckNames = true)]
    public class ClienteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ClienteId { get; set; }
        [EditLink]
        public String Nome { get; set; }
        public String CpfCnpj { get; set; }
        public String EndBairro { get; set; }
        public String EndCidade { get; set; }
        public String EndEstado { get; set; }
        public String EndLogradouro { get; set; }
        public Int32 EndNumero { get; set; }
        public String EndComplemento { get; set; }
        public String EndCep { get; set; }
        public String EndProntoRef { get; set; }
    }
}