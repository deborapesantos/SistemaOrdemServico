
namespace SistemaOrdemServico.SistemaOS {

    @Serenity.Decorators.registerClass()
    export class SisTipoEquipamentoDialog extends Serenity.EntityDialog<SisTipoEquipamentoRow, any> {
        protected getFormKey() { return SisTipoEquipamentoForm.formKey; }
        protected getIdProperty() { return SisTipoEquipamentoRow.idProperty; }
        protected getLocalTextPrefix() { return SisTipoEquipamentoRow.localTextPrefix; }
        protected getService() { return SisTipoEquipamentoService.baseUrl; }

        protected form = new SisTipoEquipamentoForm(this.idPrefix);

    }
}