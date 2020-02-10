
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class OrdemServicoDialog extends Serenity.EntityDialog<OrdemServicoRow, any> {
        protected getFormKey() { return OrdemServicoForm.formKey; }
        protected getIdProperty() { return OrdemServicoRow.idProperty; }
        protected getLocalTextPrefix() { return OrdemServicoRow.localTextPrefix; }
        protected getNameProperty() { return OrdemServicoRow.nameProperty; }
        protected getService() { return OrdemServicoService.baseUrl; }

        protected form = new OrdemServicoForm(this.idPrefix);

    }
}