namespace SistemaOrdemServico.SistemaOS {
    export interface ClienteRow {
        ClienteId?: number;
        Nome?: string;
        CpfCnpj?: string;
        EndBairro?: string;
        EndCidade?: string;
        EndEstado?: string;
        EndLogradouro?: string;
        EndNumero?: number;
        EndComplemento?: string;
        EndCep?: string;
        EndProntoRef?: string;
    }

    export namespace ClienteRow {
        export const idProperty = 'ClienteId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'SistemaOS.Cliente';
        export const lookupKey = 'SistemaOS.Cliente';

        export function getLookup(): Q.Lookup<ClienteRow> {
            return Q.getLookup<ClienteRow>('SistemaOS.Cliente');
        }

        export declare const enum Fields {
            ClienteId = "ClienteId",
            Nome = "Nome",
            CpfCnpj = "CpfCnpj",
            EndBairro = "EndBairro",
            EndCidade = "EndCidade",
            EndEstado = "EndEstado",
            EndLogradouro = "EndLogradouro",
            EndNumero = "EndNumero",
            EndComplemento = "EndComplemento",
            EndCep = "EndCep",
            EndProntoRef = "EndProntoRef"
        }
    }
}

