
namespace SistemaOrdemServico.SistemaOS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SistemaOS.Funcionario")]
    [BasedOnRow(typeof(Entities.FuncionarioRow), CheckNames = true)]
    public class FuncionarioForm
    {
        [DisplayName("Nome do Funcionário")]
        public String Nome { get; set; }
        [DisplayName("Função")]
        public String Funcao { get; set; }
        [DisplayName("Perfil do funcionário no sistema")]
        public Int32 CodigoPerfilFuncionario { get; set; }
        [DisplayName("E-mail")]
        public string Email { get; set; }

        [DisplayName("CPF")]

        public string Cpf { get; set; }
    }
}