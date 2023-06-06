
using ToDoList.DAL.Models;

namespace ToDoList.DAL.Interfaces
{
    public interface IToDoRepository
    {
        public Task<ToDo> Create(ToDo toDo);
        public Task Update(ToDo toDo);
        public Task Delete(ToDo toDo);
        public Task<ToDo> Get(string? id);
        public Task<ICollection<ToDo>> GetAll();
    }
}
