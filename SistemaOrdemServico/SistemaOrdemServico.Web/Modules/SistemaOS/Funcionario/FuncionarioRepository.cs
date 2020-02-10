
namespace SistemaOrdemServico.SistemaOS.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using SistemaOrdemServico.Administration;
    using SistemaOrdemServico.Administration.Repositories;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.FuncionarioRow;

    public class FuncionarioRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {
                  
                    //var cnpj = Row.Cpf;

                    //cnpj = new string(cnpj.Where(char.IsDigit).ToArray());


                    //SaveRequest<Administration.Entities.UserRow> usuario = new SaveRequest<Administration.Entities.UserRow>();
                    //usuario.Entity = new Administration.Entities.UserRow();
                    //usuario.Entity.DisplayName = Row.Nome;
                    //usuario.Entity.Password = Row.Cpf;
                    //usuario.Entity.Email = Row.Email;
                    //usuario.Entity.Password = cnpj;
                    //usuario.Entity.Username = Row.Email;
                    //usuario.Entity.IsActive = 1;

                    //SaveResponse saveResponse = new UserRepository().Create(UnitOfWork, usuario);

                    //var perfil = 0;

                    //if (Row.CodigoPerfilFuncionario == 1)
                    //{
                    //    perfil = 2;

                    //}
                    //else if (Row.CodigoPerfilFuncionario == 2)
                    //{
                    //    perfil = 3;
                    //}
                    //else if (Row.CodigoPerfilFuncionario == 3)
                    //{
                    //    perfil = 1;
                    //}



                    //var user = new UserRepository().Retrieve(UnitOfWork.Connection, new RetrieveRequest()
                    //{
                    //    EntityId = Int32.Parse(saveResponse.EntityId.ToString())
                    //});

                    //if (user.Entity.UserId > 0)
                    //{
                    //    new UserRoleRepository().Update(UnitOfWork, new UserRoleUpdateRequest() { UserID = Row.UserId, Roles = new List<int>(new int[] { perfil }) });
                    //}
                    //Row.UserId = user.Entity.UserId;
                }
            }

            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (IsCreate)
                {
                   
                  

                }
                
            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}