namespace SistemaOrdemServico.SistemaOS {
    export interface ClienteForm {
        Nome: Serenity.StringEditor;
        CpfCnpj: Serenity.StringEditor;
        EndBairro: Serenity.StringEditor;
        EndCidade: Serenity.StringEditor;
        EndEstado: Serenity.StringEditor;
        EndLogradouro: Serenity.StringEditor;
        EndNumero: Serenity.IntegerEditor;
        EndComplemento: Serenity.StringEditor;
        EndCep: Serenity.StringEditor;
        EndProntoRef: Serenity.StringEditor;
    }

    export class ClienteForm extends Serenity.PrefixedContext {
        static formKey = 'SistemaOS.Cliente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClienteForm.init)  {
                ClienteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ClienteForm, [
                    'Nome', w0,
                    'CpfCnpj', w0,
                    'EndBairro', w0,
                    'EndCidade', w0,
                    'EndEstado', w0,
                    'EndLogradouro', w0,
                    'EndNumero', w1,
                    'EndComplemento', w0,
                    'EndCep', w0,
                    'EndProntoRef', w0
                ]);
            }
        }
    }
}

