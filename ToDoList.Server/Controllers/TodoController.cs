using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
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

        [HttpGet("/GetAll")]
        public IActionResult GetAll()
        {   
            var result = _toDoService.GetAll();
            if(result.Count < 0) 
            {
                return BadRequest();
            }
            return Ok(result);
        }

        [HttpGet("/Get/{id}")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            var todo = await _toDoService.Get(id);
            if (todo == null)
                return NotFound();
            return Ok(todo);
        }

        // POST: TodoController/Delete/5
        [HttpDelete("/Delete/{id=id}")]
        public async Task<IActionResult> Delete([FromRoute]int id)
        {
            try
            {
                await _toDoService.Delete(id);
                return NoContent();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpPut("/Update/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] ToDo newTodo)
        {
            try
            {
                var updated = await _toDoService.Update(id, newTodo);
                return Ok(updated);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
