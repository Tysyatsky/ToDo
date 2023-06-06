using MongoDB.Driver;
using ToDoList.DAL.Interfaces;
using ToDoList.DAL.Models;

namespace ToDoList.DAL.Repository
{
    public class ToDoRepository : IToDoRepository
    {
        private readonly IMongoCollection<ToDo> _todos;
        public ToDoRepository(IToDoStoreDatabaseSettings settings, IMongoClient client)
        {
            var database = client.GetDatabase(settings.DatabaseName);

            _todos = database.GetCollection<ToDo>(settings.ToDoCollectionName);
        }

        public async Task<ToDo> Create(ToDo toDo)
        {
            await _todos.InsertOneAsync(toDo);
            return toDo;
        }

        public async Task Delete(ToDo toDo)
        {
            await _todos.DeleteOneAsync(todo => todo.Id == toDo.Id);
        }

        public async Task<ToDo> Get(string? id)
        {
            var cursor = await _todos.FindAsync(todo => todo.Id == id);
            var todo = await cursor.FirstOrDefaultAsync();
            return todo;
        }

        public async Task<ICollection<ToDo>> GetAll()
        {
            return await _todos.Find(todo => true).ToListAsync();
        }

        public async Task Update(ToDo toDo)
        {
            await _todos.ReplaceOneAsync(todo => todo.Id == toDo.Id, toDo);
        }
    }
}
