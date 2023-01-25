using Microsoft.AspNetCore.JsonPatch;
using ToDoList.BLL.Interfaces;
using ToDoList.DAL.Interfaces;
using ToDoList.DAL.Models;

namespace ToDoList.BLL.Services
{
    public class ToDoService : IToDoService
    {
        private readonly IToDoRepository _repository;

        public ToDoService(IToDoRepository repository)
        {
            _repository = repository;
        }

        public async Task Create(ToDo toDo)
        {
            await _repository.Create(toDo);
        }

        public async Task Delete(int? id)
        {
            try
            {
                var todo = await Get(id);
                if (todo == null)
                {
                    throw new ArgumentException("Delete method error: Null todo");
                }
                await _repository.Delete(todo);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ToDo> Get(int? id)
        {
            var todo = await _repository.Get(id);
            if (todo == null)
                throw new ArgumentException("Get method error: Null todo");
            return todo;
        }

        public ICollection<ToDo> GetAll()
        {
            var result = _repository.GetAll();
            if(result == null)
            {
                throw new ArgumentNullException("Get all method error: Null result");
            }
            return result;
        }

        public async Task<ToDo> Update(int id, ToDo newTodo)
        {
            try
            {
                var oldTodo = await Get(id);
                if (oldTodo == null)
                    throw new ArgumentNullException("Update todo method error: Null todo");

                oldTodo.Name = newTodo.Name;
                oldTodo.Description = newTodo.Description;
                oldTodo.State = newTodo.State;

                await _repository.Update(oldTodo);
                return oldTodo;
            }
            catch (ArgumentNullException)
            {
                throw;
            }
        }

        public ToDo UpdateStatus(int? id, State newState)
        {
            throw new NotImplementedException();
        }
    }
}
