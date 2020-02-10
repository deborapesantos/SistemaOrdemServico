
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class OrdemServicoGrid extends Serenity.EntityGrid<OrdemServicoRow, any> {
        protected getColumnsKey() { return 'SistemaOS.OrdemServico'; }
        protected getDialogType() { return OrdemServicoDialog; }
        protected getIdProperty() { return OrdemServicoRow.idProperty; }
        protected getLocalTextPrefix() { return OrdemServicoRow.localTextPrefix; }
        protected getService() { return OrdemServicoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}