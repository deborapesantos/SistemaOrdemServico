namespace SistemaOrdemServico.SistemaOS {
    export interface SisTipoEquipamentoForm {
        Descricao: Serenity.IntegerEditor;
    }

    export class SisTipoEquipamentoForm extends Serenity.PrefixedContext {
        static formKey = 'SistemaOS.SisTipoEquipamento';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SisTipoEquipamentoForm.init)  {
                SisTipoEquipamentoForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(SisTipoEquipamentoForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

