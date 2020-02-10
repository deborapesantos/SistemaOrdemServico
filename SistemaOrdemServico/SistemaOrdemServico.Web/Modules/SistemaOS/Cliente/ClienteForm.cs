
namespace SistemaOrdemServico.SistemaOS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SistemaOS.Cliente")]
    [BasedOnRow(typeof(Entities.ClienteRow), CheckNames = true)]
    public class ClienteForm
    {
        [DisplayName("Nome do cliente")]
        public String Nome { get; set; }
        [DisplayName("CPF/CNPJ")]
        public String CpfCnpj { get; set; }
        [DisplayName("Bairro")]
        public String EndBairro { get; set; }
        [DisplayName("Cidade")]
        public String EndCidade { get; set; }
        [DisplayName("Estado")]
        public String EndEstado { get; set; }
        [DisplayName("Logradouro")]
        public String EndLogradouro { get; set; }
        [DisplayName("Numero")]
        public Int32 EndNumero { get; set; }
        [DisplayName("Complemento")]
        public String EndComplemento { get; set; }
        [DisplayName("CEP")]
        public String EndCep { get; set; }
        [DisplayName("Ponto de referência")]
        public String EndProntoRef { get; set; }
    }
}