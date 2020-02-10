
namespace SistemaOrdemServico.SistemaOS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SistemaOS.Equipamento")]
    [BasedOnRow(typeof(Entities.EquipamentoRow), CheckNames = true)]
    public class EquipamentoForm
    {
        [DisplayName("Cliente")]
        public Int32 ClienteId { get; set; }
        [DisplayName("Tipo do equipamento")]
        public Int32 CodigoTipoEquipamento { get; set; }
        [DisplayName("Nome do equipamento")]
        public String Nome { get; set; }
        [DisplayName("Modelo")]
        public String Modelo { get; set; }
        [DisplayName("Tipo")]
        public String Tipo { get; set; }
        [DisplayName("Data da última visita"),ReadOnly(true)]
        public DateTime DataUltimaVisita { get; set; }
        [DisplayName("Data da próxima visita")]
        public DateTime DataProximaVisita { get; set; }
        [DisplayName("Estado do Equipamento")]
        public String Estado { get; set; }
    }
}