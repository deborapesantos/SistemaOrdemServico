
namespace SistemaOrdemServico.SistemaOS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SistemaOS"), Module("SistemaOS"), TableName("[dbo].[Cliente]")]
    [DisplayName("Cliente"), InstanceName("Cliente")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ClienteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cliente"), Identity]
        public Int32? ClienteId
        {
            get { return Fields.ClienteId[this]; }
            set { Fields.ClienteId[this] = value; }
        }

        [DisplayName("Nome"), Size(200), QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

       

        [DisplayName("Cpf/Cnpj"), Size(15)]
        public String CpfCnpj
        {
            get { return Fields.CpfCnpj[this]; }
            set { Fields.CpfCnpj[this] = value; }
        }

        [DisplayName("Bairro"), Size(200)]
        public String EndBairro
        {
            get { return Fields.EndBairro[this]; }
            set { Fields.EndBairro[this] = value; }
        }

        [DisplayName("Cidade"), Size(200)]
        public String EndCidade
        {
            get { return Fields.EndCidade[this]; }
            set { Fields.EndCidade[this] = value; }
        }

        [DisplayName("Estado"), Size(200)]
        public String EndEstado
        {
            get { return Fields.EndEstado[this]; }
            set { Fields.EndEstado[this] = value; }
        }

        [DisplayName("Logradouro"), Size(200)]
        public String EndLogradouro
        {
            get { return Fields.EndLogradouro[this]; }
            set { Fields.EndLogradouro[this] = value; }
        }

        [DisplayName("Numero")]
        public Int32? EndNumero
        {
            get { return Fields.EndNumero[this]; }
            set { Fields.EndNumero[this] = value; }
        }

        [DisplayName("Complemento"), Size(200)]
        public String EndComplemento
        {
            get { return Fields.EndComplemento[this]; }
            set { Fields.EndComplemento[this] = value; }
        }

        [DisplayName("Cep"), Size(12)]
        public String EndCep
        {
            get { return Fields.EndCep[this]; }
            set { Fields.EndCep[this] = value; }
        }

        [DisplayName("Pronto Referência"), Size(200)]
        public String EndProntoRef
        {
            get { return Fields.EndProntoRef[this]; }
            set { Fields.EndProntoRef[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ClienteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClienteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClienteId;
            public StringField Nome;
            public StringField CpfCnpj;
            public StringField EndBairro;
            public StringField EndCidade;
            public StringField EndEstado;
            public StringField EndLogradouro;
            public Int32Field EndNumero;
            public StringField EndComplemento;
            public StringField EndCep;
            public StringField EndProntoRef;
        }
    }
}
