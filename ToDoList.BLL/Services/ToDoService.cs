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
                var todo = Get(id);
                if (todo == null)
                {
                    throw new ArgumentException(nameof(todo));
                }
                await _repository.Delete(todo);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ToDo Get(int? id)
        {
            var todo = _repository.Get(id);
            if (todo == null)
                throw new ArgumentException(nameof(todo));
            return todo;
        }

        public ICollection<ToDo> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task Update(ToDo toDo)
        {
            throw new NotImplementedException();
        }

        public Task UpdateStatus(int? id, State newState)
        {
            throw new NotImplementedException();
        }
    }
}
