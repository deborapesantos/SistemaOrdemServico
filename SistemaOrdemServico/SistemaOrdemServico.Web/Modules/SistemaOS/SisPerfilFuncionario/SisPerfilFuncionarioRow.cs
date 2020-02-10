
namespace SistemaOrdemServico.SistemaOS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SistemaOS"), Module("SistemaOS"), TableName("[dbo].[SisPerfilFuncionario]")]
    [DisplayName("Sis Perfil Funcionario"), InstanceName("Sis Perfil Funcionario")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SisPerfilFuncionarioRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo Perfil Funcionario"), Identity]
        public Int32? CodigoPerfilFuncionario
        {
            get { return Fields.CodigoPerfilFuncionario[this]; }
            set { Fields.CodigoPerfilFuncionario[this] = value; }
        }

        [DisplayName("Descricao"), Size(255), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodigoPerfilFuncionario; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SisPerfilFuncionarioRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodigoPerfilFuncionario;
            public StringField Descricao;
        }
    }
}
