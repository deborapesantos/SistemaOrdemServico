﻿
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class EquipamentoGrid extends Serenity.EntityGrid<EquipamentoRow, any> {
        protected getColumnsKey() { return 'SistemaOS.Equipamento'; }
        protected getDialogType() { return EquipamentoDialog; }
        protected getIdProperty() { return EquipamentoRow.idProperty; }
        protected getLocalTextPrefix() { return EquipamentoRow.localTextPrefix; }
        protected getService() { return EquipamentoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}