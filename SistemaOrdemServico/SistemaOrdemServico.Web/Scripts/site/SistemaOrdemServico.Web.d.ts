/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace SistemaOrdemServico.Administration {
}
declare namespace SistemaOrdemServico.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
}
declare namespace SistemaOrdemServico.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SistemaOrdemServico.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SistemaOrdemServico.Administration {
}
declare namespace SistemaOrdemServico.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SistemaOrdemServico.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SistemaOrdemServico.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SistemaOrdemServico.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SistemaOrdemServico.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SistemaOrdemServico.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SistemaOrdemServico.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SistemaOrdemServico.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SistemaOrdemServico {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SistemaOrdemServico {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SistemaOrdemServico {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SistemaOrdemServico {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SistemaOrdemServico {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface ClienteForm {
        Nome: Serenity.StringEditor;
        CpfCnpj: Serenity.StringEditor;
        EndBairro: Serenity.StringEditor;
        EndCidade: Serenity.StringEditor;
        EndEstado: Serenity.StringEditor;
        EndLogradouro: Serenity.StringEditor;
        EndNumero: Serenity.IntegerEditor;
        EndComplemento: Serenity.StringEditor;
        EndCep: Serenity.StringEditor;
        EndProntoRef: Serenity.StringEditor;
    }
    class ClienteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface ClienteRow {
        ClienteId?: number;
        Nome?: string;
        CpfCnpj?: string;
        EndBairro?: string;
        EndCidade?: string;
        EndEstado?: string;
        EndLogradouro?: string;
        EndNumero?: number;
        EndComplemento?: string;
        EndCep?: string;
        EndProntoRef?: string;
    }
    namespace ClienteRow {
        const idProperty = "ClienteId";
        const nameProperty = "Nome";
        const localTextPrefix = "SistemaOS.Cliente";
        const lookupKey = "SistemaOS.Cliente";
        function getLookup(): Q.Lookup<ClienteRow>;
        const enum Fields {
            ClienteId = "ClienteId",
            Nome = "Nome",
            CpfCnpj = "CpfCnpj",
            EndBairro = "EndBairro",
            EndCidade = "EndCidade",
            EndEstado = "EndEstado",
            EndLogradouro = "EndLogradouro",
            EndNumero = "EndNumero",
            EndComplemento = "EndComplemento",
            EndCep = "EndCep",
            EndProntoRef = "EndProntoRef"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    namespace ClienteService {
        const baseUrl = "SistemaOS/Cliente";
        function Create(request: Serenity.SaveRequest<ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SistemaOS/Cliente/Create",
            Update = "SistemaOS/Cliente/Update",
            Delete = "SistemaOS/Cliente/Delete",
            Retrieve = "SistemaOS/Cliente/Retrieve",
            List = "SistemaOS/Cliente/List"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface EquipamentoForm {
        ClienteId: Serenity.LookupEditor;
        CodigoTipoEquipamento: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
        Modelo: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        DataUltimaVisita: Serenity.DateEditor;
        DataProximaVisita: Serenity.DateEditor;
        Estado: Serenity.StringEditor;
    }
    class EquipamentoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface EquipamentoRow {
        EquipamentoId?: number;
        ClienteId?: number;
        CodigoTipoEquipamento?: number;
        Nome?: string;
        Modelo?: string;
        Tipo?: string;
        DataUltimaVisita?: string;
        DataProximaVisita?: string;
        Estado?: string;
        ClienteNome?: string;
        ClienteCpfCnpj?: string;
        ClienteEndBairro?: string;
        ClienteEndCidade?: string;
        ClienteEndEstado?: string;
        ClienteEndLogradouro?: string;
        ClienteEndNumero?: number;
        ClienteEndComplemento?: string;
        ClienteEndCep?: string;
        ClienteEndProntoRef?: string;
        CodigoTipoEquipamentoDescricao?: number;
    }
    namespace EquipamentoRow {
        const idProperty = "EquipamentoId";
        const nameProperty = "Nome";
        const localTextPrefix = "SistemaOS.Equipamento";
        const lookupKey = "SistemaOS.Equipamento";
        function getLookup(): Q.Lookup<EquipamentoRow>;
        const enum Fields {
            EquipamentoId = "EquipamentoId",
            ClienteId = "ClienteId",
            CodigoTipoEquipamento = "CodigoTipoEquipamento",
            Nome = "Nome",
            Modelo = "Modelo",
            Tipo = "Tipo",
            DataUltimaVisita = "DataUltimaVisita",
            DataProximaVisita = "DataProximaVisita",
            Estado = "Estado",
            ClienteNome = "ClienteNome",
            ClienteCpfCnpj = "ClienteCpfCnpj",
            ClienteEndBairro = "ClienteEndBairro",
            ClienteEndCidade = "ClienteEndCidade",
            ClienteEndEstado = "ClienteEndEstado",
            ClienteEndLogradouro = "ClienteEndLogradouro",
            ClienteEndNumero = "ClienteEndNumero",
            ClienteEndComplemento = "ClienteEndComplemento",
            ClienteEndCep = "ClienteEndCep",
            ClienteEndProntoRef = "ClienteEndProntoRef",
            CodigoTipoEquipamentoDescricao = "CodigoTipoEquipamentoDescricao"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    namespace EquipamentoService {
        const baseUrl = "SistemaOS/Equipamento";
        function Create(request: Serenity.SaveRequest<EquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SistemaOS/Equipamento/Create",
            Update = "SistemaOS/Equipamento/Update",
            Delete = "SistemaOS/Equipamento/Delete",
            Retrieve = "SistemaOS/Equipamento/Retrieve",
            List = "SistemaOS/Equipamento/List"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface FuncionarioForm {
        Nome: Serenity.StringEditor;
        Funcao: Serenity.StringEditor;
        CodigoPerfilFuncionario: Serenity.LookupEditor;
        Email: Serenity.StringEditor;
        Cpf: Serenity.StringEditor;
    }
    class FuncionarioForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface FuncionarioRow {
        FuncionarioId?: number;
        Nome?: string;
        Funcao?: string;
        CodigoPerfilFuncionario?: number;
        Cpf?: string;
        Email?: string;
        UserId?: number;
        CodigoPerfilFuncionarioDescricao?: string;
    }
    namespace FuncionarioRow {
        const idProperty = "FuncionarioId";
        const nameProperty = "Nome";
        const localTextPrefix = "SistemaOS.Funcionario";
        const lookupKey = "SistemaOS.Funcionario";
        function getLookup(): Q.Lookup<FuncionarioRow>;
        const enum Fields {
            FuncionarioId = "FuncionarioId",
            Nome = "Nome",
            Funcao = "Funcao",
            CodigoPerfilFuncionario = "CodigoPerfilFuncionario",
            Cpf = "Cpf",
            Email = "Email",
            UserId = "UserId",
            CodigoPerfilFuncionarioDescricao = "CodigoPerfilFuncionarioDescricao"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    namespace FuncionarioService {
        const baseUrl = "SistemaOS/Funcionario";
        function Create(request: Serenity.SaveRequest<FuncionarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FuncionarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FuncionarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FuncionarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SistemaOS/Funcionario/Create",
            Update = "SistemaOS/Funcionario/Update",
            Delete = "SistemaOS/Funcionario/Delete",
            Retrieve = "SistemaOS/Funcionario/Retrieve",
            List = "SistemaOS/Funcionario/List"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface OrdemServicoForm {
        FkFuncionarioId: Serenity.LookupEditor;
        FkClienteId: Serenity.LookupEditor;
        FkEquipamentoId: Serenity.LookupEditor;
        Titulo: Serenity.StringEditor;
        Periodo: Serenity.StringEditor;
        DataAtendimento: Serenity.DateEditor;
        NumeroOs: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        ParecerTecnico: Serenity.StringEditor;
        PrecoPecas: Serenity.DecimalEditor;
        PrecoMaoObra: Serenity.DecimalEditor;
        PrecoTotal: Serenity.DecimalEditor;
        Desconto: Serenity.DecimalEditor;
        Pago: Serenity.BooleanEditor;
    }
    class OrdemServicoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface OrdemServicoNaoDirecionadoForm {
        FkFuncionarioId: Serenity.LookupEditor;
        Periodo: Serenity.StringEditor;
        DataAtendimento: Serenity.DateEditor;
    }
    class OrdemServicoNaoDirecionadoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface OrdemServicoRow {
        OrdemServicoId?: number;
        FkFuncionarioId?: number;
        FkEquipamentoId?: number;
        FkClienteId?: number;
        Titulo?: string;
        DataChamado?: string;
        Periodo?: string;
        Pago?: boolean;
        DataAtendimento?: string;
        NumeroOs?: number;
        Descricao?: string;
        AvariaPreExistente?: string;
        ParecerTecnico?: string;
        PrecoPecas?: number;
        PrecoMaoObra?: number;
        PrecoTotal?: number;
        Desconto?: number;
        PqLocalLimpo?: boolean;
        PqCompriuHorario?: boolean;
        PqDuvidasEsclarecidas?: boolean;
        FkFuncionarioNome?: string;
        FkFuncionarioFuncao?: string;
        FkFuncionarioCodigoPerfilFuncionario?: number;
        FkEquipamentoClienteId?: number;
        FkEquipamentoCodigoTipoEquipamento?: number;
        FkEquipamentoNome?: string;
        FkEquipamentoModelo?: string;
        FkEquipamentoTipo?: string;
        FkEquipamentoDataUltimaVisita?: string;
        FkEquipamentoDataProximaVisita?: string;
        FkEquipamentoEstado?: string;
        FkClienteNome?: string;
        FkClienteCpfCnpj?: string;
        FkClienteEndBairro?: string;
        FkClienteEndCidade?: string;
        FkClienteEndEstado?: string;
        FkClienteEndLogradouro?: string;
        FkClienteEndNumero?: number;
        FkClienteEndComplemento?: string;
        FkClienteEndCep?: string;
        FkClienteEndProntoRef?: string;
    }
    namespace OrdemServicoRow {
        const idProperty = "OrdemServicoId";
        const nameProperty = "Titulo";
        const localTextPrefix = "SistemaOS.OrdemServico";
        const enum Fields {
            OrdemServicoId = "OrdemServicoId",
            FkFuncionarioId = "FkFuncionarioId",
            FkEquipamentoId = "FkEquipamentoId",
            FkClienteId = "FkClienteId",
            Titulo = "Titulo",
            DataChamado = "DataChamado",
            Periodo = "Periodo",
            Pago = "Pago",
            DataAtendimento = "DataAtendimento",
            NumeroOs = "NumeroOs",
            Descricao = "Descricao",
            AvariaPreExistente = "AvariaPreExistente",
            ParecerTecnico = "ParecerTecnico",
            PrecoPecas = "PrecoPecas",
            PrecoMaoObra = "PrecoMaoObra",
            PrecoTotal = "PrecoTotal",
            Desconto = "Desconto",
            PqLocalLimpo = "PqLocalLimpo",
            PqCompriuHorario = "PqCompriuHorario",
            PqDuvidasEsclarecidas = "PqDuvidasEsclarecidas",
            FkFuncionarioNome = "FkFuncionarioNome",
            FkFuncionarioFuncao = "FkFuncionarioFuncao",
            FkFuncionarioCodigoPerfilFuncionario = "FkFuncionarioCodigoPerfilFuncionario",
            FkEquipamentoClienteId = "FkEquipamentoClienteId",
            FkEquipamentoCodigoTipoEquipamento = "FkEquipamentoCodigoTipoEquipamento",
            FkEquipamentoNome = "FkEquipamentoNome",
            FkEquipamentoModelo = "FkEquipamentoModelo",
            FkEquipamentoTipo = "FkEquipamentoTipo",
            FkEquipamentoDataUltimaVisita = "FkEquipamentoDataUltimaVisita",
            FkEquipamentoDataProximaVisita = "FkEquipamentoDataProximaVisita",
            FkEquipamentoEstado = "FkEquipamentoEstado",
            FkClienteNome = "FkClienteNome",
            FkClienteCpfCnpj = "FkClienteCpfCnpj",
            FkClienteEndBairro = "FkClienteEndBairro",
            FkClienteEndCidade = "FkClienteEndCidade",
            FkClienteEndEstado = "FkClienteEndEstado",
            FkClienteEndLogradouro = "FkClienteEndLogradouro",
            FkClienteEndNumero = "FkClienteEndNumero",
            FkClienteEndComplemento = "FkClienteEndComplemento",
            FkClienteEndCep = "FkClienteEndCep",
            FkClienteEndProntoRef = "FkClienteEndProntoRef"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    namespace OrdemServicoService {
        const baseUrl = "SistemaOS/OrdemServico";
        function Create(request: Serenity.SaveRequest<OrdemServicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrdemServicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrdemServicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrdemServicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SistemaOS/OrdemServico/Create",
            Update = "SistemaOS/OrdemServico/Update",
            Delete = "SistemaOS/OrdemServico/Delete",
            Retrieve = "SistemaOS/OrdemServico/Retrieve",
            List = "SistemaOS/OrdemServico/List"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface SisPerfilFuncionarioForm {
        Descricao: Serenity.StringEditor;
    }
    class SisPerfilFuncionarioForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface SisPerfilFuncionarioRow {
        CodigoPerfilFuncionario?: number;
        Descricao?: string;
    }
    namespace SisPerfilFuncionarioRow {
        const idProperty = "CodigoPerfilFuncionario";
        const nameProperty = "Descricao";
        const localTextPrefix = "SistemaOS.SisPerfilFuncionario";
        const lookupKey = "SistemaOS.SisPerfilFuncionario";
        function getLookup(): Q.Lookup<SisPerfilFuncionarioRow>;
        const enum Fields {
            CodigoPerfilFuncionario = "CodigoPerfilFuncionario",
            Descricao = "Descricao"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    namespace SisPerfilFuncionarioService {
        const baseUrl = "SistemaOS/SisPerfilFuncionario";
        function Create(request: Serenity.SaveRequest<SisPerfilFuncionarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SisPerfilFuncionarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SisPerfilFuncionarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SisPerfilFuncionarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SistemaOS/SisPerfilFuncionario/Create",
            Update = "SistemaOS/SisPerfilFuncionario/Update",
            Delete = "SistemaOS/SisPerfilFuncionario/Delete",
            Retrieve = "SistemaOS/SisPerfilFuncionario/Retrieve",
            List = "SistemaOS/SisPerfilFuncionario/List"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface SisTipoEquipamentoForm {
        Descricao: Serenity.IntegerEditor;
    }
    class SisTipoEquipamentoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    interface SisTipoEquipamentoRow {
        CodigoTipoEquipamento?: number;
        Descricao?: string;
    }
    namespace SisTipoEquipamentoRow {
        const idProperty = "CodigoTipoEquipamento";
        const nameProperty = "Descricao";
        const localTextPrefix = "SistemaOS.SisTipoEquipamento";
        const lookupKey = "SistemaOS.SisTipoEquipamento";
        function getLookup(): Q.Lookup<SisTipoEquipamentoRow>;
        const enum Fields {
            CodigoTipoEquipamento = "CodigoTipoEquipamento",
            Descricao = "Descricao"
        }
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    namespace SisTipoEquipamentoService {
        const baseUrl = "SistemaOS/SisTipoEquipamento";
        function Create(request: Serenity.SaveRequest<SisTipoEquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SisTipoEquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SisTipoEquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SisTipoEquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SistemaOS/SisTipoEquipamento/Create",
            Update = "SistemaOS/SisTipoEquipamento/Update",
            Delete = "SistemaOS/SisTipoEquipamento/Delete",
            Retrieve = "SistemaOS/SisTipoEquipamento/Retrieve",
            List = "SistemaOS/SisTipoEquipamento/List"
        }
    }
}
declare namespace SistemaOrdemServico.Texts {
}
declare namespace SistemaOrdemServico.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SistemaOrdemServico.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SistemaOrdemServico.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SistemaOrdemServico.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SistemaOrdemServico.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SistemaOrdemServico.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SistemaOrdemServico.LanguageList {
    function getValue(): string[][];
}
declare namespace SistemaOrdemServico.ScriptInitialization {
}
declare namespace SistemaOrdemServico {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SistemaOrdemServico.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SistemaOrdemServico.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SistemaOrdemServico.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SistemaOrdemServico.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SistemaOrdemServico.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace SistemaOrdemServico.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SistemaOrdemServico {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SistemaOrdemServico.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SistemaOrdemServico.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SistemaOrdemServico.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SistemaOrdemServico.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SistemaOrdemServico.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SistemaOrdemServico.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SistemaOrdemServico.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SistemaOrdemServico.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SistemaOrdemServico.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class ClienteDialog extends Serenity.EntityDialog<ClienteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClienteForm;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class ClienteGrid extends Serenity.EntityGrid<ClienteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClienteDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class EquipamentoDialog extends Serenity.EntityDialog<EquipamentoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EquipamentoForm;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class EquipamentoGrid extends Serenity.EntityGrid<EquipamentoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EquipamentoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class FuncionarioDialog extends Serenity.EntityDialog<FuncionarioRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FuncionarioForm;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class FuncionarioGrid extends Serenity.EntityGrid<FuncionarioRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FuncionarioDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class OrdemServicoDialog extends Serenity.EntityDialog<OrdemServicoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrdemServicoForm;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class OrdemServicoGrid extends Serenity.EntityGrid<OrdemServicoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrdemServicoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class OrdemServicoNaoDirecionadoDialog extends Serenity.EntityDialog<OrdemServicoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrdemServicoForm;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class OrdemServicoNaoDirecionadoGrid extends Serenity.EntityGrid<OrdemServicoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrdemServicoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class SisPerfilFuncionarioDialog extends Serenity.EntityDialog<SisPerfilFuncionarioRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SisPerfilFuncionarioForm;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class SisPerfilFuncionarioGrid extends Serenity.EntityGrid<SisPerfilFuncionarioRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SisPerfilFuncionarioDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class SisTipoEquipamentoDialog extends Serenity.EntityDialog<SisTipoEquipamentoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SisTipoEquipamentoForm;
    }
}
declare namespace SistemaOrdemServico.SistemaOS {
    class SisTipoEquipamentoGrid extends Serenity.EntityGrid<SisTipoEquipamentoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SisTipoEquipamentoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
