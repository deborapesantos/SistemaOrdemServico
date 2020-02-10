
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class SisPerfilFuncionarioGrid extends Serenity.EntityGrid<SisPerfilFuncionarioRow, any> {
        protected getColumnsKey() { return 'SistemaOS.SisPerfilFuncionario'; }
        protected getDialogType() { return SisPerfilFuncionarioDialog; }
        protected getIdProperty() { return SisPerfilFuncionarioRow.idProperty; }
        protected getLocalTextPrefix() { return SisPerfilFuncionarioRow.localTextPrefix; }
        protected getService() { return SisPerfilFuncionarioService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}