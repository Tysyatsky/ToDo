using Microsoft.EntityFrameworkCore;
using ToDoList.DAL.Context;
using ToDoList.DAL.Interfaces;
using ToDoList.DAL.Models;

namespace ToDoList.DAL.Repository
{
    public class ToDoRepository : IToDoRepository
    {
        private readonly ToDoDbContext _dbContext;

        public ToDoRepository(ToDoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Create(ToDo toDo)
        {
            _dbContext.Add(toDo);
            await _dbContext.SaveChangesAsync();
        }

        public async Task Delete(ToDo toDo)
        {
            _dbContext.Remove(toDo);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<ToDo> Get(int? id)
        {
            return await _dbContext.ToDos.FirstOrDefaultAsync(x => x.Id == id);
        }

        public ICollection<ToDo> GetAll()
        {
            return _dbContext.ToDos.Select(x => x).ToList();
        }

        public async Task Update(ToDo toDo)
        {
            _dbContext.Update(toDo);
            await _dbContext.SaveChangesAsync();
        }
    }
}
