namespace SistemaOrdemServico.SistemaOS {
    export interface SisPerfilFuncionarioForm {
        Descricao: Serenity.StringEditor;
    }

    export class SisPerfilFuncionarioForm extends Serenity.PrefixedContext {
        static formKey = 'SistemaOS.SisPerfilFuncionario';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SisPerfilFuncionarioForm.init)  {
                SisPerfilFuncionarioForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SisPerfilFuncionarioForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

