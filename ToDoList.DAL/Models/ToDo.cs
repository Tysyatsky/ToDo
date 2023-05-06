using System.ComponentModel.DataAnnotations;

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
        [Key]
        public int Id { get; set; }
        public int OrderId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(100)]
        public string Description { get; set; }
        public State State { get; set; }
        
    }
}
