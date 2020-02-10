
namespace SistemaOrdemServico.SistemaOS {
    
    @Serenity.Decorators.registerClass()
    export class OrdemServicoNaoDirecionadoDialog extends Serenity.EntityDialog<OrdemServicoRow, any> {
        protected getFormKey() { return OrdemServicoNaoDirecionadoForm.formKey; }
        protected getIdProperty() { return OrdemServicoRow.idProperty; }
        protected getLocalTextPrefix() { return OrdemServicoRow.localTextPrefix; }
        protected getNameProperty() { return OrdemServicoRow.nameProperty; }
        protected getService() { return OrdemServicoService.baseUrl; }

        protected form = new OrdemServicoForm(this.idPrefix);

    }
}