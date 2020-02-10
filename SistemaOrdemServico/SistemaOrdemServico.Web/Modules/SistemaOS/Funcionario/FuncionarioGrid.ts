
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class FuncionarioGrid extends Serenity.EntityGrid<FuncionarioRow, any> {
        protected getColumnsKey() { return 'SistemaOS.Funcionario'; }
        protected getDialogType() { return FuncionarioDialog; }
        protected getIdProperty() { return FuncionarioRow.idProperty; }
        protected getLocalTextPrefix() { return FuncionarioRow.localTextPrefix; }
        protected getService() { return FuncionarioService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}