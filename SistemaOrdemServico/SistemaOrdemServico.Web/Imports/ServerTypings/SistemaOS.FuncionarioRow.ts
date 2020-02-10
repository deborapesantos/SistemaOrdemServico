namespace SistemaOrdemServico.SistemaOS {
    export interface FuncionarioRow {
        FuncionarioId?: number;
        Nome?: string;
        Funcao?: string;
        CodigoPerfilFuncionario?: number;
        Cpf?: string;
        Email?: string;
        UserId?: number;
        CodigoPerfilFuncionarioDescricao?: string;
    }

    export namespace FuncionarioRow {
        export const idProperty = 'FuncionarioId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'SistemaOS.Funcionario';
        export const lookupKey = 'SistemaOS.Funcionario';

        export function getLookup(): Q.Lookup<FuncionarioRow> {
            return Q.getLookup<FuncionarioRow>('SistemaOS.Funcionario');
        }

        export declare const enum Fields {
            FuncionarioId = "FuncionarioId",
            Nome = "Nome",
            Funcao = "Funcao",
            CodigoPerfilFuncionario = "CodigoPerfilFuncionario",
            Cpf = "Cpf",
            Email = "Email",
            UserId = "UserId",
            CodigoPerfilFuncionarioDescricao = "CodigoPerfilFuncionarioDescricao"
        }
    }
}

