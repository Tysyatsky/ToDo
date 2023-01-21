using Microsoft.AspNetCore.Mvc;
using ToDoList.BLL.Interfaces;
using ToDoList.DAL.Models;

namespace ToDoList.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : Controller
    {
        private readonly IToDoService _toDoService;

        public TodoController(IToDoService toDoService)
        {
            _toDoService = toDoService;
        }
        // GET: TodoController/Create
        [HttpPost("/Create")]
        public async Task<IActionResult> Create([FromBody] ToDo toDo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            await _toDoService.Create(toDo);
            return Created("", toDo);
        }

        [HttpGet("/Get/{id}")]
        public IActionResult Get([FromQuery]int id)
        {
            var todo = _toDoService.Get(id);
            if (todo == null)
                return NotFound();
            return Ok(todo);
        }

        // POST: TodoController/Delete/5
        [HttpDelete("/Delete/{id}")]
        public IActionResult Delete([FromQuery]int id)
        {
            try
            {
                _toDoService.Delete(id);
                return NoContent();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
