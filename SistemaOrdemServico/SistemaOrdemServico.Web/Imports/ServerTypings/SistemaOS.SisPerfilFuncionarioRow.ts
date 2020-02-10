namespace SistemaOrdemServico.SistemaOS {
    export interface SisPerfilFuncionarioRow {
        CodigoPerfilFuncionario?: number;
        Descricao?: string;
    }

    export namespace SisPerfilFuncionarioRow {
        export const idProperty = 'CodigoPerfilFuncionario';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'SistemaOS.SisPerfilFuncionario';
        export const lookupKey = 'SistemaOS.SisPerfilFuncionario';

        export function getLookup(): Q.Lookup<SisPerfilFuncionarioRow> {
            return Q.getLookup<SisPerfilFuncionarioRow>('SistemaOS.SisPerfilFuncionario');
        }

        export declare const enum Fields {
            CodigoPerfilFuncionario = "CodigoPerfilFuncionario",
            Descricao = "Descricao"
        }
    }
}

