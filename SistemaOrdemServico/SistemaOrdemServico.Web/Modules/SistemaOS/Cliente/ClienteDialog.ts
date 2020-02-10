
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class ClienteDialog extends Serenity.EntityDialog<ClienteRow, any> {
        protected getFormKey() { return ClienteForm.formKey; }
        protected getIdProperty() { return ClienteRow.idProperty; }
        protected getLocalTextPrefix() { return ClienteRow.localTextPrefix; }
        protected getNameProperty() { return ClienteRow.nameProperty; }
        protected getService() { return ClienteService.baseUrl; }

        protected form = new ClienteForm(this.idPrefix);

    }
}