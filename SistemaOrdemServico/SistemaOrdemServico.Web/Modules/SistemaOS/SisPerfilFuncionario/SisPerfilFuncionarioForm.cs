
namespace SistemaOrdemServico.SistemaOS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SistemaOS.SisPerfilFuncionario")]
    [BasedOnRow(typeof(Entities.SisPerfilFuncionarioRow), CheckNames = true)]
    public class SisPerfilFuncionarioForm
    {
        public String Descricao { get; set; }
    }
}