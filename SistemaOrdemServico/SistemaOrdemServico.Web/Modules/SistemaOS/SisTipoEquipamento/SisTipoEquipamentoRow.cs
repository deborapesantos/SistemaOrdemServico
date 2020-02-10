
namespace SistemaOrdemServico.SistemaOS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SistemaOS"), Module("SistemaOS"), TableName("[dbo].[SisTipoEquipamento]")]
    [DisplayName("Sis Tipo Equipamento"), InstanceName("Sis Tipo Equipamento")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SisTipoEquipamentoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo Tipo Equipamento"), Identity]
        public Int32? CodigoTipoEquipamento
        {
            get { return Fields.CodigoTipoEquipamento[this]; }
            set { Fields.CodigoTipoEquipamento[this] = value; }
        }

        [DisplayName("Descricao")]
        public string Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodigoTipoEquipamento; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }


        public static readonly RowFields Fields = new RowFields().Init();

        public SisTipoEquipamentoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodigoTipoEquipamento;
            public StringField Descricao;
        }
    }
}
