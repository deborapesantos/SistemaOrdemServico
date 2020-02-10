namespace SistemaOrdemServico.SistemaOS {
    export interface SisTipoEquipamentoRow {
        CodigoTipoEquipamento?: number;
        Descricao?: string;
    }

    export namespace SisTipoEquipamentoRow {
        export const idProperty = 'CodigoTipoEquipamento';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'SistemaOS.SisTipoEquipamento';
        export const lookupKey = 'SistemaOS.SisTipoEquipamento';

        export function getLookup(): Q.Lookup<SisTipoEquipamentoRow> {
            return Q.getLookup<SisTipoEquipamentoRow>('SistemaOS.SisTipoEquipamento');
        }

        export declare const enum Fields {
            CodigoTipoEquipamento = "CodigoTipoEquipamento",
            Descricao = "Descricao"
        }
    }
}

