namespace SistemaOrdemServico.SistemaOS {
    export namespace SisTipoEquipamentoService {
        export const baseUrl = 'SistemaOS/SisTipoEquipamento';

        export declare function Create(request: Serenity.SaveRequest<SisTipoEquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SisTipoEquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SisTipoEquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SisTipoEquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "SistemaOS/SisTipoEquipamento/Create",
            Update = "SistemaOS/SisTipoEquipamento/Update",
            Delete = "SistemaOS/SisTipoEquipamento/Delete",
            Retrieve = "SistemaOS/SisTipoEquipamento/Retrieve",
            List = "SistemaOS/SisTipoEquipamento/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SisTipoEquipamentoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

