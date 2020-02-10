
namespace SistemaOrdemServico.SistemaOS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SistemaOS"), Module("SistemaOS"), TableName("[dbo].[OrdemServico]")]
    [DisplayName("Ordem Servico"), InstanceName("Ordem Servico")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OrdemServicoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ordem Servico"), Identity]
        public Int32? OrdemServicoId
        {
            get { return Fields.OrdemServicoId[this]; }
            set { Fields.OrdemServicoId[this] = value; }
        }

        [DisplayName("Funcionário"), Column("FKFuncionarioId"), ForeignKey("[dbo].[Funcionario]", "FuncionarioId"), LeftJoin("jFkFuncionario"), TextualField("FkFuncionarioNome")]
        [LookupEditor(typeof(FuncionarioRow))]
        public Int32? FkFuncionarioId
        {
            get { return Fields.FkFuncionarioId[this]; }
            set { Fields.FkFuncionarioId[this] = value; }
        }

        [DisplayName("Equipamento"), Column("FKEquipamentoId"), ForeignKey("[dbo].[Equipamento]", "EquipamentoId"), LeftJoin("jFkEquipamento"), TextualField("FkEquipamentoNome")]
        [LookupEditor(typeof(EquipamentoRow))]
        public Int32? FkEquipamentoId
        {
            get { return Fields.FkEquipamentoId[this]; }
            set { Fields.FkEquipamentoId[this] = value; }
        }

        [DisplayName("Cliente"), Column("FKClienteId"), ForeignKey("[dbo].[Cliente]", "ClienteId"), LeftJoin("jFkCliente"), TextualField("FkClienteNome")]
        [LookupEditor(typeof(ClienteRow))]
        public Int32? FkClienteId
        {
            get { return Fields.FkClienteId[this]; }
            set { Fields.FkClienteId[this] = value; }
        }

        [DisplayName("Breve descrição"), Size(255), QuickSearch]
        public String Titulo
        {
            get { return Fields.Titulo[this]; }
            set { Fields.Titulo[this] = value; }
        }

        [DisplayName("Data do chamado")]
        public DateTime? DataChamado
        {
            get { return Fields.DataChamado[this]; }
            set { Fields.DataChamado[this] = value; }
        }

        [DisplayName("Período de atendimento"), Size(255)]
        public String Periodo
        {
            get { return Fields.Periodo[this]; }
            set { Fields.Periodo[this] = value; }
        }

        [DisplayName("Pago")]
        public Boolean? Pago
        {
            get { return Fields.Pago[this]; }
            set { Fields.Pago[this] = value; }
        }

        [DisplayName("Data do Atendimento")]
        public DateTime? DataAtendimento
        {
            get { return Fields.DataAtendimento[this]; }
            set { Fields.DataAtendimento[this] = value; }
        }

        [DisplayName("Número de ordem de serviço"), Column("NumeroOS")]
        public Int32? NumeroOs
        {
            get { return Fields.NumeroOs[this]; }
            set { Fields.NumeroOs[this] = value; }
        }

        [DisplayName("Descrição do serviço"), Size(255)]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        [DisplayName("Avaria Pré Existente"), Size(255)]
        public String AvariaPreExistente
        {
            get { return Fields.AvariaPreExistente[this]; }
            set { Fields.AvariaPreExistente[this] = value; }
        }

        [DisplayName("Parecer Tecnico"), Size(255)]
        public String ParecerTecnico
        {
            get { return Fields.ParecerTecnico[this]; }
            set { Fields.ParecerTecnico[this] = value; }
        }

        [DisplayName("Valor das peças")]
        public Double? PrecoPecas
        {
            get { return Fields.PrecoPecas[this]; }
            set { Fields.PrecoPecas[this] = value; }
        }

        [DisplayName("Valor de mão de obra")]
        public Double? PrecoMaoObra
        {
            get { return Fields.PrecoMaoObra[this]; }
            set { Fields.PrecoMaoObra[this] = value; }
        }

        [DisplayName("Valor Total")]
        public Double? PrecoTotal
        {
            get { return Fields.PrecoTotal[this]; }
            set { Fields.PrecoTotal[this] = value; }
        }

        [DisplayName("Desconto")]
        public Double? Desconto
        {
            get { return Fields.Desconto[this]; }
            set { Fields.Desconto[this] = value; }
        }

        [DisplayName("O local foi limpo corretamente? "), Column("PQLocalLimpo")]
        public Boolean? PqLocalLimpo
        {
            get { return Fields.PqLocalLimpo[this]; }
            set { Fields.PqLocalLimpo[this] = value; }
        }

        [DisplayName("O técnico cumpriu o horário combinado?"), Column("PQCompriuHorario")]
        public Boolean? PqCompriuHorario
        {
            get { return Fields.PqCompriuHorario[this]; }
            set { Fields.PqCompriuHorario[this] = value; }
        }

        [DisplayName("Suas dúvidas forão esclarecidas?"), Column("PQDuvidasEsclarecidas")]
        public Boolean? PqDuvidasEsclarecidas
        {
            get { return Fields.PqDuvidasEsclarecidas[this]; }
            set { Fields.PqDuvidasEsclarecidas[this] = value; }
        }

        [DisplayName("Fk Funcionario Nome"), Expression("jFkFuncionario.[Nome]")]
        public String FkFuncionarioNome
        {
            get { return Fields.FkFuncionarioNome[this]; }
            set { Fields.FkFuncionarioNome[this] = value; }
        }

        [DisplayName("Fk Funcionario Funcao"), Expression("jFkFuncionario.[Funcao]")]
        public String FkFuncionarioFuncao
        {
            get { return Fields.FkFuncionarioFuncao[this]; }
            set { Fields.FkFuncionarioFuncao[this] = value; }
        }

        [DisplayName("Fk Funcionario Codigo Perfil Funcionario"), Expression("jFkFuncionario.[CodigoPerfilFuncionario]")]
        public Int32? FkFuncionarioCodigoPerfilFuncionario
        {
            get { return Fields.FkFuncionarioCodigoPerfilFuncionario[this]; }
            set { Fields.FkFuncionarioCodigoPerfilFuncionario[this] = value; }
        }

        [DisplayName("Fk Equipamento Cliente Id"), Expression("jFkEquipamento.[ClienteId]")]
        public Int32? FkEquipamentoClienteId
        {
            get { return Fields.FkEquipamentoClienteId[this]; }
            set { Fields.FkEquipamentoClienteId[this] = value; }
        }

        [DisplayName("Fk Equipamento Codigo Tipo Equipamento"), Expression("jFkEquipamento.[CodigoTipoEquipamento]")]
        public Int32? FkEquipamentoCodigoTipoEquipamento
        {
            get { return Fields.FkEquipamentoCodigoTipoEquipamento[this]; }
            set { Fields.FkEquipamentoCodigoTipoEquipamento[this] = value; }
        }

        [DisplayName("Fk Equipamento Nome"), Expression("jFkEquipamento.[Nome]")]
        public String FkEquipamentoNome
        {
            get { return Fields.FkEquipamentoNome[this]; }
            set { Fields.FkEquipamentoNome[this] = value; }
        }

        [DisplayName("Fk Equipamento Modelo"), Expression("jFkEquipamento.[Modelo]")]
        public String FkEquipamentoModelo
        {
            get { return Fields.FkEquipamentoModelo[this]; }
            set { Fields.FkEquipamentoModelo[this] = value; }
        }

        [DisplayName("Fk Equipamento Tipo"), Expression("jFkEquipamento.[Tipo]")]
        public String FkEquipamentoTipo
        {
            get { return Fields.FkEquipamentoTipo[this]; }
            set { Fields.FkEquipamentoTipo[this] = value; }
        }

        [DisplayName("Fk Equipamento Data Ultima Visita"), Expression("jFkEquipamento.[DataUltimaVisita]")]
        public DateTime? FkEquipamentoDataUltimaVisita
        {
            get { return Fields.FkEquipamentoDataUltimaVisita[this]; }
            set { Fields.FkEquipamentoDataUltimaVisita[this] = value; }
        }

        [DisplayName("Fk Equipamento Data Proxima Visita"), Expression("jFkEquipamento.[DataProximaVisita]")]
        public DateTime? FkEquipamentoDataProximaVisita
        {
            get { return Fields.FkEquipamentoDataProximaVisita[this]; }
            set { Fields.FkEquipamentoDataProximaVisita[this] = value; }
        }

        [DisplayName("Fk Equipamento Estado"), Expression("jFkEquipamento.[Estado]")]
        public String FkEquipamentoEstado
        {
            get { return Fields.FkEquipamentoEstado[this]; }
            set { Fields.FkEquipamentoEstado[this] = value; }
        }

        [DisplayName("Fk Cliente Nome"), Expression("jFkCliente.[Nome]")]
        public String FkClienteNome
        {
            get { return Fields.FkClienteNome[this]; }
            set { Fields.FkClienteNome[this] = value; }
        }

        [DisplayName("Fk Cliente Cpf Cnpj"), Expression("jFkCliente.[CpfCnpj]")]
        public String FkClienteCpfCnpj
        {
            get { return Fields.FkClienteCpfCnpj[this]; }
            set { Fields.FkClienteCpfCnpj[this] = value; }
        }

        [DisplayName("Fk Cliente End Bairro"), Expression("jFkCliente.[EndBairro]")]
        public String FkClienteEndBairro
        {
            get { return Fields.FkClienteEndBairro[this]; }
            set { Fields.FkClienteEndBairro[this] = value; }
        }

        [DisplayName("Fk Cliente End Cidade"), Expression("jFkCliente.[EndCidade]")]
        public String FkClienteEndCidade
        {
            get { return Fields.FkClienteEndCidade[this]; }
            set { Fields.FkClienteEndCidade[this] = value; }
        }

        [DisplayName("Fk Cliente End Estado"), Expression("jFkCliente.[EndEstado]")]
        public String FkClienteEndEstado
        {
            get { return Fields.FkClienteEndEstado[this]; }
            set { Fields.FkClienteEndEstado[this] = value; }
        }

        [DisplayName("Fk Cliente End Logradouro"), Expression("jFkCliente.[EndLogradouro]")]
        public String FkClienteEndLogradouro
        {
            get { return Fields.FkClienteEndLogradouro[this]; }
            set { Fields.FkClienteEndLogradouro[this] = value; }
        }

        [DisplayName("Fk Cliente End Numero"), Expression("jFkCliente.[EndNumero]")]
        public Int32? FkClienteEndNumero
        {
            get { return Fields.FkClienteEndNumero[this]; }
            set { Fields.FkClienteEndNumero[this] = value; }
        }

        [DisplayName("Fk Cliente End Complemento"), Expression("jFkCliente.[EndComplemento]")]
        public String FkClienteEndComplemento
        {
            get { return Fields.FkClienteEndComplemento[this]; }
            set { Fields.FkClienteEndComplemento[this] = value; }
        }

        [DisplayName("Fk Cliente End Cep"), Expression("jFkCliente.[EndCep]")]
        public String FkClienteEndCep
        {
            get { return Fields.FkClienteEndCep[this]; }
            set { Fields.FkClienteEndCep[this] = value; }
        }

        [DisplayName("Fk Cliente End Pronto Ref"), Expression("jFkCliente.[EndProntoRef]")]
        public String FkClienteEndProntoRef
        {
            get { return Fields.FkClienteEndProntoRef[this]; }
            set { Fields.FkClienteEndProntoRef[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrdemServicoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Titulo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrdemServicoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrdemServicoId;
            public Int32Field FkFuncionarioId;
            public Int32Field FkEquipamentoId;
            public Int32Field FkClienteId;
            public StringField Titulo;
            public DateTimeField DataChamado;
            public StringField Periodo;
            public BooleanField Pago;
            public DateTimeField DataAtendimento;
            public Int32Field NumeroOs;
            public StringField Descricao;
            public StringField AvariaPreExistente;
            public StringField ParecerTecnico;
            public DoubleField PrecoPecas;
            public DoubleField PrecoMaoObra;
            public DoubleField PrecoTotal;
            public DoubleField Desconto;
            public BooleanField PqLocalLimpo;
            public BooleanField PqCompriuHorario;
            public BooleanField PqDuvidasEsclarecidas;

            public StringField FkFuncionarioNome;
            public StringField FkFuncionarioFuncao;
            public Int32Field FkFuncionarioCodigoPerfilFuncionario;

            public Int32Field FkEquipamentoClienteId;
            public Int32Field FkEquipamentoCodigoTipoEquipamento;
            public StringField FkEquipamentoNome;
            public StringField FkEquipamentoModelo;
            public StringField FkEquipamentoTipo;
            public DateTimeField FkEquipamentoDataUltimaVisita;
            public DateTimeField FkEquipamentoDataProximaVisita;
            public StringField FkEquipamentoEstado;

            public StringField FkClienteNome;
            public StringField FkClienteCpfCnpj;
            public StringField FkClienteEndBairro;
            public StringField FkClienteEndCidade;
            public StringField FkClienteEndEstado;
            public StringField FkClienteEndLogradouro;
            public Int32Field FkClienteEndNumero;
            public StringField FkClienteEndComplemento;
            public StringField FkClienteEndCep;
            public StringField FkClienteEndProntoRef;
        }
    }
}
