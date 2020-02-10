namespace SistemaOrdemServico.SistemaOS {
    export interface OrdemServicoForm {
        FkFuncionarioId: Serenity.LookupEditor;
        FkClienteId: Serenity.LookupEditor;
        FkEquipamentoId: Serenity.LookupEditor;
        Titulo: Serenity.StringEditor;
        Periodo: Serenity.StringEditor;
        DataAtendimento: Serenity.DateEditor;
        NumeroOs: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        ParecerTecnico: Serenity.StringEditor;
        PrecoPecas: Serenity.DecimalEditor;
        PrecoMaoObra: Serenity.DecimalEditor;
        PrecoTotal: Serenity.DecimalEditor;
        Desconto: Serenity.DecimalEditor;
        Pago: Serenity.BooleanEditor;
    }

    export class OrdemServicoForm extends Serenity.PrefixedContext {
        static formKey = 'SistemaOS.OrdemServico';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdemServicoForm.init)  {
                OrdemServicoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(OrdemServicoForm, [
                    'FkFuncionarioId', w0,
                    'FkClienteId', w0,
                    'FkEquipamentoId', w0,
                    'Titulo', w1,
                    'Periodo', w1,
                    'DataAtendimento', w2,
                    'NumeroOs', w3,
                    'Descricao', w1,
                    'ParecerTecnico', w1,
                    'PrecoPecas', w4,
                    'PrecoMaoObra', w4,
                    'PrecoTotal', w4,
                    'Desconto', w4,
                    'Pago', w5
                ]);
            }
        }
    }
}

