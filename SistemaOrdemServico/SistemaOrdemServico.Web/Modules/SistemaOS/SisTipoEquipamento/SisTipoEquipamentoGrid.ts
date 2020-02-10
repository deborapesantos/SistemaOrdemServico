
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class SisTipoEquipamentoGrid extends Serenity.EntityGrid<SisTipoEquipamentoRow, any> {
        protected getColumnsKey() { return 'SistemaOS.SisTipoEquipamento'; }
        protected getDialogType() { return SisTipoEquipamentoDialog; }
        protected getIdProperty() { return SisTipoEquipamentoRow.idProperty; }
        protected getLocalTextPrefix() { return SisTipoEquipamentoRow.localTextPrefix; }
        protected getService() { return SisTipoEquipamentoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}