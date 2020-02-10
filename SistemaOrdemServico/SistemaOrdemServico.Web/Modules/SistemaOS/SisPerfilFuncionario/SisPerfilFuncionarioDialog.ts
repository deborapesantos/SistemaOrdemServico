
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class SisPerfilFuncionarioDialog extends Serenity.EntityDialog<SisPerfilFuncionarioRow, any> {
        protected getFormKey() { return SisPerfilFuncionarioForm.formKey; }
        protected getIdProperty() { return SisPerfilFuncionarioRow.idProperty; }
        protected getLocalTextPrefix() { return SisPerfilFuncionarioRow.localTextPrefix; }
        protected getNameProperty() { return SisPerfilFuncionarioRow.nameProperty; }
        protected getService() { return SisPerfilFuncionarioService.baseUrl; }

        protected form = new SisPerfilFuncionarioForm(this.idPrefix);

    }
}