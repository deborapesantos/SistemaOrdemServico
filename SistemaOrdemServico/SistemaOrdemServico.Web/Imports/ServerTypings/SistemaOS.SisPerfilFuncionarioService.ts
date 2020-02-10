namespace SistemaOrdemServico.SistemaOS {
    export namespace SisPerfilFuncionarioService {
        export const baseUrl = 'SistemaOS/SisPerfilFuncionario';

        export declare function Create(request: Serenity.SaveRequest<SisPerfilFuncionarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SisPerfilFuncionarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SisPerfilFuncionarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SisPerfilFuncionarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "SistemaOS/SisPerfilFuncionario/Create",
            Update = "SistemaOS/SisPerfilFuncionario/Update",
            Delete = "SistemaOS/SisPerfilFuncionario/Delete",
            Retrieve = "SistemaOS/SisPerfilFuncionario/Retrieve",
            List = "SistemaOS/SisPerfilFuncionario/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SisPerfilFuncionarioService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

