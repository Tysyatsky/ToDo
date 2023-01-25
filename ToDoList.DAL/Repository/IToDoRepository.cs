
using ToDoList.DAL.Models;

namespace ToDoList.DAL.Interfaces
{
    public interface IToDoRepository
    {
        public Task Create(ToDo toDo);
        public Task Update(ToDo toDo);
        public Task Delete(ToDo toDo);
        public Task<ToDo> Get(int? id);
        public ICollection<ToDo> GetAll();
    }
}
