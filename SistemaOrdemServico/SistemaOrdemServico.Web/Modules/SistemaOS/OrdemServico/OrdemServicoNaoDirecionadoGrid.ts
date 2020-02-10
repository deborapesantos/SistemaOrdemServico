
namespace SistemaOrdemServico.SistemaOS {
    import fld = SistemaOrdemServico.SistemaOS.OrdemServicoRow.Fields;
   
    @Serenity.Decorators.registerClass()
    export class OrdemServicoNaoDirecionadoGrid extends Serenity.EntityGrid<OrdemServicoRow, any> {
        protected getColumnsKey() { return 'SistemaOS.OrdemServico'; }
        protected getDialogType() { return OrdemServicoDialog; }
        protected getIdProperty() { return OrdemServicoRow.idProperty; }
        protected getLocalTextPrefix() { return OrdemServicoRow.localTextPrefix; }
        protected getService() { return OrdemServicoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit())
                return false;

            var request = this.view.params as Serenity.ListRequest;
            

            request.Criteria = Serenity.Criteria.and(
                request.Criteria,
                [[fld.AvariaPreExistente], '=', "aguardandoFunc"]
            );
            return true;
        }
    }
}