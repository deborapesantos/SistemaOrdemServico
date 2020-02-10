
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class FuncionarioDialog extends Serenity.EntityDialog<FuncionarioRow, any> {
        protected getFormKey() { return FuncionarioForm.formKey; }
        protected getIdProperty() { return FuncionarioRow.idProperty; }
        protected getLocalTextPrefix() { return FuncionarioRow.localTextPrefix; }
        protected getNameProperty() { return FuncionarioRow.nameProperty; }
        protected getService() { return FuncionarioService.baseUrl; }

        protected form = new FuncionarioForm(this.idPrefix);

    }
}