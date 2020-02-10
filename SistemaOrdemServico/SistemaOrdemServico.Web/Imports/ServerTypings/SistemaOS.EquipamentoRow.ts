namespace SistemaOrdemServico.SistemaOS {
    export interface EquipamentoRow {
        EquipamentoId?: number;
        ClienteId?: number;
        CodigoTipoEquipamento?: number;
        Nome?: string;
        Modelo?: string;
        Tipo?: string;
        DataUltimaVisita?: string;
        DataProximaVisita?: string;
        Estado?: string;
        ClienteNome?: string;
        ClienteCpfCnpj?: string;
        ClienteEndBairro?: string;
        ClienteEndCidade?: string;
        ClienteEndEstado?: string;
        ClienteEndLogradouro?: string;
        ClienteEndNumero?: number;
        ClienteEndComplemento?: string;
        ClienteEndCep?: string;
        ClienteEndProntoRef?: string;
        CodigoTipoEquipamentoDescricao?: number;
    }

    export namespace EquipamentoRow {
        export const idProperty = 'EquipamentoId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'SistemaOS.Equipamento';
        export const lookupKey = 'SistemaOS.Equipamento';

        export function getLookup(): Q.Lookup<EquipamentoRow> {
            return Q.getLookup<EquipamentoRow>('SistemaOS.Equipamento');
        }

        export declare const enum Fields {
            EquipamentoId = "EquipamentoId",
            ClienteId = "ClienteId",
            CodigoTipoEquipamento = "CodigoTipoEquipamento",
            Nome = "Nome",
            Modelo = "Modelo",
            Tipo = "Tipo",
            DataUltimaVisita = "DataUltimaVisita",
            DataProximaVisita = "DataProximaVisita",
            Estado = "Estado",
            ClienteNome = "ClienteNome",
            ClienteCpfCnpj = "ClienteCpfCnpj",
            ClienteEndBairro = "ClienteEndBairro",
            ClienteEndCidade = "ClienteEndCidade",
            ClienteEndEstado = "ClienteEndEstado",
            ClienteEndLogradouro = "ClienteEndLogradouro",
            ClienteEndNumero = "ClienteEndNumero",
            ClienteEndComplemento = "ClienteEndComplemento",
            ClienteEndCep = "ClienteEndCep",
            ClienteEndProntoRef = "ClienteEndProntoRef",
            CodigoTipoEquipamentoDescricao = "CodigoTipoEquipamentoDescricao"
        }
    }
}

