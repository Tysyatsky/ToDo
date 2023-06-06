using Microsoft.AspNetCore.JsonPatch;
using ToDoList.DAL.Models;

namespace ToDoList.BLL.Interfaces
{
    public interface IToDoService
    {
        Task Create(ToDo toDo);
        ToDo UpdateStatus(string? id, State newState);
        Task<ToDo> Update(string id, ToDo newTodo);
        Task<ToDo> Get(string? id);
        Task Delete(string? id);
        Task<ICollection<ToDo>> GetAll();
    }
}
