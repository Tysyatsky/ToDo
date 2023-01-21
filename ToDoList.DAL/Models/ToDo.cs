namespace ToDoList.DAL.Models
{
    public enum State
    {
        New,
        InProgress,
        Done
    }
    public class ToDo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public State Type { get; set; }
        
    }
}
