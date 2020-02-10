using Serenity.Navigation;
using MyPages = SistemaOrdemServico.SistemaOS.Pages;

[assembly: NavigationLink(int.MaxValue, "Cliente", typeof(MyPages.ClienteController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Equipamento", typeof(MyPages.EquipamentoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Funcionario", typeof(MyPages.FuncionarioController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ordem Servico", typeof(MyPages.OrdemServicoController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "SistemaOS/Sis Perfil Funcionario", typeof(MyPages.SisPerfilFuncionarioController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "SistemaOS/Sis Tipo Equipamento", typeof(MyPages.SisTipoEquipamentoController), icon: null)]