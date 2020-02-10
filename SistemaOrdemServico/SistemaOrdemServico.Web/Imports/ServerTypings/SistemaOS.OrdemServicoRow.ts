namespace SistemaOrdemServico.SistemaOS {
    export interface OrdemServicoRow {
        OrdemServicoId?: number;
        FkFuncionarioId?: number;
        FkEquipamentoId?: number;
        FkClienteId?: number;
        Titulo?: string;
        DataChamado?: string;
        Periodo?: string;
        Pago?: boolean;
        DataAtendimento?: string;
        NumeroOs?: number;
        Descricao?: string;
        AvariaPreExistente?: string;
        ParecerTecnico?: string;
        PrecoPecas?: number;
        PrecoMaoObra?: number;
        PrecoTotal?: number;
        Desconto?: number;
        PqLocalLimpo?: boolean;
        PqCompriuHorario?: boolean;
        PqDuvidasEsclarecidas?: boolean;
        FkFuncionarioNome?: string;
        FkFuncionarioFuncao?: string;
        FkFuncionarioCodigoPerfilFuncionario?: number;
        FkEquipamentoClienteId?: number;
        FkEquipamentoCodigoTipoEquipamento?: number;
        FkEquipamentoNome?: string;
        FkEquipamentoModelo?: string;
        FkEquipamentoTipo?: string;
        FkEquipamentoDataUltimaVisita?: string;
        FkEquipamentoDataProximaVisita?: string;
        FkEquipamentoEstado?: string;
        FkClienteNome?: string;
        FkClienteCpfCnpj?: string;
        FkClienteEndBairro?: string;
        FkClienteEndCidade?: string;
        FkClienteEndEstado?: string;
        FkClienteEndLogradouro?: string;
        FkClienteEndNumero?: number;
        FkClienteEndComplemento?: string;
        FkClienteEndCep?: string;
        FkClienteEndProntoRef?: string;
    }

    export namespace OrdemServicoRow {
        export const idProperty = 'OrdemServicoId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'SistemaOS.OrdemServico';

        export declare const enum Fields {
            OrdemServicoId = "OrdemServicoId",
            FkFuncionarioId = "FkFuncionarioId",
            FkEquipamentoId = "FkEquipamentoId",
            FkClienteId = "FkClienteId",
            Titulo = "Titulo",
            DataChamado = "DataChamado",
            Periodo = "Periodo",
            Pago = "Pago",
            DataAtendimento = "DataAtendimento",
            NumeroOs = "NumeroOs",
            Descricao = "Descricao",
            AvariaPreExistente = "AvariaPreExistente",
            ParecerTecnico = "ParecerTecnico",
            PrecoPecas = "PrecoPecas",
            PrecoMaoObra = "PrecoMaoObra",
            PrecoTotal = "PrecoTotal",
            Desconto = "Desconto",
            PqLocalLimpo = "PqLocalLimpo",
            PqCompriuHorario = "PqCompriuHorario",
            PqDuvidasEsclarecidas = "PqDuvidasEsclarecidas",
            FkFuncionarioNome = "FkFuncionarioNome",
            FkFuncionarioFuncao = "FkFuncionarioFuncao",
            FkFuncionarioCodigoPerfilFuncionario = "FkFuncionarioCodigoPerfilFuncionario",
            FkEquipamentoClienteId = "FkEquipamentoClienteId",
            FkEquipamentoCodigoTipoEquipamento = "FkEquipamentoCodigoTipoEquipamento",
            FkEquipamentoNome = "FkEquipamentoNome",
            FkEquipamentoModelo = "FkEquipamentoModelo",
            FkEquipamentoTipo = "FkEquipamentoTipo",
            FkEquipamentoDataUltimaVisita = "FkEquipamentoDataUltimaVisita",
            FkEquipamentoDataProximaVisita = "FkEquipamentoDataProximaVisita",
            FkEquipamentoEstado = "FkEquipamentoEstado",
            FkClienteNome = "FkClienteNome",
            FkClienteCpfCnpj = "FkClienteCpfCnpj",
            FkClienteEndBairro = "FkClienteEndBairro",
            FkClienteEndCidade = "FkClienteEndCidade",
            FkClienteEndEstado = "FkClienteEndEstado",
            FkClienteEndLogradouro = "FkClienteEndLogradouro",
            FkClienteEndNumero = "FkClienteEndNumero",
            FkClienteEndComplemento = "FkClienteEndComplemento",
            FkClienteEndCep = "FkClienteEndCep",
            FkClienteEndProntoRef = "FkClienteEndProntoRef"
        }
    }
}

