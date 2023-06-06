namespace ToDoList.DAL.Models
{
    public class ToDoStoreDatabaseSettings : IToDoStoreDatabaseSettings
    {
        public string ToDoCollectionName { get; set; } = string.Empty;
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
    }
}
