namespace SistemaOrdemServico.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace SistemaOS {

            namespace Cliente {
                export const ClienteId: string;
                export const CpfCnpj: string;
                export const EndBairro: string;
                export const EndCep: string;
                export const EndCidade: string;
                export const EndComplemento: string;
                export const EndEstado: string;
                export const EndLogradouro: string;
                export const EndNumero: string;
                export const EndProntoRef: string;
                export const Nome: string;
            }

            namespace Equipamento {
                export const ClienteCpfCnpj: string;
                export const ClienteEndBairro: string;
                export const ClienteEndCep: string;
                export const ClienteEndCidade: string;
                export const ClienteEndComplemento: string;
                export const ClienteEndEstado: string;
                export const ClienteEndLogradouro: string;
                export const ClienteEndNumero: string;
                export const ClienteEndProntoRef: string;
                export const ClienteId: string;
                export const ClienteNome: string;
                export const CodigoTipoEquipamento: string;
                export const CodigoTipoEquipamentoDescricao: string;
                export const DataProximaVisita: string;
                export const DataUltimaVisita: string;
                export const EquipamentoId: string;
                export const Estado: string;
                export const Modelo: string;
                export const Nome: string;
                export const Tipo: string;
            }

            namespace Funcionario {
                export const CodigoPerfilFuncionario: string;
                export const CodigoPerfilFuncionarioDescricao: string;
                export const Cpf: string;
                export const Email: string;
                export const Funcao: string;
                export const FuncionarioId: string;
                export const Nome: string;
                export const UserId: string;
            }

            namespace OrdemServico {
                export const AvariaPreExistente: string;
                export const DataAtendimento: string;
                export const DataChamado: string;
                export const Desconto: string;
                export const Descricao: string;
                export const FkClienteCpfCnpj: string;
                export const FkClienteEndBairro: string;
                export const FkClienteEndCep: string;
                export const FkClienteEndCidade: string;
                export const FkClienteEndComplemento: string;
                export const FkClienteEndEstado: string;
                export const FkClienteEndLogradouro: string;
                export const FkClienteEndNumero: string;
                export const FkClienteEndProntoRef: string;
                export const FkClienteId: string;
                export const FkClienteNome: string;
                export const FkEquipamentoClienteId: string;
                export const FkEquipamentoCodigoTipoEquipamento: string;
                export const FkEquipamentoDataProximaVisita: string;
                export const FkEquipamentoDataUltimaVisita: string;
                export const FkEquipamentoEstado: string;
                export const FkEquipamentoId: string;
                export const FkEquipamentoModelo: string;
                export const FkEquipamentoNome: string;
                export const FkEquipamentoTipo: string;
                export const FkFuncionarioCodigoPerfilFuncionario: string;
                export const FkFuncionarioFuncao: string;
                export const FkFuncionarioId: string;
                export const FkFuncionarioNome: string;
                export const NumeroOs: string;
                export const OrdemServicoId: string;
                export const Pago: string;
                export const ParecerTecnico: string;
                export const Periodo: string;
                export const PqCompriuHorario: string;
                export const PqDuvidasEsclarecidas: string;
                export const PqLocalLimpo: string;
                export const PrecoMaoObra: string;
                export const PrecoPecas: string;
                export const PrecoTotal: string;
                export const Titulo: string;
            }

            namespace SisPerfilFuncionario {
                export const CodigoPerfilFuncionario: string;
                export const Descricao: string;
            }

            namespace SisTipoEquipamento {
                export const CodigoTipoEquipamento: string;
                export const Descricao: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    SistemaOrdemServico['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},SistemaOS:{Cliente:{ClienteId:1,CpfCnpj:1,EndBairro:1,EndCep:1,EndCidade:1,EndComplemento:1,EndEstado:1,EndLogradouro:1,EndNumero:1,EndProntoRef:1,Nome:1},Equipamento:{ClienteCpfCnpj:1,ClienteEndBairro:1,ClienteEndCep:1,ClienteEndCidade:1,ClienteEndComplemento:1,ClienteEndEstado:1,ClienteEndLogradouro:1,ClienteEndNumero:1,ClienteEndProntoRef:1,ClienteId:1,ClienteNome:1,CodigoTipoEquipamento:1,CodigoTipoEquipamentoDescricao:1,DataProximaVisita:1,DataUltimaVisita:1,EquipamentoId:1,Estado:1,Modelo:1,Nome:1,Tipo:1},Funcionario:{CodigoPerfilFuncionario:1,CodigoPerfilFuncionarioDescricao:1,Cpf:1,Email:1,Funcao:1,FuncionarioId:1,Nome:1,UserId:1},OrdemServico:{AvariaPreExistente:1,DataAtendimento:1,DataChamado:1,Desconto:1,Descricao:1,FkClienteCpfCnpj:1,FkClienteEndBairro:1,FkClienteEndCep:1,FkClienteEndCidade:1,FkClienteEndComplemento:1,FkClienteEndEstado:1,FkClienteEndLogradouro:1,FkClienteEndNumero:1,FkClienteEndProntoRef:1,FkClienteId:1,FkClienteNome:1,FkEquipamentoClienteId:1,FkEquipamentoCodigoTipoEquipamento:1,FkEquipamentoDataProximaVisita:1,FkEquipamentoDataUltimaVisita:1,FkEquipamentoEstado:1,FkEquipamentoId:1,FkEquipamentoModelo:1,FkEquipamentoNome:1,FkEquipamentoTipo:1,FkFuncionarioCodigoPerfilFuncionario:1,FkFuncionarioFuncao:1,FkFuncionarioId:1,FkFuncionarioNome:1,NumeroOs:1,OrdemServicoId:1,Pago:1,ParecerTecnico:1,Periodo:1,PqCompriuHorario:1,PqDuvidasEsclarecidas:1,PqLocalLimpo:1,PrecoMaoObra:1,PrecoPecas:1,PrecoTotal:1,Titulo:1},SisPerfilFuncionario:{CodigoPerfilFuncionario:1,Descricao:1},SisTipoEquipamento:{CodigoTipoEquipamento:1,Descricao:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

