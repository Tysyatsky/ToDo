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

        public async Task Delete(string? id)
        {
            var todo = await Get(id);
            if (todo == null)
            {
                throw new ArgumentException("Delete method error: Null todo");
            }
            await _repository.Delete(todo);
        }

        public async Task<ToDo> Get(string? id)
        {
            var todo = await _repository.Get(id);
            if (todo == null)
            {
                throw new ArgumentException("Get method error: Null todo");
            }
            return todo;
        }

        public async Task<ICollection<ToDo>> GetAll()
        {
            var result = await _repository.GetAll();
            if(result == null)
            {
                throw new ArgumentNullException("Get all method error: Null result");
            }
            return result;
        }

        public async Task<ToDo> Update(string id, ToDo newTodo)
        {
            var oldTodo = await Get(id);
            if (oldTodo == null || newTodo == null)
            {
                throw new ArgumentNullException("Update todo method error: Null todo");
            }

            oldTodo.Name = newTodo.Name;
            oldTodo.Description = newTodo.Description;
            oldTodo.State = newTodo.State;

            await _repository.Update(oldTodo);
            return oldTodo;
        }

        public ToDo UpdateStatus(string? id, State newState)
        {
            throw new NotImplementedException();
        }
    }
}
