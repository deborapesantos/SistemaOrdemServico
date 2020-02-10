
namespace SistemaOrdemServico.SistemaOS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SistemaOS"), Module("SistemaOS"), TableName("[dbo].[Funcionario]")]
    [DisplayName("Funcionario"), InstanceName("Funcionario")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class FuncionarioRow : Row, IIdRow, INameRow
    {
        [DisplayName("Funcionário"), Identity]
        public Int32? FuncionarioId
        {
            get { return Fields.FuncionarioId[this]; }
            set { Fields.FuncionarioId[this] = value; }
        }

        [DisplayName("Nome"), Size(255), QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Cpf"), Size(15), QuickSearch]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }

        [DisplayName("Email"), Size(255), QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("UserId"), QuickSearch]
        public int? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Função"), Size(255)]
        public String Funcao
        {
            get { return Fields.Funcao[this]; }
            set { Fields.Funcao[this] = value; }
        }

        [DisplayName("Perfil do funcionário"), ForeignKey("[dbo].[SisPerfilFuncionario]", "CodigoPerfilFuncionario"), LeftJoin("jCodigoPerfilFuncionario"), TextualField("CodigoPerfilFuncionarioDescricao")]
        [LookupEditor(typeof(SisPerfilFuncionarioRow))]
        public Int32? CodigoPerfilFuncionario
        {
            get { return Fields.CodigoPerfilFuncionario[this]; }
            set { Fields.CodigoPerfilFuncionario[this] = value; }
        }

        [DisplayName("Perfil Funcionário Descrição"), Expression("jCodigoPerfilFuncionario.[Descricao]")]
        public String CodigoPerfilFuncionarioDescricao
        {
            get { return Fields.CodigoPerfilFuncionarioDescricao[this]; }
            set { Fields.CodigoPerfilFuncionarioDescricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FuncionarioId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FuncionarioRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FuncionarioId;
            public StringField Nome;
            public StringField Funcao;
            public Int32Field CodigoPerfilFuncionario;
            public StringField Cpf;
            public StringField Email;
            public Int32Field UserId;

            public StringField CodigoPerfilFuncionarioDescricao;
        }
    }
}
