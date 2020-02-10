
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class ClienteGrid extends Serenity.EntityGrid<ClienteRow, any> {
        protected getColumnsKey() { return 'SistemaOS.Cliente'; }
        protected getDialogType() { return ClienteDialog; }
        protected getIdProperty() { return ClienteRow.idProperty; }
        protected getLocalTextPrefix() { return ClienteRow.localTextPrefix; }
        protected getService() { return ClienteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}