namespace SistemaOrdemServico.SistemaOS {
    export interface FuncionarioForm {
        Nome: Serenity.StringEditor;
        Funcao: Serenity.StringEditor;
        CodigoPerfilFuncionario: Serenity.LookupEditor;
        Email: Serenity.StringEditor;
        Cpf: Serenity.StringEditor;
    }

    export class FuncionarioForm extends Serenity.PrefixedContext {
        static formKey = 'SistemaOS.Funcionario';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FuncionarioForm.init)  {
                FuncionarioForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(FuncionarioForm, [
                    'Nome', w0,
                    'Funcao', w0,
                    'CodigoPerfilFuncionario', w1,
                    'Email', w0,
                    'Cpf', w0
                ]);
            }
        }
    }
}

