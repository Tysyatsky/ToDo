using ToDoList.DAL.Models;

namespace ToDoList.BLL.Interfaces
{
    public interface IToDoService
    {
        Task Create(ToDo toDo);
        Task UpdateStatus(int? id, State newState);
        Task Update(ToDo toDo);
        ToDo Get(int? id);
        Task Delete(int? id);
        ICollection<ToDo> GetAll();
    }
}
