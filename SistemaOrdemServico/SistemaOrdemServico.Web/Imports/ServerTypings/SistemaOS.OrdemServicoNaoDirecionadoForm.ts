namespace SistemaOrdemServico.SistemaOS {
    export interface OrdemServicoNaoDirecionadoForm {
        FkFuncionarioId: Serenity.LookupEditor;
        Periodo: Serenity.StringEditor;
        DataAtendimento: Serenity.DateEditor;
    }

    export class OrdemServicoNaoDirecionadoForm extends Serenity.PrefixedContext {
        static formKey = 'SistemaOS.OrdemServico';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdemServicoNaoDirecionadoForm.init)  {
                OrdemServicoNaoDirecionadoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(OrdemServicoNaoDirecionadoForm, [
                    'FkFuncionarioId', w0,
                    'Periodo', w1,
                    'DataAtendimento', w2
                ]);
            }
        }
    }
}

