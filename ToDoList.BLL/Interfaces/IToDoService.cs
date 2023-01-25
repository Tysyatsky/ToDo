using Microsoft.AspNetCore.JsonPatch;
using ToDoList.DAL.Models;

namespace ToDoList.BLL.Interfaces
{
    public interface IToDoService
    {
        Task Create(ToDo toDo);
        ToDo UpdateStatus(int? id, State newState);
        Task<ToDo> Update(int id, ToDo newTodo);
        Task<ToDo> Get(int? id);
        Task Delete(int? id);
        ICollection<ToDo> GetAll();
    }
}
