namespace SistemaOrdemServico.SistemaOS {
    export interface EquipamentoForm {
        ClienteId: Serenity.LookupEditor;
        CodigoTipoEquipamento: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
        Modelo: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        DataUltimaVisita: Serenity.DateEditor;
        DataProximaVisita: Serenity.DateEditor;
        Estado: Serenity.StringEditor;
    }

    export class EquipamentoForm extends Serenity.PrefixedContext {
        static formKey = 'SistemaOS.Equipamento';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EquipamentoForm.init)  {
                EquipamentoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(EquipamentoForm, [
                    'ClienteId', w0,
                    'CodigoTipoEquipamento', w0,
                    'Nome', w1,
                    'Modelo', w1,
                    'Tipo', w1,
                    'DataUltimaVisita', w2,
                    'DataProximaVisita', w2,
                    'Estado', w1
                ]);
            }
        }
    }
}

