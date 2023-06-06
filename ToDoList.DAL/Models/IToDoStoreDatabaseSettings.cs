namespace ToDoList.DAL.Models
{
    public interface IToDoStoreDatabaseSettings
    {
        public string ToDoCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
