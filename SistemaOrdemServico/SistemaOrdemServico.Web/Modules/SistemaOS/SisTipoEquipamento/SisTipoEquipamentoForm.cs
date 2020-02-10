
namespace SistemaOrdemServico.SistemaOS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SistemaOS.SisTipoEquipamento")]
    [BasedOnRow(typeof(Entities.SisTipoEquipamentoRow), CheckNames = true)]
    public class SisTipoEquipamentoForm
    {
        public Int32 Descricao { get; set; }
    }
}