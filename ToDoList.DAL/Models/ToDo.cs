using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ToDoList.DAL.Models
{
    public enum State
    {
        [BsonRepresentation(BsonType.Int32)]
        New,
        [BsonRepresentation(BsonType.Int32)]
        InProgress,
        [BsonRepresentation(BsonType.Int32)]
        Done
    }
    public class ToDo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("orderid")]
        public string OrderId { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        [BsonElement("state")]
        public State State { get; set; }
        
    }
}
