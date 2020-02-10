use SistemaOS;

CREATE TABLE SisPerfilFuncionario (
  CodigoPerfilFuncionario INTEGER  NOT NULL IDENTITY(1,1) PRIMARY KEY,
  Descricao VARCHAR(255) NULL,
 
)

CREATE TABLE SisTipoEquipamento (
  CodigoTipoEquipamento INTEGER  NOT NULL IDENTITY(1,1) PRIMARY KEY,
  Descricao INTEGER  NULL,
 
)

CREATE TABLE Cliente (
  ClienteId INTEGER  NOT NULL IDENTITY(1,1) PRIMARY KEY,
  Nome VARCHAR(200) NULL,
  CpfCnpj VARCHAR(15) NULL,
  EndBairro VARCHAR(200) NULL,
  EndCidade VARCHAR(200) NULL,
  EndEstado VARCHAR(200) NULL,
  EndLogradouro VARCHAR(200) NULL,
  EndNumero INTEGER  NULL,
  EndComplemento VARCHAR(200) NULL,
  EndCep VARCHAR(12) NULL,
  EndProntoRef VARCHAR(200) NULL,
  
)

CREATE TABLE Funcionario (
  FuncionarioId INTEGER  NOT NULL IDENTITY(1,1) PRIMARY KEY,
  Nome VARCHAR(255) NULL,
  Funcao VARCHAR(255) NULL,
  CodigoPerfilFuncionario INT,
  CONSTRAINT CodigoPerfilFuncionario
  FOREIGN KEY (CodigoPerfilFuncionario)
  REFERENCES SisPerfilFuncionario (CodigoPerfilFuncionario)
     
)

CREATE TABLE Equipamento (
  EquipamentoId INTEGER  NOT NULL IDENTITY(1,1) PRIMARY KEY,
  ClienteId INTEGER  NOT NULL,
  CodigoTipoEquipamento INTEGER  NOT NULL,
  Nome VARCHAR(200) NULL,
  Modelo VARCHAR(200) NULL,
  Tipo VARCHAR(200) NULL,
  DataUltimaVisita DATE NULL,
  DataProximaVisita DATE NULL,
  Estado VARCHAR(100) NULL,

  CONSTRAINT ClienteId
  FOREIGN KEY (ClienteId)
  REFERENCES Cliente (ClienteId),

  CONSTRAINT CodigoTipoEquipamento
  FOREIGN KEY (CodigoTipoEquipamento)
  REFERENCES SisTipoEquipamento (CodigoTipoEquipamento),

  
    
);

CREATE TABLE OrdemServico (
  OrdemServicoId INTEGER  NOT NULL IDENTITY(1,1) PRIMARY KEY,
  FKFuncionarioId INTEGER  ,
  FKEquipamentoId INTEGER ,
  FKClienteId INTEGER  ,
  Titulo VARCHAR(255) NULL,
  DataChamado DATE NULL,
  Periodo VARCHAR(255) NULL,
  Pago BIT NULL,
  DataAtendimento DATE NULL,
  NumeroOS INTEGER  NULL,
  Descricao VARCHAR(255) NULL,
  AvariaPreExistente VARCHAR(255) NULL,
  ParecerTecnico VARCHAR(255) NULL,
  PrecoPecas FLOAT NULL,
  PrecoMaoObra FLOAT NULL,
  PrecoTotal FLOAT NULL,
  Desconto FLOAT NULL,
  PQLocalLimpo BIT NULL,
  PQCompriuHorario BIT NULL,
  PQDuvidasEsclarecidas BIT NULL,

  CONSTRAINT FKFuncionarioId
  FOREIGN KEY (FKFuncionarioId)
  REFERENCES Funcionario (FuncionarioId),
  
  CONSTRAINT FKEquipamentoId
  FOREIGN KEY (FKEquipamentoId)
  REFERENCES Equipamento (EquipamentoId),

  CONSTRAINT FKClienteId
  FOREIGN KEY (FKClienteId)
  REFERENCES Cliente (ClienteId)
     
);

